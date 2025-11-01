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
    <div className="max-w-7xl mx-auto mt-10">
      <Fade duration={2200}>
        <div className="flex flex-row justify-space xs:flex-col-reverse sm:flex-row xxs:flex-col xs:flex-col sm:flex-row mb-5">
          <div className="max-h-80 w-1/3 flex flex-col justify-center bg-gradient-to-r from-gray-200 to-gray-400 p-8 rounded-xl m-4 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h2 className="relative text-5xl font-bold mt-3 text-center">
            <span className="relative bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-clip-text text-transparent animate-typing-gallery">
            GALERI SMP DAAN MOGOT
            </span>
            </h2>
            {/* <h1 className="text-white text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
              Holo Starter Theme
            </h1> */}
            <p className="text-lg mt-4 text-black opacity-70 xxs:text-sm sm:text-lg">
              Halaman ini menampilkan berbagai dokumentasi kegiatan sekolah yang menggambarkan semangat belajar, kreativitas, serta kebersamaan seluruh warga sekolah.
              Melalui galeri ini, kami ingin berbagi momen-momen berharga dari setiap kegiatan akademik maupun nonakademik yang menjadi bagian dari perjalanan dan prestasi SMP Daan Mogot.
            </p>
          </div>
        </div>
      </Fade>

      <div className="max-w-7xl mx-auto px-8 mt-5">
        <Fade bottom cascade>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src={BackGroud}
                loading="lazy"
                alt="HeroImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src={Galeri2}
                loading="lazy"
                alt="HeroImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src={Galeri3}
                loading="lazy"
                alt="HeroImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src={Galeri4}
                loading="lazy"
                alt="HeroImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              </span>
            </a>
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
            >
              <img
                src={Galeri5}
                loading="lazy"
                alt="HeroImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:col-span-2 md:h-80"
            >
              <img
                src={Galeri6}
                loading="lazy"
                alt="HeroImage"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              </span>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Gallery

/* 
    <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        <img src="https://source.unsplash.com/bYuI23mnmDQ"/>
        <img src="https://source.unsplash.com/Nllx4R-2c3o"/>
        <img src="https://source.unsplash.com/lp40q07DIe0"/>
        <img src="https://source.unsplash.com/wfalq01jJuU"/>
        <img src="https://source.unsplash.com/rMHNK_skwwU"/>
        <img src="https://source.unsplash.com/WBMjuGpbrCQ"/>
        <img src="https://source.unsplash.com/nCUZ5BYBL_o"/>
        <img src="https://source.unsplash.com/3u4fzMQZhjc"/>
        <img src="https://source.unsplash.com/haOIqIPSwps"/>
        <img src="https://source.unsplash.com/3UrYD7NNVxk"/>
        <img src="https://source.unsplash.com/fm1JKDItlVM"/>
        <img src="https://source.unsplash.com/qPpq1EVs8vw"/>
        <img src="https://source.unsplash.com/xRyL63AwZFE"/>
        <img src="https://source.unsplash.com/XeNKWTiCPNw"/>
        <img src="https://source.unsplash.com/DFt3T5r_4FE"/>
        <img src="https://source.unsplash.com/Ebwp2-6BG8E"/>
            </div>
             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
*/
