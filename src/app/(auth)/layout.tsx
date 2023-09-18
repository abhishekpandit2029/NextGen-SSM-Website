'use client';

import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Dashboardlayout from '@/components/Main/Layout/Dashboardlayout';
import Image from 'next/image';
import sm from '@/components/Stuff/sm1 (4).svg';

const oppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'NextGen',
  description: 'Home page of NextGen'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={oppins.className}>
      <Dashboardlayout>
        <div className="px-16 pb-8 flex items-center justify-evenly">
          <div>
            <Image src={sm} className="min-w-full" alt="Logo" />
          </div>
          {children}
        </div>
      </Dashboardlayout>
    </div>
  );
}
