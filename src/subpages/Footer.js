import React from "react"
import SocialIcon from "../components/SocialIcon"

function Footer() {
  return (
    <footer className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <span className="copyright">
              &copy; Interrobang Consulting, LLC
            </span>
          </div>
          <div className=" col-5">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <SocialIcon
                  site="email"
                  username="info@interrobang.consulting"
                />
              </li>
              <li className="list-inline-item">
                <SocialIcon site="github" username="interrobangc" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
