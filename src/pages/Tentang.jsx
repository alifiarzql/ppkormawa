import React, { useState } from "react";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";

// Gambar tim
import pembimbing from "../assets/tim/pembimbing.png";
import nizar from "../assets/tim/nizar.png";
import sekretaris from "../assets/tim/naya.png";
import bendahara from "../assets/tim/lupita.png";
import galu from "../assets/tim/galu.png";
import rafiko from "../assets/tim/rafiko.png";
import risky from "../assets/tim/risky.png";
import inggrid from "../assets/tim/inggrid.png";
import wafi from "../assets/tim/wafi.png";
import alifia from "../assets/tim/alifia.png";
import alan from "../assets/tim/alan.png";
import ali from "../assets/tim/ali.png";
import dandy from "../assets/tim/dandy.png";
import fawwaz from "../assets/tim/fawwaz.png";
import zahidan from "../assets/tim/zahidan.png";
import ricard from "../assets/tim/ricard.png";

const Tentang = () => {
  const tim = [
    { nama: "Radiktyo Nindyo S.ST., MT.", jabatan: "Pembimbing", foto: pembimbing },
    { nama: "Nizar Ahmed", jabatan: "Ketua Tim", foto: nizar },
    { nama: "Naya Kirania", jabatan: "Sekretaris", foto: sekretaris },
    { nama: "Lupita Julindara S.", jabatan: "Bendahara", foto: bendahara },
    { nama: "Achmad Galu Pratama", jabatan: "Acara", foto: galu },
    { nama: "Rafiko Febriansyah", jabatan: "Acara", foto: rafiko },
    { nama: "M. Risky Adji Prayoga", jabatan: "Acara", foto: risky },
    { nama: "Inggrida Kusuma W.", jabatan: "Humas", foto: inggrid },
    { nama: "M. Ihsan Wafiudin", jabatan: "Humas", foto: wafi },
    { nama: "Alifia Rizqul Ula", jabatan: "Media", foto: alifia },
    { nama: "Haidar Alan Fahira", jabatan: "Media", foto: alan },
    { nama: "Ali Murtadho", jabatan: "Media", foto: ali },
    { nama: "Dandy Ferdiansyah", jabatan: "Logistik", foto: dandy },
    { nama: "Syaiful Fawwaz A.H", jabatan: "Logistik", foto: fawwaz },
    { nama: "Ahmad Zahidan", jabatan: "Logistik", foto: zahidan },
    { nama: "Ricardo", jabatan: "Logistik", foto: ricard },
  ];

  // Data sekretariat
  const sekretariat = [
    { id: 1, nama: "Sekretariat Baran", deskripsi: "Baran, Ambarawa" },
    { id: 2, nama: "Sekretariat Himatikro", deskripsi: "Gedung E Lt.2, Unimus" },
    { id: 3, nama: "Sekretariat Lapangan", deskripsi: "Area Kebun Cabai" },
  ];

  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % sekretariat.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + sekretariat.length) % sekretariat.length);

  return (
    <div className="bg-white min-h-screen pt-18">
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Judul */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#547047] mb-10 tracking-wide">
          Tentang <span className="text-black">PPK Ormawa Himatikro</span>
        </h2>

        {/* Konten utama */}
        <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex-shrink-0 w-44 mx-auto md:mx-0">
            <img src={logo} alt="Logo Himatikro" className="w-full object-contain" />
          </div>

          <div className="flex-1 text-justify">
            <p className="text-gray-700 leading-relaxed border-l-4 border-[#547047] pl-5 text-[15px]">
              Program Penguatan Kapasitas Organisasi Himpunan Mahasiswa Teknik
              Elektro (HIMATIKRO) merupakan program pengabdian masyarakat yang
              berfokus pada penerapan inovasi teknologi untuk mendukung
              pembangunan berkelanjutan di sektor pertanian. Melalui program
              ini, mahasiswa berperan aktif dalam menciptakan solusi teknologi
              tepat guna, seperti sistem drip irrigation berbasis IoT, yang
              bertujuan untuk meningkatkan efisiensi penggunaan air serta
              produktivitas hasil pertanian masyarakat.
            </p>
          </div>
        </div>

        {/* Tim Pelaksana */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#547047] mb-12">
            Tim Pelaksana Program
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-14 justify-items-center">
            {tim.map((item, index) => (
              <div
                key={index}
                className="group [perspective:1000px] w-44 h-56 md:w-48 md:h-60"
              >
                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Sisi depan */}
                  <div className="absolute inset-0 rounded-xl shadow-md overflow-hidden [backface-visibility:hidden]">
                    <img
                      src={item.foto}
                      alt={item.nama}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Sisi belakang */}
                  <div className="absolute inset-0 bg-[#6A8555] text-white rounded-xl flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-md px-2 text-center">
                    <p className="text-sm font-semibold leading-snug">{item.jabatan}</p>
                    <p className="text-xs mt-1 opacity-90">{item.nama}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sekretariat Kami */}
        <section className="mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            <span className="text-[#547047]">Sekretariat</span> Kami
          </h2>

          <div className="relative flex justify-center items-center gap-6">
            {/* Tombol kiri */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-10 text-gray-400 hover:text-[#547047] text-3xl font-bold"
            >
              ‹
            </button>

            {/* Carousel */}
            <div className="flex items-center gap-6 overflow-hidden">
              {sekretariat.map((item, index) => {
                const isActive = index === current;
                return (
                  <div
                    key={item.id}
                    className={`w-52 md:w-72 h-40 md:h-48 rounded-xl bg-gray-300 flex flex-col items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-60 blur-[1px]"
                    }`}
                  >
                    <h3 className="font-semibold text-gray-800">{item.nama}</h3>
                    <p className="text-sm text-gray-600">{item.deskripsi}</p>
                  </div>
                );
              })}
            </div>

            {/* Tombol kanan */}
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-10 text-gray-400 hover:text-[#547047] text-3xl font-bold"
            >
              ›
            </button>
          </div>

          {/* Indikator */}
          <div className="flex justify-center mt-6 space-x-2">
            {sekretariat.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  index === current ? "bg-gray-400" : "bg-gray-200"
                }`}
              ></div>
            ))}
          </div>
        </section>

        {/* Lokasi Pelaksanaan Program */}
        <section className="mt-16 mb-10 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#547047] mb-6 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#547047]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z"
              />
            </svg>
            Lokasi Pelaksanaan Program
          </h2>

          <div className="w-11/12 md:w-3/4 mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.150777895049!2d110.37949503675057!3d-7.236540441336293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70815191902939%3A0xd259d22a23f4b143!2smuda%20manunggal%20roso!5e0!3m2!1sid!2sid!4v1761309443324!5m2!1sid!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Pelaksanaan Program"
              className="rounded-xl shadow-md"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tentang;
