import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextResponse) {
  try {
    if (req.method !== 'GET') {
    return new NextResponse("Not GET", { status: 405 });


    }

    const { currentUser } = await serverAuth(req);
    return  NextResponse.json(currentUser);


  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
