import React from "react"
import Fade from "react-reveal/Fade"
import hero from "../../images/logo-ypdm.png"

const Header = () => {
  return (
    <Fade duration={2200}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:my-20">
          {/* Bagian Teks */}
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold opacity-70 leading-snug">
              SELAMAT DATANG DI WEBSITE KAMI
            </h1>

            {/* Judul Utama dengan animasi ketik */}
            <h2 className="relative text-4xl sm:text-5xl md:text-6xl font-bold mt-3 leading-tight">
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
            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <a
                href="/about"
                className="flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 text-base font-medium rounded-md 
                bg-gradient-to-r from-[#ffffff] via-[#9ca3af] to-[#f9fafb] 
                text-gray-800 hover:text-blue-600 border border-gray-800 
                transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Klik Disini
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
          </div>

          {/* Gambar Logo */}
          <div className="flex justify-center w-full lg:w-1/2">
            <img
              className="rounded-xl w-40 sm:w-52 md:w-64 lg:w-[60%] object-contain drop-shadow-lg"
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
