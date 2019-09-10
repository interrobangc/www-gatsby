import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function getUrl(site, username) {
  switch (site) {
    case "facebook":
      return `https://facebook.com/${username}`
    case "github":
      return `https://github.com/${username}`
    case "linkedin":
      return `https://www.linkedin.com/in/${username}`
      break
    default:
      return null
  }
}

function SocialIcon({ site, username }) {
  if (username) {
    return (
      <a href={getUrl(site, username)}>
        <FontAwesomeIcon icon={["fab", site]} size="lg" />
      </a>
    )
  }
  return null
}

export default SocialIcon
