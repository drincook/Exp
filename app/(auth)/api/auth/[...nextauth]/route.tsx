import type { NextApiRequest, NextApiResponse } from "next";
import { NextApiRequest as Request } from "next";
import NextAuth from "next-auth";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { authOptions } from "../../../utils/authRoute";

const getUser = async () => {
  const user = await getCurrentUser();
  return user;
};

const handler = NextAuth(authOptions);

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

export default handler;
