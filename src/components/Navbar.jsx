import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li className="hover:text-green-700 cursor-pointer font-semibold">Beranda</li>
          <li className="hover:text-green-700 cursor-pointer">Tentang</li>
          <li className="hover:text-green-700 cursor-pointer">Program</li>
          <li className="hover:text-green-700 cursor-pointer">Produk</li>
        </ul>

        {/* Tombol */}
        <div>
          <button className="bg-[#547047] hover:bg-[#45603A] text-white px-4 py-1 rounded-full text-sm hover:bg-green-700 transition">
            Hubungi Kami
          </button>
        </div>
      </div>
    </nav>
  );
}
    