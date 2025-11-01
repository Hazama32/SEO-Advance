import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/Head.jpg"
import Image1 from "../../images/All-guru.jpg"
import Image2 from "../../images/ATS.jpg"
import Image3 from "../../images/Kerja-bakti.jpg"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Performance</h3>
            <h4 className="mt-10 text-black  opacity-70 text-xl">95+</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Accessibility</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Best Practices</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">SEO</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
        </div>
      </Fade> */}

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage}
              alt="HeroImage"
            ></img>
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            {/* <h2 className="text-black text-4xl font-semibold"></h2> */}
           <h2 className="relative text-6xl font-bold">
          <span className="absolute inset-0 text-gray-300">Membangun Generasi Cerdas dan Berkarakter</span>
          <span className="relative bg-gradient-to-r from-white via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
            Membangun Generasi Cerdas dan Berkarakter
          </span>
          </h2>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
             SMP Daan Mogot berkomitmen menciptakan lingkungan belajar yang inspiratif dan berprestasi.
             Melalui pembelajaran inovatif dan kegiatan berkarakter, kami menyiapkan peserta didik agar siap
             menghadapi masa depan dengan ilmu pengetahuan, keterampilan, dan akhlak mulia.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                {/* <a
                  href="tel:#"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Hubungi Kami
                </a> */}
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center 
                  bg-gradient-to-r from-[#ffffff] via-[#9ca3af] to-[#f9fafb] 
                  text-gray-800 hover:text-black border border-gray-800 
                  transition-all duration-500 hover:scale-105 shadow-lg"
                >
                  Lihat Galeri
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-gray-200 to-gray-400 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-4xl">
              Visi
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">“Terwujudnya peserta didik yang beriman, berakhlak mulia, berprestasi, disiplin, dan peduli terhadap lingkungan.”</p>
                {/* <p className="text-black opacity-50 text-sm">SSG and more...</p> */}
              {/* </div>
              <div className="mt-5">
                <p className="text-black text-2xl">React 18+</p>
                <p className="text-black opacity-50 text-sm">Create more...</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Tailwind CSS 3+</p>
                <p className="text-black opacity-50 text-sm">
                  A utility-first CSS
                </p> */}
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-gradient-to-r from-gray-200 to-gray-400 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
          <h2 className="text-black font-semibold text-4xl">Misi</h2>
          <ol className="mt-10 text-black list-decimal list-inside space-y-3">
            <li>
              Menanamkan keimanan dan ketakwaan kepada Tuhan Yang Maha Esa melalui
              pembiasaan dan keteladanan dalam kehidupan sehari-hari.
            </li>
            <li>
              Mendorong dan memfasilitasi peserta didik untuk berprestasi dalam bidang
              akademik maupun non-akademik.
            </li>
            <li>
              Membentuk karakter disiplin, tanggung jawab, dan jujur dalam diri peserta
              didik.
            </li>
            <li>
              Menciptakan lingkungan sekolah yang bersih, sehat, dan nyaman sebagai
              sarana pembelajaran yang efektif.
            </li>
            <li>
              Mengembangkan keterampilan abad 21 melalui pembelajaran aktif, kreatif,
              dan inovatif berbasis teknologi.
            </li>
          </ol>
        </div>
        </div>
      </Fade>

      {/* <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          OPEN SOURCE
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          A React based framework
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          INTEGRATIONS
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Discover and connect
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}

      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img
              alt="Image"
              src={Image1}
              className="w-full max-h-80 object-contain rounded-xl shadow-md"
            />
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
             <img
                alt="Image"
                src={Image2}
                className="w-full max-h-80 object-contain rounded-xl shadow-md"
              />
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img
              alt="Image"
              src={Image3}
              className="w-full max-h-80 object-contain rounded-xl shadow-md"
            />
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-gray-200 to-gray-400 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl font-semibold">Kegiatan Upacara Bendera 17 Agustus 2025</h3>
          </div>

          <div className="w-1/3 bg-gradient-to-r from-gray-200 to-gray-400 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl font-semibold">Kegiatan Ujian Tes Kemampuan Akademik</h3>
          </div>
          <div className="w-1/3 bg-gradient-to-r from-gray-200 to-gray-400 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl text-justify-center font-semibold">Kegiatan Kerja Bakti di Lingkungan Sekolah</h3>
          </div>
        </div>
      </Fade>
      {/* 
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold text-gradient bg-gradient-to-r from-pink to-purple">
          {" "}
          Integrations
        </h2>
        <h3 className="text-black mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
          Discover, connect, and configure
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-purple border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FeatureSection
