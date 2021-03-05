import React, { useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { isLoggedIn, logOutUser } from "./../../utils/loginUser";

export default function Header() {
  //   const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  const onLoginClick = () => {
    if (isLoggedIn()) {
      logOutUser();
    }
    router.push("/login");
  };

  return (
    <div className="flex flex-row justify-between align-items-middle pl-4 pr-8 pt-2 pb-2 font-mono border-b-2">
      <div className="text-lg">
        <Link href={!isLoggedIn() ? "/" : "/dashboard"}>
          computer vision based entry management system
        </Link>
      </div>
      <button
        className="border-blue-500 border-2 rounded hover:bg-blue-400 hover:text-white p-0.5 pl-2 pr-2 text-sm"
        onClick={onLoginClick}
      >
        {isLoggedIn() ? "Logout" : "Login"}
      </button>
    </div>
  );
}
