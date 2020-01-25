import React from "react"
import Img from "gatsby-image"
import SocialIcon from "./SocialIcon"

function TeamItem({ name, title, image, github, linkedin, facebook }) {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="teamItem">
        <Img
          className="mx-auto teamItemImage"
          fluid={image.childImageSharp.fluid}
          alt={name}
        />
        <h4>{name}</h4>
        <p>{title}</p>
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <SocialIcon site="github" username={github} />
          </li>
          <li className="list-inline-item">
            <SocialIcon site="linkedin" username={linkedin} />
          </li>
          <li className="list-inline-item">
            <SocialIcon site="facebook" username={facebook} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TeamItem
