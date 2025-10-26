// Footer.jsx
import React from "react";
import logo from "../assets/logo.png"; // sesuaikan path

const Footer = () => {
  return (
    <footer className="bg-[#C7DB9C] pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-start md:items-start justify-between gap-12">
        
        {/* Logo & Deskripsi */}
        <div className="flex items-center gap-4 md:gap-6 flex-1 md:flex-none">
          <img src={logo} alt="Logo" className="w-35 h-35 object-contain" />
          <p className="text-gray-800 text-lg max-w-xs">
            Meningkatkan hasil panen, pendapatan petani, dan kesuburan lahan cabai.
          </p>
        </div>

        {/* Tiga Kolom: Program, Sosial Media, Kontak */}
        <div className="flex flex-col md:flex-row flex-1 justify-between gap-8 md:gap-12">
          
          {/* Program */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">Program</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a href="#drip-irrigation" className="text-gray-800 hover:text-gray-600 transition-colors">
                  Drip Irrigation
                </a>
              </li>
              <li>
                <a href="#kebun-cabai" className="text-gray-800 hover:text-gray-600 transition-colors">
                  Kebun Cabai
                </a>
              </li>
              <li>
                <a href="#produk-olahan" className="text-gray-800 hover:text-gray-600 transition-colors">
                  Produk Olahan
                </a>
              </li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">Sosial Media</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak Kami */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">Kontak Kami</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a href="tel:+621234567890" className="text-gray-800 hover:text-gray-600 transition-colors">
                  +62 123-4567-890
                </a>
              </li>
              <li>
                <a href="https://goo.gl/maps/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
                  Alamat
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-black pt-6 text-center text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} PPK Ormawa Himatikro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
