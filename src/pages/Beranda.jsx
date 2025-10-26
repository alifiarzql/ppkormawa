import React, { useRef, useEffect } from "react";
import Footer from "../components/Footer";

// Gambar utama
import background from "../assets/background.png";
import tentangkami from "../assets/tentangkami.png";
import contoh from "../assets/contoh.png";

// Icons
import produktivitasIcon from "../assets/icons/produktivitasIcon.png";
import efisiensiIcon from "../assets/icons/efisiensiIcon.png";
import pemantauanIcon from "../assets/icons/pemantauanIcon.png";
import biayaIcon from "../assets/icons/biayaIcon.png";
import ramahIcon from "../assets/icons/ramahIcon.png";
import kemajuanIcon from "../assets/icons/kemajuanIcon.png";

//kegiatan
import drip from "../assets/drip.png";

// Produk
import Product1 from "../assets/Product1.png";

export default function Beranda() {
  const items = [
    { title: "PLTS (Pembangkit Listrik Tenaga Surya)", image: contoh },
    { title: "Sprinkle", image: contoh },
    { title: "Drip Irrigation", image: drip },
    { title: "Pompa Otomatis", image: contoh },
    { title: "IoT (Internet of Things)", image: contoh },
  ];

  const manfaatList = [
    { icon: produktivitasIcon, text: "Meningkatkan Produktivitas" },
    { icon: efisiensiIcon, text: "Efisiensi Penggunaan Air dan Pupuk" },
    { icon: pemantauanIcon, text: "Pemantauan Tanaman Secara Real-Time" },
    { icon: biayaIcon, text: "Mengurangi Biaya Operasional" },
    { icon: ramahIcon, text: "Ramah Lingkungan" },
    { icon: kemajuanIcon, text: "Kemajuan Teknologi untuk Pertanian Masa Kini" },
  ];

  const products = [
    { id: 1, name: "Chili Oil", image: Product1 },
    { id: 2, name: "Cabai Bubuk", image: Product1 },
    { id: 3, name: "Cabai Kering", image: Product1 },
  ];

  // Ref untuk carousel
  const carouselRef = useRef(null);
  const scrollPos = useRef(0);
  const frameId = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const speed = 0.8;
    let isPaused = false;

    const animate = () => {
      if (!isPaused) {
        scrollPos.current += speed;
        if (scrollPos.current >= carousel.scrollWidth - carousel.clientWidth) {
          scrollPos.current = 0;
        }
        carousel.scrollLeft = scrollPos.current;
      }
      frameId.current = requestAnimationFrame(animate);
    };

    animate();

    carousel.addEventListener("mouseenter", () => (isPaused = true));
    carousel.addEventListener("mouseleave", () => (isPaused = false));

    return () => {
      cancelAnimationFrame(frameId.current);
      carousel.removeEventListener("mouseenter", () => {});
      carousel.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full mt-16 h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-snug">
            Inovasi Smart Farming untuk <br />
            <span className="text-white">Kebun Cabai Berkualitas Tinggi</span>
          </h1>
          <p className="text-sm md:text-lg mb-6 max-w-2xl mx-auto">
            Pemberdayaan petani melalui penerapan teknologi IoT, monitoring
            lahan cerdas, dan sistem pertanian pintar untuk meningkatkan
            efisiensi dan produktivitas panen.
          </p>
          <button className="bg-[#547047] hover:bg-[#45603A] text-white px-8 py-2 rounded-md font-medium transition duration-300">
            Lihat Program
          </button>
        </div>
      </section>

      {/* Manfaat Program */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#486B38] text-center mb-12">
            Manfaat Program
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {manfaatList.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-5 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-[#F6FFF8]"
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-gray-800 font-medium text-lg leading-snug group-hover:text-[#486B38] transition-colors duration-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="py-10 bg-[#E0F6CF]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center gap-8">
          <div className="flex-shrink-0 flex justify-center">
            <img
              src={tentangkami}
              alt="Tentang Kami"
              className="w-40 h-40 object-cover rounded-full border-4 border-[#547047] shadow-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#547047] mb-3">
              Tentang Kami
            </h2>
            <p className="text-gray-700 text-[17px] leading-relaxed text-justify">
              PPK Ormawa Himatikro menjalankan program pengembangan pertanian di
              Desa Baran melalui penerapan teknologi <b>Smart Farming</b>.
              Program ini berfokus pada optimalisasi budidaya cabai dengan
              memanfaatkan <b>teknologi irigasi tetes</b> yang efisien dan ramah
              lingkungan. Kegiatan ini dilaksanakan bersama{" "}
              <b>kelompok tani Muda Manunggal Roso</b> sebagai mitra utama,
              dengan tujuan meningkatkan produktivitas pertanian, efisiensi
              penggunaan air, serta pemberdayaan petani muda melalui penerapan
              inovasi berbasis teknologi.
            </p>
          </div>
        </div>
      </section>

      {/* Apa yang Kami Lakukan */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#547047] mb-8 text-center">
            Apa yang Kami <span className="text-black">Lakukan?</span>
          </h2>

          <div ref={carouselRef} className="flex space-x-8 overflow-x-hidden py-6">
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-96 h-80 bg-white rounded-3xl shadow-lg p-4 border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:border-[#547047] hover:-translate-y-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl w-full h-56 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk Kami */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#547047] mb-2">
            Produk Terbaik Kami
          </h2>
          <p className="text-gray-700 mb-10">
            Hasil olahan terbaik dari kebun kami, mempunyai kualitas premium dan cita rasa khas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="p-4">
                <p className="text-red-600 font-semibold mb-2">{product.name}</p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto mb-4 w-32 h-32 object-contain"
                />
                <button className="bg-[#547047] text-white px-4 py-2 rounded-md hover:bg-[#45603A] transition">
                  Lihat Produk
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
