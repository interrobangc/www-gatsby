import React from "react"
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
