import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function getUrl(site, username) {
  switch (site) {
    case "email":
      return `mailto:${username}`
    case "facebook":
      return `https://facebook.com/${username}`
    case "github":
      return `https://github.com/${username}`
    case "linkedin":
      return `https://www.linkedin.com/in/${username}`
    default:
      return null
  }
}

function getIcon(site) {
  if (site === "email") {
    return "envelope"
  }
  return ["fab", site]
}

function SocialIcon({ site, username }) {
  if (username) {
    return (
      <a href={getUrl(site, username)} className="text-center">
        <FontAwesomeIcon icon={getIcon(site)} size="lg" />
      </a>
    )
  }
  return null
}

export default SocialIcon
