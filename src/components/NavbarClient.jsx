"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";

const NavbarClient = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="navbar-end gap-2">
      {!user && (
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/login" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200">
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200">
              Register
            </Link>
          </li>
        </ul>
      )}

      {user && (
        <div className="flex gap-3 items-center">
          <Avatar>
            <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
            <Avatar.Fallback>{user?.name[0].toLocaleUpperCase()}</Avatar.Fallback>
          </Avatar>
          <button onClick={handleLogOut} className="btn btn-error">
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarClient;