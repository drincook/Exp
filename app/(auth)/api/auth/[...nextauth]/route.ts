import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

const getUser = async () => {
  const user = await getCurrentUser();
  return user;
};

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

// Make sure to call this function when verifying the user in a middleware so that the session is populated.
// We need to redefine the `handle` method on the exported function because we want to add some custom logic
// before delegating to the built-in `NextAuth` implementation.
handler.handle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await getUser();
    if (!user && req.url?.startsWith("/api")) {
      return res.redirect("/login");
    }

    return await handler(req, res);
  } catch (error) {
    console.log("Error in nextauth handle", error);
    return res.status(500).send(error);
  }
};

export { handler as GET, handler as POST };
