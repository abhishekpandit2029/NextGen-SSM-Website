import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Logo from "@/components/Stuff/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center py-8 px-16">
        <div>
          <Image alt="Logo" src={Logo} className="w-12 h-12" />
        </div>
        <div className="flex items-center space-x-8">
          <Link href="home">Home</Link>
          <Link href="#">About us</Link>
          <Link href="#">Our pursuits</Link>
          <Link href="#">Prospects</Link>
          <Link href="#">Testimonials</Link>
          <Link href="#">FAQ's</Link>
          <Link href="#">Contact us</Link>
          <Link href="login">
            <button className="rounded-lg border-2 py-2 px-3">SignIn</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar