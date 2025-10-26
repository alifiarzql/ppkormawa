import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // pastikan path logo sesuai

const Navbar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang", path: "/tentang" },
    { name: "Program", path: "/program" },
    { name: "Produk", path: "/produk" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full shadow-xl bg-white py-4 px-10 flex justify-between items-center z-50">
      {/* Logo di kiri */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Menu + Tombol di kanan */}
      <div className="flex items-center space-x-8">
        {/* Menu */}
        <ul className="flex space-x-8 text-[#547047] font-semibold">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`transition border-b-2 ${
                  location.pathname === item.path
                    ? "font-bold text-[#3a5230] border-[#3a5230]"
                    : "hover:text-[#3a5230] border-transparent hover:border-[#3a5230]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol Hubungi Kami */}
        <Link
          to="/hubungi"
          className="bg-[#547047] text-white font-semibold px-8 py-2 rounded-full hover:bg-[#3a5230] transition"
        >
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
