import React from "react"
import Fade from "react-reveal/Fade"
import BackGroud from "../images/ATS.jpg"
import Galeri2 from "../images/Head.jpg"
import Galeri3 from "../images/Futsal.jpeg"
import Galeri4 from "../images/Kegiatan Adiwiyata.jpeg"
import Galeri5 from "../images/Pramuka.jpeg"
import Galeri6 from "../images/Silat.jpg"

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
      <Fade Duration={2200}>
      <div className="mb-8">
        <div className="transition duration-1000 ease-out opacity-100">
          <div className="w-full bg-gradient-to-r from-gray-200 to-gray-400 p-6 sm:p-8 rounded-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4">
              <span className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-clip-text text-transparent">
                GALERI SMP DAAN MOGOT
              </span>
            </h2>
            <p className="text-base sm:text-lg mt-4 text-gray-800 text-center opacity-90">
              Halaman ini menampilkan berbagai dokumentasi kegiatan sekolah yang menggambarkan semangat belajar, kreativitas, serta kebersamaan seluruh warga sekolah.
              Melalui galeri ini, kami ingin berbagi momen-momen berharga dari setiap kegiatan akademik maupun nonakademik yang menjadi bagian dari perjalanan dan prestasi SMP Daan Mogot.
            </p>
          </div>
        </div>
      </div>
      </Fade>
    
      <div className="mt-8">
        <Fade bottom cascade>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              src={BackGroud}
              loading="lazy"
              alt="Kegiatan Sekolah 1"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
              Kegiatan ATS
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 sm:col-span-1 md:col-span-2"
          >
            <img
              src={Galeri2}
              loading="lazy"
              alt="Kepala Sekolah dan Guru"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
              Kegiatan 17 Agustus di lingkungan Sekolah
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 sm:col-span-1 md:col-span-2"
          >
            <img
              src={Galeri3}
              loading="lazy"
              alt="Futsal"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
              Futsal
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              src={Galeri4}
              loading="lazy"
              alt="Kegiatan Adiwiyata"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
             Kegiatan Adiwiyata
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              src={Galeri5}
              loading="lazy"
              alt="Kegiatan Pramuka"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
              Pramuka
            </span>
          </a>
          <a
            href="#"
            className="group relative flex h-60 sm:h-72 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 sm:col-span-1 md:col-span-2"
          >
            <img
              src={Galeri6}
              loading="lazy"
              alt="Ekstrakurikuler Silat"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-medium">
              Silat
            </span>
          </a>
        </div>
        </Fade>
      </div>
    </div>
  )
}

export default Gallery