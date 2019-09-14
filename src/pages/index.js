import React from "react"
import SEO from "../components/Seo"
import Layout from "../components/Layout"
import Navbar from "../subpages/Navbar"
import Masthead from "../subpages/Masthead"
import IconSections from "../subpages/IconSections"
import Team from "../subpages/Team"
import Footer from "../subpages/Footer"

function Index() {
  return (
    <Layout>
      <SEO title="Fractional CTO" />
      <Navbar />
      <Masthead />
      <IconSections />
      <Team />
      <Footer />
    </Layout>
  )
}

export default Index
