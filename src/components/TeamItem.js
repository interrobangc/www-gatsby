import React from "react"
import SocialIcon from "./SocialIcon"
import Bounce from "react-reveal/Fade"

function TeamItem({ name, title, img, github, linkedin, facebook }) {
  return (
    <Bounce right>
      <div className="col-sm-4">
        <div className="team-member">
          <img src={img} className="mx-auto rounded-circle" alt={`${name}`} />
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
