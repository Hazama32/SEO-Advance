import { Link } from "gatsby";
import React from "react";
import logo from "../images/logo-ypdm.png";

const Footer = () => {
  return (
    <footer className="site-footer bg-gradient-to-r from-gray-200 to-gray-400 mt-20 rounded-2xl shadow-inner text-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Logo & Deskripsi */}
        <div>
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <img src={logo} alt="Logo SMP Daan Mogot" className="h-16 w-16 object-contain" />
            <h2 className="text-xl font-bold text-gray-900">SMP Daan Mogot</h2>
          </div>
          <p className="text-gray-700 text-sm mt-3">
            Membangun Generasi Cerdas dan Berkarakter
          </p>
        </div>

        {/* Navigasi */}
        <div className="footer-nav">
          <h3 className="footer-title font-semibold text-gray-900 mb-3">Navigasi</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-700 hover:underline transition-colors duration-300 footer-link"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-800 hover:text-blue-700 hover:underline transition-colors duration-300 footer-link"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-gray-800 hover:text-blue-700 hover:underline transition-colors duration-300 footer-link"
              >
                Galeri
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-800 hover:text-blue-700 hover:underline transition-colors duration-300 footer-link"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-blue-700 hover:underline transition-colors duration-300 footer-link"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
        {/* Kontak */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Informasi Sekolah</h3>
          <h4>Alamat Sekolah:</h4>
          <a className="text-gray-700 text-sm hover:underline footer-link" href="https://maps.app.goo.gl/UHC648AG4njcLnJ1A">
            Jl. Gatot Subroto Km. 5<br />
            Kel. Jatiuwung, Kec. Cibodas<br />
            Kota Tangerang
          </a>
          <h4 className="mt-3">Email:</h4>  
          <a
            href="mailto:smpdaanmogot16@gmail.com"
            className="footer-email text-gray-700 text-sm mt-2 block"
          >
            smpdaanmogot16@gmail.com
          </a>
        </div>
        {/* Ikuti Kami (Sosial Media) */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-gray-900 mb-3">Ikuti Kami</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/smpdagota_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              <img src="/img/instagram.png" alt="Instagram" className="w-10 h-10" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              <img src="/img/facebook.png" alt="Facebook" className="w-10 h-10" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              <img src="/img/youtube.png" alt="YouTube" className="w-10 h-10" />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              <img src="/img/tiktok.png" alt="TikTok" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Garis pemisah dan copyright */}
      <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-700">
        © {new Date().getFullYear()} SMP Daan Mogot. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
