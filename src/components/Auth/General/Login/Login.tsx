'use client';

import React from 'react';
import Image from 'next/image';
import google from '@/components/Stuff/google.svg';
import facebook from '@/components/Stuff/facebook.svg';
import twitter from '@/components/Stuff/twitter.svg';
import LoginForm from '../../Form/LoginForm';

export default function Login() {
  return (
    <div className="flex flex-col space-y-5 w-[25rem]">
      <div>
        <p className="text-[2.5rem]">Welcome trendsetter :)</p>
      </div>
      <div>
        <p className="text-sm">
          To keep connected with us please login with your personal information
          by email address and password.
        </p>
      </div>
      <LoginForm />
      <p className="text-sm">Or you can join with</p>
      <div className="flex space-x-4">
        <Image src={google} className="w-8" alt="google" />
        <Image src={facebook} className="w-8" alt="facebook" />
        <Image src={twitter} className="w-8" alt="twitter" />
      </div>
    </div>
  );
}
