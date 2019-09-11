import React from "react"
import SEO from "../components/Seo"
import Layout from "../components/Layout"
import Navbar from "../subpages/Navbar"
import Masthead from "../subpages/Masthead"
import Cto from "../subpages/Cto"
import Services from "../subpages/Services"
import Team from "../subpages/Team"
import Footer from "../subpages/Footer"

function Index() {
  return (
    <Layout>
      <SEO title="Fractional CTO" />
      <Navbar />
      <Masthead />
      <Cto />
      <Services />
      <Team />
      <Footer />
    </Layout>
  )
}

export default Index
