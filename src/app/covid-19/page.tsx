// src/app/covid19/page.tsx
"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
export default function COVID19Page() {
  const bgImage = "/covid.jpg";

  return (
    <main className="flex flex-col items-center justify-center py-16 px-4 bg-white text-center mt-36">
      {/* Background Image with Overlay */}
      <div className="relative w-full max-w-5xl h-[400px] sm:h-[500px] md:h-[600px]">
        <Image
          src={bgImage}
          alt="COVID-19 Background"
          className="rounded-lg object-cover"
          fill
          priority
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/80 text-white p-8 rounded-full max-w-md text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">COVID-19</h2>
            <p className="text-sm md:text-base leading-relaxed">
              The health and well-being of our residents is our top priority. Learn about the protective measures Mara Place Residence has in place to help mitigate the spread of COVID-19.
            </p>
            <Link
            href="/more/covid-pages"
            className="inline-block mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-200 text-sm font-medium transition"
            >
            Responsive Measures
            </Link>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-8">
        <a
          href="#"
          className="bg-teal-500 p-3 rounded-full text-white hover:bg-teal-600 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="bg-teal-500 p-3 rounded-full text-white hover:bg-teal-600 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="bg-teal-500 p-3 rounded-full text-white hover:bg-teal-600 transition"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </main>
  );
}
