"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();

  const { data: session } = useSession();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black h-[450px]  absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img
            className="w-4 rounded-md"
            src="/images/default-blue.png"
            alt=""
          />
          <div>
            {" "}
            <p className="text-white text-sm group-hover/item:underline">
              ID:
              <br />
              {currentUser?.id}
            </p>
          </div>
          <div>
            {" "}
            <p className="text-white text-sm group-hover/item:underline">
              EMAIL: {currentUser?.email}
            </p>
          </div>
          <div>
            {" "}
            <p className="text-white text-sm group-hover/item:underline">
              IMAGE:{currentUser?.imageUrl}
            </p>
          </div>

          <div></div>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />

      {session ? (
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign in
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
