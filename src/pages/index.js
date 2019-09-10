import React from "react"
import "../assets/scss/global.scss"
import Navbar from "../subpages/Navbar"
import Masthead from "../subpages/Masthead"
import Cto from "../subpages/Cto"
import Services from "../subpages/Services"
import Team from "../subpages/Team"
import Footer from "../subpages/Footer"

import { library } from "@fortawesome/fontawesome-svg-core"

import {
  faChartLine,
  faCode,
  faCogs,
  faEnvelope,
  faHandshake,
  faServer,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons"

import {
  faDocker,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

library.add(
  faChartLine,
  faCode,
  faCogs,
  faDocker,
  faEnvelope,
  faFacebook,
  faGithub,
  faLinkedin,
  faHandshake,
  faServer,
  faStethoscope
)

function Index() {
  return (
    <div id="page-top">
      <Navbar />
      <Masthead />
      <Cto />
      <Services />
      <Team />
      <Footer />
    </div>
  )
}

export default Index
