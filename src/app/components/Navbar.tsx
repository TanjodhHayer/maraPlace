"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const logoSrc = "/logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side: Logo + Text + Call (desktop) */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="block">
            <Image src={logoSrc} alt="Logo" width={100} height={100} />
          </Link>
          <div className="text-xs text-cyan-500 leading-tight">
            <p>Home for</p>
            <p>special care</p>
          </div>
          <div className="block">
          <a
            href="tel:7054261496"
            className="bg-gray-100 border border-gray-300 text-xs text-black rounded px-2 py-1 inline-block"
          >
            Call now! (705)426-1496
          </a>

          </div>
        </div>


        {/* Right side: Desktop Nav + Mobile Menu Toggle */}
        <div className="flex items-center">
          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 text-white text-sm font-medium bg-cyan-500 rounded">
              {[
                { label: "HOME", path: "/" },
                { label: "COVID-19", path: "/covid-19" },
                { label: "SERVICES", path: "/services" },
                { label: "ABOUT US", path: "/about" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`block px-6 py-5 cursor-pointer ${
                      isActive(link.path) ? "bg-cyan-700" : "hover:bg-cyan-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* More Dropdown (hover on desktop) */}
              <li
                className={`relative group`}
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
              >
                <div
                  className={`block px-6 py-5 cursor-pointer ${
                    pathname.startsWith("/more")
                      ? "bg-cyan-700"
                      : "hover:bg-cyan-700"
                  }`}
                >
                  MORE
                </div>
                {moreOpen && (
                  <ul className="absolute right-0 mt-1 w-40 bg-cyan-500 rounded shadow-lg z-10 text-white text-sm font-normal">
                    <li>
                      <Link
                        href="/more/contact"
                        className={`block px-6 py-3 hover:bg-cyan-700 ${
                          pathname === "/more/contact" ? "bg-cyan-700" : ""
                        }`}
                      >
                        CONTACT US
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more/covid-pages"
                        className={`block px-6 py-3 hover:bg-cyan-700 ${
                          pathname === "/more/covid-pages"
                            ? "bg-cyan-700"
                            : ""
                        }`}
                      >
                        COVID
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* Hamburger for Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-500 md:hidden ml-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <ul className="flex flex-col text-white text-sm font-medium bg-cyan-500 rounded">
          {[
            { label: "HOME", path: "/" },
            { label: "COVID-19", path: "/covid-19" },
            { label: "SERVICES", path: "/services" },
            { label: "ABOUT US", path: "/about" },
          ].map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                onClick={() => {
                  setMenuOpen(false);
                  setMoreOpen(false);
                }}
                className={`block px-6 py-4 cursor-pointer ${
                  isActive(link.path) ? "bg-cyan-700" : "hover:bg-cyan-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}


            {/* More Dropdown in Mobile */}
            <li>
              <div
                className={`block px-6 py-4 cursor-pointer ${
                  pathname.startsWith("/more")
                    ? "bg-cyan-700"
                    : "hover:bg-cyan-700"
                }`}
                onClick={() => setMoreOpen(!moreOpen)}
              >
                MORE
              </div>
              {moreOpen && (
                <ul className="w-full bg-cyan-500 text-white text-sm font-normal">
                  <li>
                    <Link
                      href="/more/contact"
                      onClick={() => {
                        setMenuOpen(false);
                        setMoreOpen(false);
                      }}
                      className={`block px-6 py-3 hover:bg-cyan-700 ${
                        pathname === "/more/contact" ? "bg-cyan-700" : ""
                      }`}
                    >
                      CONTACT US
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/more/covid-pages"
                      onClick={() => {
                        setMenuOpen(false);
                        setMoreOpen(false);
                      }}
                      className={`block px-6 py-3 hover:bg-cyan-700 ${
                        pathname === "/more/covid-pages" ? "bg-cyan-700" : ""
                      }`}
                    >
                      COVID
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

        </nav>
      )}
    </header>
  );
}
