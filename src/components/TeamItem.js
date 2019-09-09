import React from "react"
import SocialIcon from "./SocialIcon"
import Bounce from "react-reveal/Fade"

function TeamItem({ name, title, img, github, linkedin, facebook }) {
  return (
    <Bounce right>
      <div className="teamItem col-lg-4 my-3 col-sm-12">
        <img
          src={img}
          className="img-fluid rounded-circle mx-auto d-block"
          width="200px"
          alt={`${name}`}
        />
        <h3 className="mt-4 text-center">{name}</h3>
        <p className="text-muted text-center">{title}</p>
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <SocialIcon
              className="mr-4 mx-auto d-block"
              site="github"
              username={github}
            />
          </li>
          <li className="list-inline-item">
            <SocialIcon
              className="mr-4 mx-auto d-block"
              site="linkedin"
              username={linkedin}
            />
          </li>
          <li className="list-inline-item">
            <SocialIcon
              className="mr-4 mx-auto d-block"
              site="facebook"
              username={facebook}
            />
          </li>
        </ul>
      </div>
    </Bounce>
  )
}

export default TeamItem
