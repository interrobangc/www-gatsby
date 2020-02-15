import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "gatsby-image"

function IconOrImage({ title, image, imageBackground, icon }) {
  if (image === null) {
    return (
      <div className="card-header border-0 iconHeader">
        <FontAwesomeIcon
          className="iconItemIcon"
          icon={icon}
          size="6x"
          alt={title}
        />
        <h3 className="card-title iconTitle">{title}</h3>
      </div>
    )
  }

  return (
    <div className="card-header border-0">
      <div className="image-background">
        <Img
          className="iconItemImage"
          alt={title}
          fluid={image.childImageSharp.fluid}
        />
      </div>
      <div className="card-img-overlay">
        <h3 className="card-title imageTitle">{title}</h3>
      </div>
    </div>
  )
}

function IconSectionItem({ index, icon, image, title, description }) {
  return (
    <div className="card border-0 iconItem">
      <IconOrImage key={index} title={title} image={image} icon={icon} />
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
    </div>
  )
}

export default IconSectionItem
