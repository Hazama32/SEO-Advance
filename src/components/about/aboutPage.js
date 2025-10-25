import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row mb-5 max-h-80">
          <div className="w-2/4 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-5xl mt-5 font-bold text-white">
              test<br></br>
            </h1>
            <p className="mt-5 text-white opacity-70">
              test
            </p>
          </div>
          <div className="overflow-hidden rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6 object-cover object-center h-full w-full">
            <img src={Image3} alt="image"></img>
          </div>
        </div>
      </Fade> */}

      <Fade bottom cascade>
        <div className="mt-10  flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          {/* <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Performance</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">95+</h4>
          </div> */}

          {/* <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Accessibility</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div> */}
          {/* <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Best Practices</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div> */}
          {/* <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">SEO</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div> */}
        </div>
      </Fade>

      <div className="mt-10 px-8">
        {/* <h2 className="text-black text-4xl font-semibold">PERFORMANCE</h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Time to lock new speeds
        </h3> */}

        <p className="text-white opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          SMP Daan Mogot merupakan salah satu lembaga pendidikan yang berkomitmen untuk mencetak generasi muda yang beriman, berakhlak mulia, berprestasi, dan siap menghadapi tantangan masa depan. Melalui proses pembelajaran yang aktif, kreatif, dan berbasis teknologi, sekolah ini terus berupaya menciptakan lingkungan belajar yang nyaman, aman, dan menyenangkan bagi seluruh peserta didik.
          Dengan dukungan tenaga pendidik yang profesional serta fasilitas yang terus berkembang, SMP Daan Mogot bertekad untuk menjadi sekolah yang tidak hanya unggul dalam bidang akademik, tetapi juga dalam pembentukan karakter dan nilai-nilai kedisiplinan. Kami percaya bahwa pendidikan yang baik adalah pondasi utama dalam membangun generasi penerus bangsa yang cerdas dan berintegritas.
        </p>
        <p className="text-white opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Sebagai sekolah yang mengedepankan nilai-nilai religius, moral, dan kedisiplinan, SMP Daan Mogot menanamkan prinsip keimanan serta ketakwaan kepada Tuhan Yang Maha Esa dalam setiap kegiatan pembelajaran maupun kegiatan ekstrakurikuler. Selain itu, sekolah juga mendorong peserta didik untuk berprestasi tidak hanya di bidang akademik, tetapi juga dalam bidang non-akademik seperti seni, olahraga, dan kegiatan sosial.
        </p>
        <p className="text-white opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lingkungan sekolah yang bersih, sehat, dan nyaman menjadi salah satu prioritas utama dalam menciptakan suasana belajar yang kondusif. SMP Daan Mogot percaya bahwa tempat belajar yang aman dan menyenangkan akan membantu siswa berkembang secara optimal dan baik dalam kemampuan berpikir kritis, kreativitas, maupun kerja sama tim.
          Didukung oleh tenaga pendidik yang profesional, berdedikasi tinggi, serta memiliki pengalaman dalam dunia pendidikan, SMP Daan Mogot senantiasa berupaya memberikan pelayanan terbaik dalam setiap aspek kegiatan belajar mengajar. Para guru tidak hanya menjadi pengajar, tetapi juga pembimbing dan teladan bagi peserta didik, sehingga tercipta hubungan yang harmonis antara guru dan siswa.
        </p>
      </div>
    </div>
  )
}

export default WorkPage
