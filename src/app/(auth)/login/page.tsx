'use client'

import React from "react";
import Image from "next/image";
import sm from "@/components/Stuff/sm1 (4).svg";

function Loginpage() {
    return (
        <div className="px-16 flex items-center justify-between">
            <div>
                <div><p>Welcome trendsetter :)</p></div>
                <div><p>To keep connected with us please login with your personal information by email address and password.</p></div>
                <div>
                    <div></div>
                    <div><p>Email Address</p><input type="text"/></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div><p>Password</p><input type="password"/></div>
                    <div></div>
                </div>
                <div>
                    <div><p>Remember Me</p></div>
                    <div><p>Forgot Password?</p></div>
                </div>
                <div>
                    <div><button>Login Now</button></div>
                    <div><button>Create Account</button></div>
                </div>
                <p>Or you can join with</p>
                <div>
                    
                </div>
            </div>
            <div>
                <Image src={sm} className="min-w-full" alt="Logo" />
            </div>
        </div>
    );
}

export default Loginpage;

