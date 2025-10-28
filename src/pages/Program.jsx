import React from "react";
import Footer from "../components/Footer";
import drip2 from "../assets/drip2.png";
import sprinkel from "../assets/sprinkel2.png";
import dokumentasi from "../assets/dokumentasi.png";
import dokumentasi1 from "../assets/dokumentasi1.png";
import dokumentasi2 from "../assets/dokumentasi2.png";
import dokumentasi3 from "../assets/dokumentasi3.png";
import dokumentasi4 from "../assets/dokumentasi4.png";
import dokumentasi5 from "../assets/dokumentasi5.png";


const programs = [
  {
    title: "Drip Irrigation",
    description:
      "Program Drip Irrigation PPK Ormawa merupakan inisiatif mahasiswa yang menerapkan teknologi irigasi tetes untuk meningkatkan efisiensi penggunaan air dalam budidaya cabai. Dengan menyalurkan air langsung ke akar tanaman secara terukur, sistem ini membantu mengurangi pemborosan air, menjaga kelembapan tanah, serta meningkatkan hasil panen.",
    imageLeft: true,
    image1: drip2,
    image2: sprinkel,
  },
  {
    title: "Pompa Air Otomatis",
    description:
      "Program Pompa Air Otomatis PPK Ormawa memanfaatkan sensor dan sistem kontrol untuk menyalakan serta mematikan pompa berdasarkan kebutuhan air tanaman. Dengan teknologi ini, petani tidak perlu mengoperasikan pompa secara manual, sehingga penggunaan air menjadi lebih efisien, waktu lebih hemat, dan proses irigasi dapat berlangsung konsisten sepanjang hari.",
    imageLeft: false,
    image1: sprinkel,
    image2: drip2,
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "Program IoT PPK Ormawa mengintegrasikan sensor kelembapan tanah, suhu, dan ketinggian air dengan sistem berbasis internet untuk pemantauan dan kendali jarak jauh. Data yang dikirim secara real-time membantu petani membuat keputusan yang lebih tepat dalam pengairan dan pemeliharaan tanaman, serta mendukung penerapan pertanian cerdas yang modern dan efisien.",
    imageLeft: true,
    image1: drip2,
    image2: sprinkel,
  },
  {
    title: "Pembangkit Listrik Tenaga Surya (PLTS)",
    description:
      "Program PLTS PPK Ormawa menyediakan sumber energi terbarukan untuk mendukung operasional sistem irigasi dan perangkat IoT. Dengan memanfaatkan sinar matahari sebagai sumber energi utama, program ini membantu mengurangi ketergantungan pada listrik konvensional, menekan biaya operasional, serta mendukung praktik pertanian berkelanjutan yang ramah lingkungan.",
    imageLeft: false,
    image1: sprinkel,
    image2: drip2,
  },
];

const Program = () => {
  return (
    <>
      <section className="bg-white py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#547047] tracking-wide">
            Program PPK Ormawa Himatikro
          </h2>
          <p className="text-gray-700 mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed tracking-wide">
            Inovasi Teknologi Pertanian untuk Cabai Unggul dan Produk Chilli Oil
            Berkualitas.
          </p>
        </div>

        {/* Daftar Program */}
        <div className="max-w-5xl mx-auto flex flex-col gap-20 px-6 md:px-0">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col items-center gap-8">
              {/* Judul Program */}
              <h3 className="text-2xl md:text-3xl font-semibold text-[#547047] border-b-2 border-[#547047] pb-2 text-center">
                {program.title}
              </h3>

              {/* Card */}
              <div
                className={`flex flex-col md:flex-row items-center justify-between bg-[#E0F6CF] border border-[#547047]/40 rounded-2xl p-6 md:p-10 shadow-lg gap-10 transition-all duration-300 ${
                  program.imageLeft ? "" : "md:flex-row-reverse"
                } w-full`}
              >
                {/* Gambar Zigzag */}
                <div className="md:w-1/3 flex items-center justify-center gap-6 relative">
                  <img
                    src={program.image1}
                    alt={`${program.title} 1`}
                    className="w-36 md:w-44 h-48 md:h-56 object-cover border border-[#547047]/60 rounded-xl -translate-y-3 bg-white shadow-md hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={program.image2}
                    alt={`${program.title} 2`}
                    className="w-36 md:w-44 h-48 md:h-56 object-cover border border-[#547047]/60 rounded-xl translate-y-3 bg-white shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Deskripsi */}
                <div className="md:w-2/3 flex items-center">
                  <p className="text-gray-700 leading-relaxed tracking-wide text-justify text-sm md:text-base">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dokumentasi Scroll Tanpa Scrollbar */}
        <div className="text-center mt-24">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#547047] mb-10 border-b-2 border-[#547047] inline-block pb-1">
            Dokumentasi Kegiatan
          </h3>

          {/* Container Scroll */}
          <div className="overflow-x-auto scroll-smooth px-8 md:px-12 py-6 scrollbar-hide">
            <div className="flex gap-8 w-max">
              {[dokumentasi, dokumentasi1, dokumentasi2, dokumentasi3, dokumentasi4, dokumentasi5].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Dokumentasi ${idx + 1}`}
                  className="w-64 md:w-72 h-44 md:h-48 object-cover rounded-xl border border-[#547047]/50 shadow-md hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Program;
