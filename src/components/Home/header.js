import React from "react"
import Fade from "react-reveal/Fade"
import hero from "../../images/logo-ypdm.png"

const Header = () => {
  return (
    <Fade duration={2200}>
      <div className="max-w-7xl mx-auto lg:px-6 md:px-3">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-0 xl:mt-28 flex gap-10 lg:flex-justify lg:flex lg:flex-row flex-col-reverse">
          {/* Bagian Teks */}
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-black text-4xl font-semibold opacity-70">
              SELAMAT DATANG DI WEBSITE KAMI
            </h1>

            {/* Judul Utama dengan animasi ketik */}
            <h2 className="relative text-6xl font-bold mt-3">
            {/* Bayangan lembut */}
            {/* <span className="absolute inset-0 text-gray-300 opacity-60 select-none">
              SMP DAAN MOGOT
            </span> */}

            {/* Teks utama dengan animasi ketik */}
            <span
            className="relative inline-block animate-typing-home"
            style={{
              background: "linear-gradient(to right, #ffffff, #9ca3af, #f9fafb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              fontWeight: "bold",
            }}
          >
            SMP DAAN MOGOT
          </span>
          </h2>

            {/* Tombol Aksi */}
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center 
                  bg-gradient-to-r from-[#ffffff] via-[#9ca3af] to-[#f9fafb] 
                  text-gray-800 hover:text-black border border-gray-800 
                  transition-all duration-500 hover:scale-105 shadow-lg"
                >
                  Hubungi Kami
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
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
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/about"
                  className="transition-all duration-500 ease-in-out w-full flex items-center justify-center px-8 py-3 border border-gray-400 text-base font-medium rounded-md text-white hover:text-white bg-transparent hover:bg-gray-500 md:py-3 md:text-lg md:px-10"
                >
                  Klik Disini
                </a>
              </div>
            </div>
          </div>

          {/* Gambar Logo */}
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 flex justify-center">
            <img
              className="rounded-xl w-[70%] md:w-[70%] lg:w-[50%] object-contain"
              src={hero}
              alt="Logo SMP Daan Mogot"
            />
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Header
