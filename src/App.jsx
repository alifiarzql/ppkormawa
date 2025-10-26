import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
// (opsional nanti tambahkan jika sudah ada)
import Program from "./pages/Program";
// import Produk from "./pages/Produk";
// import Hubungi from "./pages/Hubungi";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />
        {/* Rute tambahan, aktifkan kalau file-nya sudah dibuat */}
        <Route path="/program" element={<Program />} />
        {/* <Route path="/produk" element={<Produk />} /> */}
        {/* <Route path="/hubungi" element={<Hubungi />} /> */}
      </Routes>
    </>
  );
}

export default App;
