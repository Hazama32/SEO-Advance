import React from "react"
import AboutPage from "../components/about/aboutPage"

import AboutGrid from "../components/about/aboutGrid"
import Seo from "../components/seo"

import Layout from "../components/layout"
import AboutExtra from "../components/about/aboutExtra"
import AboutHeader from "../components/about/aboutHeader"

const About = () => {
  return (
    <Layout>
      <Seo
        title="Tentang Kami"
        description="SMP Daan Mogot adalah sekolah menengah pertama yang berkomitmen memberikan pendidikan berkualitas di lingkungan yang nyaman dan inspiratif. Dengan tenaga pendidik profesional dan fasilitas lengkap, kami membentuk siswa yang cerdas, berkarakter, dan berprestasi. SMP Daan Mogot terus berkembang sebagai lembaga pendidikan unggulan yang siap mencetak generasi penerus bangsa yang disiplin, kreatif, dan berakhlak mulia."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
      <AboutGrid></AboutGrid>
      <AboutExtra></AboutExtra>
    </Layout>
  )
}

export default About
