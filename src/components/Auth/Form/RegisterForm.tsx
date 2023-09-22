"use client";

import React from "react";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockResetIcon from "@mui/icons-material/LockReset";
import PersonIcon from "@mui/icons-material/Person";

export default function RegisterForm() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-6 bg-gray-100 py-3 px-6 rounded-md">
        <div>
          <PersonIcon />
        </div>
        <div className="flex flex-col w-full">
          <input
            placeholder="Abhishek pandit"
            type="text"
            className="border-2 h-8 w-full text-sm bg-gray-100 outline-none border-none"
          />
        </div>
      </div>
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
            placeholder="••••••••••••"
            type="password"
            className="border-2 h-8 w-full text-sm bg-gray-100 outline-none border-none tracking-widest"
          />
        </div>
      </div>
      <div className="flex items-center space-x-6 bg-gray-100 py-3 px-6 rounded-md">
        <div>
          <LockResetIcon />
        </div>
        <div className="flex flex-col w-full">
          <input
            placeholder="••••••••••••"
            type="password"
            className="border-2 h-8 w-full text-sm bg-gray-100 outline-none border-none tracking-widest"
          />
        </div>
      </div>
      <div>
        <button className="rounded-lg border-2 py-2 px-3 text-sm">
          Register
        </button>
      </div>
    </div>
  );
}
