import React from "react";

const programs = [
  {
    title: "Drip Irrigation",
    description:
      "Program Drip Irrigation PPK Ormawa merupakan inisiatif mahasiswa yang menerapkan teknologi irigasi tetes untuk meningkatkan efisiensi penggunaan air dalam budidaya cabai. Dengan menyalurkan air langsung ke akar tanaman secara terukur, sistem ini membantu mengurangi pemborosan air, menjaga kelembapan tanah, serta meningkatkan hasil panen. Selain itu, program ini berperan sebagai sarana edukasi bagi masyarakat dalam menerapkan pertanian cerdas berbasis teknologi guna mendukung kemandirian dan keberlanjutan pertanian desa.",
    imageLeft: true,
  },
  {
    title: "Sprinkel",
    description:
      "Program Drip Irrigation PPK Ormawa merupakan inisiatif mahasiswa yang menerapkan teknologi irigasi otomatis untuk meningkatkan efisiensi penggunaan air dalam budidaya cabai. Dengan menyalurkan air menggunakan sistem tekanan tinggi, teknologi ini membantu menjaga kelembapan tanah dan meningkatkan hasil panen. Selain itu, program ini berperan sebagai sarana edukasi bagi masyarakat dalam menerapkan pertanian cerdas berbasis teknologi guna mendukung kemandirian dan keberlanjutan pertanian desa.",
    imageLeft: false,
  },
  {
    title: "IoT (Internet of Things)",
    description:
      "Program IoT PPK Ormawa merupakan inisiatif mahasiswa yang menerapkan teknologi berbasis sensor untuk meningkatkan efisiensi penggunaan air dalam budidaya cabai. Dengan memantau kelembapan tanah dan faktor lingkungan secara real-time, sistem ini membantu mengoptimalkan penyiraman dan meningkatkan hasil panen. Selain itu, program ini berperan sebagai sarana edukatif bagi masyarakat dalam menerapkan pertanian cerdas berbasis teknologi guna mendukung kemandirian dan keberlanjutan pertanian desa.",
    imageLeft: true,
  },
  {
    title: "Pompa Otomatis",
    description:
      "Program Pompa Otomatis PPK Ormawa merupakan inisiatif mahasiswa yang menerapkan teknologi pompa cerdas untuk meningkatkan efisiensi penggunaan air dalam budidaya cabai. Dengan menyalurkan air sesuai kebutuhan tanaman, sistem ini membantu menghemat energi dan meningkatkan produktivitas pertanian. Selain itu, program ini berperan sebagai sarana edukatif bagi masyarakat dalam menerapkan pertanian cerdas berbasis teknologi guna mendukung kemandirian dan keberlanjutan pertanian desa.",
    imageLeft: false,
  },
  {
    title: "PLTS (Pembangkit Listrik Tenaga Surya)",
    description:
      "Program PLTS PPK Ormawa merupakan inisiatif mahasiswa yang menerapkan teknologi tenaga surya untuk meningkatkan efisiensi energi dalam budidaya cabai. Dengan menggunakan energi matahari sebagai sumber daya utama, sistem ini membantu menekan biaya operasional dan mendukung pertanian berkelanjutan. Selain itu, program ini berperan sebagai sarana edukatif bagi masyarakat dalam menerapkan pertanian cerdas berbasis teknologi guna mendukung kemandirian dan keberlanjutan pertanian desa.",
    imageLeft: true,
  },
];

const Program = () => {
  return (
    <section className="bg-white py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#547047]">
          Program PPK Ormawa Himatikro
        </h2>
        <p className="text-gray-700 mt-2">
          Inovasi Teknologi Pertanian untuk Cabai Unggul dan Produk Chilli Oil Berkualitas.
        </p>
      </div>

      {/* Daftar Program */}
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {programs.map((program, index) => (
          <div key={index} className="space-y-2">
            {/* Judul Program */}
            <h3 className="text-center text-lg md:text-xl font-semibold text-[#547047] border-b-2 border-[#547047] inline-block mx-auto pb-1">
              {program.title}
            </h3>

            {/* Card */}
            <div
              className={`flex flex-col md:flex-row items-center justify-between bg-[#EAF4E0] border border-[#547047] rounded-2xl p-6 md:p-8 shadow-sm ${
                program.imageLeft ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Placeholder Gambar */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-20 h-24 bg-white border border-[#547047] rounded-lg"></div>
                <div className="w-20 h-24 bg-white border border-[#547047] rounded-lg"></div>
              </div>

              {/* Deskripsi */}
              <div className="md:w-3/4 mt-6 md:mt-0 text-justify">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {program.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dokumentasi */}
      <div className="text-center mt-20">
        <h3 className="text-xl font-semibold text-[#547047] mb-6 border-b-2 border-[#547047] inline-block pb-1">
          Dokumentasi Kegiatan
        </h3>
        <div className="flex justify-center gap-6 flex-wrap mt-6">
          <div className="w-32 h-24 bg-gray-300 rounded-xl"></div>
          <div className="w-32 h-24 bg-gray-300 rounded-xl"></div>
          <div className="w-32 h-24 bg-gray-300 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Program;
