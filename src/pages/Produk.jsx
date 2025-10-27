import React from "react";
import Footer from "../components/Footer";

import chiliOil from "../assets/chilioil.png";
import cabaiBubuk from "../assets/cabaibubuk.png";
import cabaiKering from "../assets/cabaikering.png";

const products = [
  {
    name: "Chili Oil",
    description:
      "Pedas alami dari cabai segar, sempurna untuk masakan dan saus favorit Anda.",
    price: "Rp 25.000,-",
    image: chiliOil,
    link: "https://wa.me/628xxxxxxxxxx?text=Halo,%20saya%20ingin%20pesan%20Chili%20Oil",
  },
  {
    name: "Cabai Bubuk",
    description:
      "Cocok digunakan sebagai bumbu masakan, sambal instan, atau pelengkap aneka kuliner.",
    price: "Rp 25.000,-",
    image: cabaiBubuk,
    link: "https://wa.me/628xxxxxxxxxx?text=Halo,%20saya%20ingin%20pesan%20Cabai%20Bubuk",
  },
  {
    name: "Cabai Kering",
    description:
      "Praktis digunakan sebagai bahan masakan, sambal, atau olahan kuliner lainnya.",
    price: "Rp 25.000,-",
    image: cabaiKering,
    link: "https://wa.me/628xxxxxxxxxx?text=Halo,%20saya%20ingin%20pesan%20Cabai%20Kering",
  },
];

const Produk = () => {
  return (
    <>
      {/* Bagian Produk */}
      <section className="bg-white py-28">
        {/* Judul */}
        <h2 className="text-center text-xl md:text-2xl font-semibold text-[#547047] mb-10">
          Hasil Produk Olahan Kami
        </h2>

        {/* Card Container */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6 px-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white border border-[#547047] rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              {/* Gambar Produk */}
              <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-cover rounded-lg"
                />
              </div>

              {/* Deskripsi Produk */}
              <div className="md:w-2/3 text-center md:text-left space-y-2">
                <h3 className="text-lg font-semibold text-[#B22E2E]">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {product.description}
                </p>
                <p className="font-semibold text-[#000000] text-base">
                  {product.price}
                </p>

                {/* Tombol Pesan */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#547047] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#45613B] transition"
                >
                  {/* Ikon WhatsApp Manual (SVG) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path d="M16.001 3C9.382 3 4 8.382 4 15c0 2.497.776 4.828 2.112 6.775L5 29l7.454-1.946A11.887 11.887 0 0016 27c6.619 0 12.001-5.382 12.001-12S22.62 3 16.001 3zm0 21.916a9.9 9.9 0 01-4.963-1.349l-.355-.211-4.428 1.155 1.182-4.317-.23-.362A9.87 9.87 0 016.1 15c0-5.446 4.437-9.884 9.9-9.884 5.463 0 9.9 4.438 9.9 9.884 0 5.446-4.437 9.916-9.9 9.916zm5.46-7.433c-.298-.149-1.764-.868-2.038-.967-.274-.099-.474-.149-.674.15-.198.298-.772.967-.947 1.165-.175.199-.349.224-.648.075-.298-.149-1.259-.465-2.4-1.483-.887-.789-1.485-1.763-1.66-2.061-.174-.298-.019-.459.131-.608.134-.133.298-.349.448-.523.15-.174.198-.298.298-.497.099-.199.05-.373-.025-.523-.075-.149-.674-1.62-.924-2.224-.243-.583-.492-.503-.674-.512l-.574-.01c-.199 0-.523.075-.797.373-.274.298-1.05 1.025-1.05 2.5s1.076 2.898 1.224 3.098c.149.199 2.117 3.228 5.128 4.526.717.31 1.276.496 1.713.635.719.229 1.374.197 1.89.12.576-.086 1.764-.721 2.014-1.418.25-.697.25-1.295.174-1.418-.074-.124-.273-.198-.571-.347z" />
                  </svg>
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Produk;
