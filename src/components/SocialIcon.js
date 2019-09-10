import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SocialIcon({ site, username }) {
  if (username) {
    return (
      <a href={`http://${site}.com/${username}`}>
        <FontAwesomeIcon icon={["fab", site]} size="lg" />
      </a>
    )
  }
  return null
}

export default SocialIcon
