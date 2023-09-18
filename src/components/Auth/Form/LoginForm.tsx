'use client';

import React from 'react';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <div className="flex flex-col space-y-5 w-[25rem]">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-6 bg-gray-100 py-3 px-6 rounded-md">
          <div>
            <MailOutlineRoundedIcon />
          </div>
          <div className="flex flex-col w-full">
            <input
              placeholder="example@gmail.com"
              type="text"
              className="border-2 h-8 w-full text-sm bg-gray-100 outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center space-x-6 bg-gray-100 py-3 px-6 rounded-md">
          <div>
            <LockOutlinedIcon />
          </div>
          <div className="flex flex-col w-full">
            <input
              placeholder="••••••"
              type="password"
              className="border-2 h-8 w-full text-sm bg-gray-100 outline-none border-none tracking-widest"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-sm">Remember Me</p>
        </div>
        <div>
          <Link href="forgot-password">
            <p className="hover:underline text-sm cursor-pointer">
              Forgot Password?
            </p>
          </Link>
        </div>
      </div>
      <div className="flex space-x-4">
        <div>
          <button className="rounded-lg border-2 py-2 px-3 text-sm">
            Login Now
          </button>
        </div>
        <div>
          <Link href="register">
            <button className="rounded-lg border-2 py-2 px-3 text-sm">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
