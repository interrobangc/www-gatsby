import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function IconSectionItem({ icon, title, description }) {
  return (
    <div className="col-md-4">
      <div className="iconItem">
        <FontAwesomeIcon className="iconItemIcon" icon={icon} size="6x" />
        <h3 className="iconItemTitle">{title}</h3>
        <p className="iconItemDescription">{description}</p>
      </div>
    </div>
  )
}

export default IconSectionItem
