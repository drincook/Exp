/*import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prismadb";
import type { Adapter } from "next-auth/adapters";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };*/

import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prismadb";
import type { Adapter } from "next-auth/adapters";
import { NextApiRequest, NextApiResponse } from "next";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export default handler;

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Código para manejar el método GET
    res.status(200).json({ message: "GET request handled successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  } // Código para manejar el método GET
};

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  // Código para manejar el método POST
  try {
    // Código para manejar el método POST
    res.status(200).json({ message: "POST request handled successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
