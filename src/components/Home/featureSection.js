import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/Head.jpg"
import Image1 from "../../images/All-guru.jpg"
import Image2 from "../../images/ATS.jpg"
import Image3 from "../../images/Kerja-bakti.jpg"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
        {/* Gambar */}
        <div className="w-full lg:w-1/2">
          <img
            className="rounded-xl w-full object-cover aspect-[4/3] sm:aspect-video shadow-md"
            src={HeroImage}
            alt="HeroImage"
          />
        </div>

        {/* Teks */}
        <div className="w-full lg:w-1/2 text-center lg:text-right flex flex-col justify-center">
         <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-center lg:text-right bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
            Membangun Generasi Cerdas dan Berkarakter
         </h2>
          <p className="mt-4 text-gray-800 text-justify sm:text-lg leading-relaxed px-2 sm:px-0">
            SMP Daan Mogot berkomitmen menciptakan lingkungan belajar yang
            inspiratif dan berprestasi. Melalui pembelajaran inovatif dan
            kegiatan berkarakter, kami menyiapkan peserta didik agar siap
            menghadapi masa depan dengan ilmu pengetahuan, keterampilan, dan
            akhlak mulia.
          </p>

          <div className="mt-6 flex justify-center lg:justify-end">
            <a
              href="/gallery"
              className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium rounded-md 
                bg-gradient-to-r from-white via-gray-300 to-gray-100
                text-gray-800 hover:text-black border border-gray-800 
                transition-transform duration-300 hover:scale-105 shadow-md"
            >
              Lihat Galeri
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Visi Misi */}
      <Fade bottom cascade>
        <div className="mt-10 flex flex-col lg:flex-row gap-6">
          <div className="bg-gradient-to-r from-gray-200 to-gray-400 p-6 rounded-xl flex-1 shadow-md">
            <h2 className="text-black font-semibold text-3xl sm:text-4xl">Visi</h2>
            <p className="mt-4 text-black text-lg leading-relaxed">
              “Terwujudnya peserta didik yang beriman, berakhlak mulia,
              berprestasi, disiplin, dan peduli terhadap lingkungan.”
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-200 to-gray-400 p-6 rounded-xl flex-1 shadow-md">
            <h2 className="text-black font-semibold text-3xl sm:text-4xl">Misi</h2>
            <ol className="mt-4 list-decimal list-inside space-y-2 text-black text-base sm:text-lg leading-relaxed">
              <li>
                Menanamkan keimanan dan ketakwaan kepada Tuhan Yang Maha Esa
                melalui pembiasaan dan keteladanan.
              </li>
              <li>
                Mendorong peserta didik untuk berprestasi dalam bidang akademik
                maupun non-akademik.
              </li>
              <li>
                Membentuk karakter disiplin, tanggung jawab, dan jujur.
              </li>
              <li>
                Menciptakan lingkungan sekolah yang bersih, sehat, dan nyaman.
              </li>
              <li>
                Mengembangkan keterampilan abad 21 melalui pembelajaran aktif,
                kreatif, dan inovatif berbasis teknologi.
              </li>
            </ol>
          </div>
        </div>
      </Fade>

      {/* Galeri */}
      <Fade bottom cascade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {[Image1, Image2, Image3].map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md">
              <img
                alt={`Galeri ${i + 1}`}
                src={img}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </Fade>

      {/* Kegiatan */}
      <Fade bottom cascade>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-gray-200 to-gray-400 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-black text-xl sm:text-2xl font-semibold">
              Kegiatan Upacara Bendera 17 Agustus 2025
            </h3>
          </div>
          <div className="bg-gradient-to-r from-gray-200 to-gray-400 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-black text-xl sm:text-2xl font-semibold">
              Kegiatan Ujian Tes Kemampuan Akademik
            </h3>
          </div>
          <div className="bg-gradient-to-r from-gray-200 to-gray-400 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-black text-xl sm:text-2xl font-semibold">
              Kegiatan Kerja Bakti di Lingkungan Sekolah
            </h3>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default FeatureSection
