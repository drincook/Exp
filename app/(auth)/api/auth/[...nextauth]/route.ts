import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { authOptions } from "../../../utils/authRoute";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";

function getSession() {
  return getServerSession(authOptions);
}

const handler = NextAuth(authOptions);

handler.handle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await getSession();
    if (!user && req.url?.startsWith("/api")) {
      return res.redirect("/login");
    }

    return await handler(req, res);
  } catch (error) {
    console.log("Error in nextauth handle", error);
    return res.status(500).send(error);
  }
};

export const GET = async (req: Request | NextRequest, res: NextApiResponse) => {
  return await handler.handle(req, res);
};

export const POST = async (
  req: Request | NextRequest,
  res: NextApiResponse
) => {
  return await handler.handle(req, res);
};


/*export const POST = async (
  req: NextApiRequest | Request,
  res: NextApiResponse
) => {
  return await handler.handle(req, res);
};*/
