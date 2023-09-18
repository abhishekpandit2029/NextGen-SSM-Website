import React from "react";
import Image from "next/image";
import Logo from "@/components/Stuff/logo.png";

function Footer() {
  return (
    <div>
      <footer>
        <div className="w-full flex flex-col px-16 py-6 space-y-8">
          <div>
            <a href="#" className="flex items-center space-x-2">
              <Image src={Logo} className="w-11 h-11" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Next<span className="text-teal-700">G</span>en
              </span>
            </a>
          </div>

          <div className="flex justify-between">
            <div className="flex space-x-16">
              <div>
                <h2 className="mb-4 text-md font-semibold text-gray-900 uppercase">
                  Products
                </h2>
                <ul className="text-gray-500 leading-7 dark:text-gray-400 font-medium">
                  <li>
                    <a href="#" className="hover:underline">
                      Why NextGen?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Product Updates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Status
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Email Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Transactional Email
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">
                  Resources
                </h2>
                <ul className="text-gray-500 leading-7 dark:text-gray-400 font-medium">
                  <li>
                    <a href="#" className="hover:underline">
                      Marketing Library
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Marketing Tools
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Marketing Glossary
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Integration Directory
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">
                  Community
                </h2>
                <ul className="text-gray-500 leading-7 dark:text-gray-400 font-medium">
                  <li>
                    <a href="#" className="hover:underline ">
                      Agencies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline ">
                      Freelancers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Events
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">
                  Company
                </h2>
                <ul className="text-gray-500 leading-7 dark:text-gray-400 font-medium">
                  <li>
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Newsroom
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Accessibility
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">
                  Help
                </h2>
                <ul className="text-gray-500 leading-7 dark:text-gray-400 font-medium">
                  <li>
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Hire an Expert
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Talk to Sales
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[30rem] border bg-teal-700 flex flex-col justify-center px-24 rounded-tl-full rounded-br-full">
              <p className="text-white flex flex-row-reverse leading-9">
                (555) 123-4567
              </p>
              <p className="text-white flex flex-row-reverse leading-9">
                support@nextgen.com
              </p>
              <p className="text-white flex flex-row-reverse">
                1234 Social Media Street Suite 567 Cityville, Digitaland 54321
                United States
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-8 text-gray-900">
            <p>
              © 2023 NextGen Software, All rights reserved.
            </p>
            <p>Privacy Policy | Terms of Use</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
