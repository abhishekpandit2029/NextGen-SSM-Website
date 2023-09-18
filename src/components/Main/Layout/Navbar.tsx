import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Stuff/logo.png";
import { usePathname } from 'next/navigation';

function Navbar() {
  const activeStyle = 'text-teal-700 font-semibold'; 
  const nonActiveStyle ='text-black font-normal';
  const currentRoute = usePathname();
  return (
    <div>
      <nav className="flex justify-between items-center py-8 px-16">
        <div>
          <Link href="home">
            <Image alt="Logo" src={Logo} className="w-12 h-12" />
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <Link className={currentRoute === 'home' ? activeStyle : nonActiveStyle} href="home">Home</Link>
          <Link className={currentRoute === '' ? activeStyle : nonActiveStyle} href="#">About us</Link>
          <Link className={currentRoute === '' ? activeStyle : nonActiveStyle} href="#">Our pursuits</Link>
          <Link className={currentRoute === '' ? activeStyle : nonActiveStyle} href="#">Prospects</Link>
          <Link className={currentRoute === '' ? activeStyle : nonActiveStyle} href="#">Testimonials</Link>
          <Link className={currentRoute === '' ? activeStyle : nonActiveStyle} href="#">FAQ's</Link>
          <Link className={currentRoute === '' ? activeStyle : nonActiveStyle} href="#">Contact us</Link>
          <Link className={currentRoute === '/login' ? activeStyle : nonActiveStyle} href="login">
            <button className="rounded-lg border-2 py-2 px-3">SignIn</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
