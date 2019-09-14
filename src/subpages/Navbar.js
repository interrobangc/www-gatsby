import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

class Navbar extends React.Component {
  state = {
    isNavExpanded: false,
    isScrolled: false,
  }

  constructor(props) {
    super(props)

    this.handleScroll = this.handleScroll.bind(this)
    this.toggleNavExpanded = this.toggleNavExpanded.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll)
  }

  setIsNavExpanded(isNavExpanded) {
    this.setState({ isNavExpanded });
  }

  toggleNavExpanded() {
    this.setIsNavExpanded(!this.state.isNavExpanded);
  }

  closeNav() {
    this.setIsNavExpanded(false);
  }

  handleScroll() {
    const isScrolled = window.scrollY > 56
    if (isScrolled !== this.state.isScrolled) {
      this.setState({ isScrolled })
    }
  }

  getClassName() {
    let classes = `navbar navbar-expand-lg navbar-dark fixed-top`;
    if (this.state.isScrolled) {
      classes += ` navbar-shrink`
    }

    if (this.state.isNavExpanded) {
      classes += ` navbar-expanded`
    }

    return classes;
  }

  render() {
    return (
      <div>
        <nav
          id="mainNav"
          className={this.getClassName()}
        >
          <AnchorLink href="#page-top" onClick={this.closeNav} data-toggle="collapse" data-target=".navbar-collapse.show" className="navbar-brand">
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
                <AnchorLink onClick={this.closeNav} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" href="#cto">
                  fractional cto
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink onClick={this.closeNav} data-toggle="collapse" data-target=".navbar-collapse.show"className="nav-link" href="#services">
                  technical services
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink onClick={this.closeNav} data-toggle="collapse" data-target=".navbar-collapse.show"className="nav-link" href="#team">
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
