import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"

import {
  faCode,
  faCogs,
  faEnvelope,
  faServer,
} from "@fortawesome/free-solid-svg-icons"

import {
  faDocker,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

library.add(
  faCode,
  faCogs,
  faDocker,
  faEnvelope,
  faFacebook,
  faGithub,
  faLinkedin,
  faServer
)

export default ({ children }) => <div id="page-top">{children}</div>
