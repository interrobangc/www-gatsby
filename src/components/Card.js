import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "gatsby-image"

function IconOrImage({ title, image, imageBackground, icon }) {
  if (image === null) {
    return (
      <div className="card-header border-0">
        <FontAwesomeIcon
          className="card-icon"
          icon={icon}
          size="6x"
          alt={title}
        />
        <h3 className="card-title icon-title">{title}</h3>
      </div>
    )
  }

  return (
    <div className="card-header border-0">
      <div className="image-background">
        <Img
          className="card-img-top"
          alt={title}
          fluid={image.childImageSharp.fluid}
        />
      </div>
      <div className="card-img-overlay">
        <h3 className="card-title image-title">{title}</h3>
      </div>
    </div>
  )
}

function Card({ index, icon, image, title, description }) {
  return (
    <div class="col-sm-12 col-lg-4 py-2">
      <div className="card border-0 h-100">
        <IconOrImage key={index} title={title} image={image} icon={icon} />
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
