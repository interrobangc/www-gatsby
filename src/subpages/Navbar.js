import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

class Navbar extends React.Component {
  state = {
    isTop: true,
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 56
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }

  render() {
    return (
      <div>
        <nav
          id="mainNav"
          className={
            this.state.isTop
              ? "navbar navbar-expand-lg navbar-dark fixed-top"
              : "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink"
          }
        >
          <AnchorLink href="#page-top" className="navbar-brand">
            Interrobang Consulting
          </AnchorLink>
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
}

export default Navbar
