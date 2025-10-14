import React from "react";
import Navbar from "./components/Navbar";
import background from "./assets/background.png"; 
import petani from "./assets/petani.png";
function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full h-[90vh] mt-14 flex items-center justify-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay gelap agar teks lebih jelas */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Konten teks */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-snug">
            Inovasi Drip Irrigation untuk <br />
            <span className="text-[#C5172E]">
              Kebun Cabai Berkualitas Tinggi
            </span>
          </h1>
          <p className="text-sm md:text-lg mb-6 max-w-2xl">
            “Pemberdayaan Kelompok Tani Cabai Baran Guna Peningkatan
            Produktifitas Panen dengan Menerapkan IoT untuk Monitoring Lahan dan
            Sistem Drip Irrigation.”
          </p>
          <button className="bg-[#547047] hover:bg-[#45603A] text-white px-8 py-2 rounded-md font-medium transition duration-300">
            Lihat Program
          </button>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section className="py-12 bg-white flex flex-col items-center">
        {/* Judul */}
        <h2 className="text-2xl font-semibold text-green-700 mb-6">
          Tentang Kami
        </h2>

        {/* Konten utama */}
        <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl px-4 md:px-0">
          {/* Gambar petani */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
            <img
              src={petani}
              alt="Petani"
              className="w-40 h-auto mx-auto md:mx-0"
            />
          </div>

          {/* Deskripsi */}
          <div className="border border-green-300 rounded-lg p-6 shadow-sm text-justify leading-relaxed text-gray-700">
            <p>
              PPK Ormawa merupakan program pengembangan mahasiswa yang berfokus
              pada inovasi pertanian cabai melalui pembuatan alat{" "}
              <strong>drip irrigation</strong> untuk sistem pengairan efisien di
              kebun cabai. Melalui penerapan teknologi ini, kami berhasil
              menghasilkan produk olahan bernilai tambah berupa{" "}
              <strong>chili oil</strong>, yang menjadi bukti nyata penerapan
              teknologi tepat guna di sektor pertanian.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
