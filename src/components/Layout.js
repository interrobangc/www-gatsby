import React from "react"
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

export default ({ children }) => <div id="page-top">{children}</div>
