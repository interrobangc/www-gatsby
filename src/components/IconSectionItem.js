import React from "react"
import Bounce from "react-reveal/Bounce"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function IconSectionItem({ icon, title, description }) {
  return (
    <Bounce left>
      <div className="col-md-4">
        <div className="iconItem">
          <FontAwesomeIcon className="iconItemIcon" icon={icon} size="6x" />
          <h3 className="iconItemTitle">{title}</h3>
          <p className="iconItemDescription">{description}</p>
        </div>
      </div>
    </Bounce>
  )
}

export default IconSectionItem
