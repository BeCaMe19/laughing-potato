import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import db from '@/libs/db';
import { options } from "@/app/api/auth/[...nextauth]/options";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getServerSession(options);

  if (!session?.user?.email) {
    throw new Error('Not signed in');
  }

  const currentUser = await db.user.findUnique({
    where: {
      email: session.user.email,
    }
  });
  
  if (!currentUser) {
    throw new Error('Not signed in');
  }
  
  return { currentUser };
}

export default serverAuth;
