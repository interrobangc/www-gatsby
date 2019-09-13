import React from "react"
import SocialIcon from "../components/SocialIcon"

function Footer() {
  return (
    <footer className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span className="copyright">
              Copyright &copy; Interrobang Consulting 2019
            </span>
          </div>
          <div className="col-md-6">
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
