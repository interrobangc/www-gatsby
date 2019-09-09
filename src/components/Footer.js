import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SocialIcon } from "react-social-icons"

function Footer() {
  return (
    <div>
      <footer className="bg-light">
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
                  <SocialIcon url="mailto:info@interrobang.consulting" />
                </li>
                <li className="list-inline-item">
                  <SocialIcon url="https://github.com/interrobangc" />
                </li>
                <li className="list-inline-item">
                  <a href="https://store.docker.com/profiles/interrobangc">
                    <FontAwesomeIcon icon={["fab", "docker"]} size="2x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
