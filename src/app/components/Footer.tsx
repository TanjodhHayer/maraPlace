"use client";
import Image from "next/image";

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
          <p>Tel: +1-705-426-1496</p>
          <p>Email: <a href="mailto:themaraplace@gmail.com" className="underline">themaraplace@gmail.com</a></p>
        </div>

        {/* Column 4: Social Icons */}
        <div className="flex justify-center md:justify-end space-x-3">
          <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-600 transition">
            <i className="fab fa-facebook-f text-white"></i>
          </a>
          <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-600 transition">
            <i className="fab fa-twitter text-white"></i>
          </a>
          <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-600 transition">
            <i className="fab fa-instagram text-white"></i>
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
