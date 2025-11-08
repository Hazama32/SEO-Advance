import React, { useState } from "react"
// Menghapus: import { Link } from "gatsby" (diganti dengan <a>)

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleLinkClick = () => {
    // Menutup menu mobile saat tautan diklik
    setOpenMenu(false)
  }

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-3 py-5 rounded-md">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            {/* Logo SMP DAAN MOGOT */}
            <a
              className="text-black flex-shrink-0 font-montserrat font-semibold"
              href="/"
            >
              <span className="text-gradient bg-gradient-to-r from-white to-gray-400 font-bold">
                SMP DAAN MOGOT
              </span>
            </a>
            {/* Menu Desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a // Diganti dari Link ke <a>
                  className="relative after:rounded after:bg-gray-400 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  href="/" // Menggunakan 'href' untuk <a>
                >
                  Home
                </a>
                <a // Diganti dari Link ke <a>
                  className="relative after:rounded after:bg-gray-400 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  href="/about" // Menggunakan 'href' untuk <a>
                >
                  Tentang Kami
                </a>

                <a // Diganti dari Link ke <a>
                  className="relative after:rounded after:bg-gray-400 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  href="/gallery" // Menggunakan 'href' untuk <a>
                >
                  Galeri
                </a>
                <a // Diganti dari Link ke <a>
                  className="relative after:rounded after:bg-gray-400 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  href="/blog" // Menggunakan 'href' untuk <a>
                >
                  Blog
                </a>
                <a // Diganti dari Link ke <a>
                  className="relative after:rounded after:bg-gray-400 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-montserrat"
                  href="/contact" // Menggunakan 'href' untuk <a>
                >
                  Kontak
                </a>
                {/* Tombol Call Us Now dikomentari (sesuai kode bawaan Anda) */}
              </div>
            </div>
          </div>

          {/* Tombol Hamburger/Ikon X untuk Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              id="al"
              aria-label="Menu"
              onClick={() => setOpenMenu(!openMenu)}
              className="text-gray-800 dark:text-white hover:text-black-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {/* SVG Icon 3 Garis */}
              <svg
                width="25"
                height="25"
                fill="black"
                className="h-5 w-5"
                viewBox="0 0 1792 1792"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu Mobile (Sekarang dengan Latar Belakang Gelap sesuai screenshot) */}
      {openMenu && (
        <div className="transition duration-1000 ease-in-out md:hidden">
          {/* Mengubah tampilan menjadi gelap seperti di screenshot */}
          <div className="absolute top-16 left-0 w-full bg-[#1e2a47] shadow-xl p-4 flex flex-col space-y-2 z-30"> 
            <a // Menggunakan <a> untuk navigasi
              className="text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-lg font-medium font-montserrat"
              href="/"
              onClick={handleLinkClick}
            >
              Home
            </a>
            <a // Menggunakan <a> untuk navigasi
              className="text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-lg font-medium font-montserrat"
              href="/about"
              onClick={handleLinkClick}
            >
              Tentang Kami
            </a>

            <a // Menggunakan <a> untuk navigasi
              className="text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-lg font-medium font-montserrat"
              href="/gallery"
              onClick={handleLinkClick}
            >
              Galeri
            </a>
            <a // Menggunakan <a> untuk navigasi
              className="text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-lg font-medium font-montserrat"
              href="/blog"
              onClick={handleLinkClick}
            >
              Blog
            </a>
            <a // Menggunakan <a> untuk navigasi
              className="text-white opacity-70 hover:opacity-100 px-3 py-2 rounded-md text-lg font-medium font-montserrat"
              href="/contact"
              onClick={handleLinkClick}
            >
              Kontak
            </a>
            {/* Tombol Call Us Now
            <div className="items-center py-3">
              <a
                href="tel:#"
                onClick={handleLinkClick}
                // Menyesuaikan warna tombol agar terlihat di latar belakang gelap
                className="transition-all duration-300 ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-yellow-400 text-[#1e2a47] hover:text-yellow-400 border border-yellow-400 hover:bg-transparent md:text-lg md:px-10 font-montserrat mt-2"
              >
                Call Us Now
              </a>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar