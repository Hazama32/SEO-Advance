import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="Galeri"
        description="Lihat dokumentasi kegiatan SMP Daan Mogot melalui galeri foto dan video terbaru kami. Setiap momen menggambarkan semangat belajar, kreativitas, dan kebersamaan siswa dalam berbagai kegiatan sekolah, baik akademik maupun ekstrakurikuler. Galeri SMP Daan Mogot menampilkan bukti nyata dedikasi sekolah dalam menciptakan lingkungan belajar yang aktif dan menyenangkan."
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
