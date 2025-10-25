import React from "react"
import Fade from "react-reveal/Fade"

const FeaturedBlog = () => {
  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8  ">
          <h2 className="text-black text-4xl opacity-70 font-semibold pl-4">
            STAY UP TO DATE
          </h2>
          <h3 className="text-black pl-4 text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
            Latest Posts
          </h3>
          <div className="blog-hover bg-gradient-to-r from-pink to-purple border mt-10 border-gray-200 rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-black text-3xl font-simibold mb-2">
              Semangat HUT RI ke-80: Siswa SMP Daan Mogot Tunjukkan Kreativitas dan Disiplin
            </h2>
            <p className="text-lg  text-black opacity-60 mb-6">
              Dalam rangka memperingati Hari Kemerdekaan Republik Indonesia yang ke-80, SMP Daan Mogot menggelar berbagai lomba seru seperti balap karung, tarik tambang, dan lomba kebersihan kelas. Kegiatan ini bukan hanya menjadi ajang hiburan, tetapi juga sarana untuk menumbuhkan semangat kebersamaan dan nasionalisme.
            </p>
            <a
              href="/blog/blog-post"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white rounded-lg border border-purple  hover:bg-purple"
            >
              Baca Selengkapnya
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="blog-hover bg-gradient-to-r from-pink to-purple rounded-lg p-8 md:p-12">
              <h2 className="text-black text-3xl font-simibold mb-2">
                Inovasi Belajar Berbasis Teknologi di SMP Daan Mogot
              </h2>
              <p className="text-lg font-normal text-black opacity-60 mb-4">
               SMP Daan Mogot kini menerapkan sistem pembelajaran berbasis teknologi untuk mendukung proses belajar mengajar di era digital. Melalui penggunaan aplikasi interaktif, video pembelajaran, dan sistem penilaian online, guru dapat memberikan pengalaman belajar yang lebih menarik dan efektif.
              </p>
              <a
                href="/blog/blog-post-1"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                Baca Selengkapnya
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
            <div className="blog-hover bg-gradient-to-r from-pink to-purple rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-simibold mb-2">
                Program Sekolah Hijau: Wujud Nyata Peduli Lingkungan
              </h2>
              <p className="text-lg font-normal text-black opacity-60 mb-4">
                Sebagai bentuk kepedulian terhadap lingkungan, SMP Daan Mogot meluncurkan program Sekolah Hijau. Melalui kegiatan seperti menanam pohon, daur ulang sampah, dan lomba kelas terbersih, sekolah mengajak seluruh siswa menjaga kebersihan dan keindahan lingkungan sekolah.
              </p>
              <a
                href="/blog/blog-post-2"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                Baca Selengkapnya
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
    </Fade>
  )
}

export default FeaturedBlog
