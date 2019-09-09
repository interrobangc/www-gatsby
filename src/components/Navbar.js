import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

function Navbar() {
  return (
    <div id="mainNav">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <h4 className="navbar-brand">Interrobang Consulting</h4>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#cto">
                fractional cto
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#services">
                technical services
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#team">
                team
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
