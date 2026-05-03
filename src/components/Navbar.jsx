"use client"
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {

  const userData = authClient.useSession();
  // console.log(userData);
  const user = userData.data?.user;
  // console.log(user)
  
  const handleLogOut = async () => {
    await authClient.signOut();
  }

  return (
    <div className="container mx-auto navbar bg-base-100 p-4">

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/my-profile">My Profile</Link></li>
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
          SkillSphere
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/my-profile">My Profile</Link></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">

        { !user &&
          <ul className="flex items-center gap-5">
          <li>
            <Link href="/login" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200">Login</Link>
          </li>
          <li>
            <Link href="/register" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200">Register</Link>
          </li>
        </ul>}

        { user && (
          <div className="flex gap-3">
            <Avatar>
              <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer"/>
              <Avatar.Fallback>{user?.name[0].toLocaleUpperCase()}</Avatar.Fallback>
            </Avatar>
            <button onClick={handleLogOut} className="btn btn-error">Log Out</button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;