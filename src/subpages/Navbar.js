import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

class Navbar extends React.Component {
  state = {
    isNavExpanded: false,
    isScrolled: false,
  }

  constructor(props) {
    super(props)

    this.closeNav = this.closeNav.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.toggleNavExpanded = this.toggleNavExpanded.bind(this)
    this.handleAnchorClick = this.handleAnchorClick.bind(this)
    this.deactivateNavOnScroll = this.deactivateNavOnScroll.bind(this)
    this.registerDeactivateNavOnScroll = this.registerDeactivateNavOnScroll.bind(
      this
    )
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll)
    document.removeEventListener("scroll", this.deactivateNavOnScroll)
  }

  setIsNavExpanded(isNavExpanded) {
    this.setState({ isNavExpanded })
  }

  toggleNavExpanded() {
    this.setIsNavExpanded(!this.state.isNavExpanded)
  }

  deactivateNavOnScroll() {
    document.activeElement.blur()
    document.removeEventListener("scroll", this.deactivateNavOnScroll)
  }

  registerDeactivateNavOnScroll() {
    document.addEventListener("scroll", this.deactivateNavOnScroll)
  }

  closeNav() {
    this.setIsNavExpanded(false)
  }

  handleAnchorClick() {
    // all of this complication is so we can deactivate the
    // nav anchor link when the user starts scrolling.

    // remove the listener before we start in case it is already active
    document.removeEventListener("scroll", this.deactivateNavOnScroll)

    // give the page time to scroll before registering the listener
    window.setTimeout(this.registerDeactivateNavOnScroll, 1400)

    this.closeNav()
  }

  handleScroll() {
    const isScrolled = window.scrollY > 13
    if (isScrolled !== this.state.isScrolled) {
      this.setState({ isScrolled })
    }
  }

  getClassName() {
    let classes = ``
    if (this.state.isScrolled) {
      classes += ` navbar-shrink`
    }

    if (this.state.isNavExpanded) {
      classes += ` navbar-expanded`
    }

    return classes
  }

  render() {
    return (
      <div>
        <nav
          id="mainNav"
          className={
            `navbar navbar-expand-lg navbar-dark fixed-top ` +
            this.getClassName()
          }
        >
          <AnchorLink
            href="#page-top"
            onClick={this.closeNav}
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            className="navbar-brand"
          >
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
            onClick={this.toggleNavExpanded}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <AnchorLink
                  onClick={this.handleAnchorClick}
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  className="nav-link"
                  href="#cto"
                >
                  fractional cto
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  onClick={this.handleAnchorClick}
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  className="nav-link"
                  href="#services"
                >
                  technical services
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  onClick={this.handleAnchorClick}
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  className="nav-link"
                  href="#team"
                >
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
