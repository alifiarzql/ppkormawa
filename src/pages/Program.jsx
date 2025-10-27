import React from "react";
import Footer from "../components/Footer";
import drip2 from "../assets/drip2.png";
import sprinkel from "../assets/sprinkel2.png";

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
  {
    title: "Drip Irrigation",
    description:
      "Program Drip Irrigation PPK Ormawa merupakan inisiatif mahasiswa yang menerapkan teknologi irigasi tetes untuk meningkatkan efisiensi penggunaan air dalam budidaya cabai. Dengan menyalurkan air langsung ke akar tanaman secara terukur, sistem ini membantu mengurangi pemborosan air, menjaga kelembapan tanah, serta meningkatkan hasil panen.",
    imageLeft: true,
    image1: drip2,
    image2: sprinkel,
  },
];

const Program = () => {
  return (
    <>
      <section className="bg-white py-30">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#547047]">
            Program PPK Ormawa Himatikro
          </h2>
          <p className="text-gray-700 mt-2">
            Inovasi Teknologi Pertanian untuk Cabai Unggul dan Produk Chilli Oil
            Berkualitas.
          </p>
        </div>

        {/* Daftar Program */}
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              {/* Judul Program */}
              <h3 className="text-lg md:text-xl font-semibold text-[#547047] border-b-2 border-[#547047] pb-2 text-center">
                {program.title}
              </h3>

              {/* Card */}
              <div
                className={`flex flex-col md:flex-row items-stretch justify-between bg-[#EAF4E0] border border-[#547047] rounded-2xl p-10 md:p-12 shadow-sm ${
                  program.imageLeft ? "" : "md:flex-row-reverse"
                } w-full`}
              >
                {/* Gambar Zigzag */}
                <div className="md:w-1/3 flex items-center justify-center gap-4 relative">
                  <img
                    src={program.image1}
                    alt={`${program.title} 1`}
                    className="w-24 h-32 object-cover border border-[#547047] rounded-lg -translate-y-3 bg-white"
                  />
                  <img
                    src={program.image2}
                    alt={`${program.title} 2`}
                    className="w-24 h-32 object-cover border border-[#547047] rounded-lg translate-y-3 bg-white"
                  />
                </div>

                {/* Deskripsi */}
                <div className="md:w-2/3 flex items-center mt-6 md:mt-0">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dokumentasi Scroll Tanpa Scrollbar */}
        <div className="text-center mt-20">
          <h3 className="text-xl font-semibold text-[#547047] mb-6 border-b-2 border-[#547047] inline-block pb-1">
            Dokumentasi Kegiatan
          </h3>

          {/* Container Scroll */}
          <div className="overflow-x-auto scroll-smooth px-10 py-4 scrollbar-hide">
            <div className="flex gap-6 w-max">
              <img
                src={drip2}
                alt="Dokumentasi 1"
                className="w-64 h-40 object-cover rounded-xl border border-[#547047]"
              />
              <img
                src={sprinkel}
                alt="Dokumentasi 2"
                className="w-64 h-40 object-cover rounded-xl border border-[#547047]"
              />
              <img
                src={drip2}
                alt="Dokumentasi 3"
                className="w-64 h-40 object-cover rounded-xl border border-[#547047]"
              />
              <img
                src={sprinkel}
                alt="Dokumentasi 4"
                className="w-64 h-40 object-cover rounded-xl border border-[#547047]"
              />
              <img
                src={drip2}
                alt="Dokumentasi 5"
                className="w-64 h-40 object-cover rounded-xl border border-[#547047]"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Program;
