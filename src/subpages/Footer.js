import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SocialIcon from "../components/SocialIcon"

function Footer() {
  return (
    <footer className="bg-light container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="copyright">
              Copyright &copy; Interrobang Consulting 2019
            </span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="mailto:info@interrobang.consulting">
                  <FontAwesomeIcon icon="envelope" size="lg" />
                </a>
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
