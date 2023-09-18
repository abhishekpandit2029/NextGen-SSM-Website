"use client";

import React from "react";
import Image from "next/image";
import sm from "@/components/Stuff/sm1 (4).svg";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import google from "@/components/Stuff/google.svg";
import facebook from "@/components/Stuff/facebook.svg";
import twitter from "@/components/Stuff/twitter.svg";
import {Checkbox} from 'antd';

interface CheckProps{
    value: boolean
}

export default function Login() {
    const onChangeCheckbox = (value: CheckProps) => {
        // console.log(`checked = ${value.target.checked}`); it gives value true if box is checked
      };
    return (
        <div className="px-16 pb-8 flex items-center justify-evenly">
            <div>
                <Image src={sm} className="min-w-full" alt="Logo" />
            </div>
            <div className="flex flex-col space-y-4 w-[25rem]">
                <div>
                    <p className="text-[2.5rem]">Welcome trendsetter :)</p>
                </div>
                <div>
                    <p className="text-sm">
                        To keep connected with us please login with your personal
                        information by email address and password.
                    </p>
                </div>
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
                        <Checkbox onChange={onChangeCheckbox}><p className="text-sm">Remember Me</p></Checkbox>
                    </div>
                    <div>
                        <p className="hover:underline text-sm">Forgot Password?</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <button className="rounded-lg border-2 py-2 px-3 text-sm">Login Now</button>
                    </div>
                    <div>
                        <button className="rounded-lg border-2 py-2 px-3 text-sm">
                            Create Account
                        </button>
                    </div>
                </div>
                <p className="text-sm">Or you can join with</p>
                <div className="flex space-x-4">
                    <Image src={google} className="w-8" alt="google" />
                    <Image src={facebook} className="w-8" alt="facebook" />
                    <Image src={twitter} className="w-8" alt="twitter" />
                </div>
            </div>
        </div>
    );
}
