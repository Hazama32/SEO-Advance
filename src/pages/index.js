import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title="SMP Daan Mogot"
        description="SMP Daan Mogot berkomitmen mencetak generasi yang beriman, berakhlak mulia, disiplin, dan berprestasi. Melalui pembelajaran aktif, kreatif, dan berbasis teknologi, kami menyiapkan peserta didik menghadapi masa depan dengan pengetahuan dan karakter yang kuat."
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <FeaturedBlog></FeaturedBlog>
      <Testimonial></Testimonial>
    </Layout>
  </div>
)

export default IndexPage
