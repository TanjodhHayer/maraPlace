"use client";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="w-full bg-cyan-400 text-gray-900 text-sm py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left items-start">
        {/* Column 1: Copyright */}
        <div>
          <p>All rights reserved © 2022</p>
        </div>

        {/* Column 2: Address */}
        <div className="font-semibold">
          <p>30455 Regional Rd 23</p>
          <p>Beaverton ON</p>
          <p>L0K 1A0</p>
        </div>

        {/* Column 3: Contact */}
        <div className="font-semibold">
          <a href="tel:7054261496">Tel: +1-705-426-1496</a>
          <p>Email: <a href="mailto:themaraplace@gmail.com" className="underline">themaraplace@gmail.com</a></p>
        </div>

        {/* Column 4: Social Icons */}
        {/* Social Icons */}
        <div className="flex space-x-4 mt-8 justify-center">
          <a
            href="#"
            className="bg-cyan-900 p-3 rounded-full text-white hover:bg-teal-600 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-cyan-900 p-3 rounded-full text-white hover:bg-teal-600 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="bg-cyan-900 p-3 rounded-full text-white hover:bg-teal-600 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Designer Credit */}
      <div className="text-center mt-4 underline">
        <a href="#" className="hover:text-gray-800">
          Website by: Tanjodh Hayer
        </a>
      </div>
    </footer>
  );
}
