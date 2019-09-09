import React from "react"
import "../assets/scss/global.scss"
import Masthead from "../subpages/Masthead"
import Cto from "../subpages/Cto"
import Services from "../subpages/Services"
import Team from "../subpages/Team"
import Footer from "../components/Footer"

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

import { faDocker } from "@fortawesome/free-brands-svg-icons"

library.add(
  faChartLine,
  faCode,
  faCogs,
  faDocker,
  faEnvelope,
  faHandshake,
  faServer,
  faStethoscope
)

function Index() {
  return (
    <div>
      <Masthead />
      <Cto />
      <Services />
      <Team />
      <Footer />
    </div>
  )
}

export default Index
