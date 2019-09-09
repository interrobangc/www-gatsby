import React from "react"
import Bounce from "react-reveal/Bounce"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function IconItem({ icon, title, description }) {
  return (
    <Bounce left>
      <div className="col-md-4">
        <FontAwesomeIcon icon={icon} size="6x" />
        <h3 className="mt-5">{title}</h3>
        <p>{description}</p>
      </div>
    </Bounce>
  )
}

export default IconItem
