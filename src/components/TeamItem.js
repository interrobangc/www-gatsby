import React from "react"
import Bounce from "react-reveal/Fade"
import Img from "gatsby-image"
import SocialIcon from "./SocialIcon"

function TeamItem({ name, title, image, github, linkedin, facebook }) {
  return (
    <Bounce right>
      <div className="col-md-4">
        <div className="teamItem">
          <Img
            className="mx-auto rounded-circle teamItemImage"
            fluid={image.childImageSharp.fluid}
            alt={name}
          />
          <h4 className="mt-4">{name}</h4>
          <p className="text-muted">{title}</p>
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
    </Bounce>
  )
}

export default TeamItem
