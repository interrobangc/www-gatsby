import React from "react"
import { SocialIcon as ReactSocialIcon } from "react-social-icons"

function SocialIcon({ site, className, username }) {
  if (username) {
    return (
      <ReactSocialIcon
        className={className}
        url={`http://${site}.com/${username}`}
      />
    )
  }
  return null
}

export default SocialIcon
