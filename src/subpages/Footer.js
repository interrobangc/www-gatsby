import React from "react"
import SocialIcon from "../components/SocialIcon"

class Footer extends React.Component {
  state = {
    isScrolled: false,
  }

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const isScrolled = window.scrollY > 13
    if (isScrolled !== this.state.isScrolled) {
      this.setState({ isScrolled })
    }
  }

  getClassName() {
    if (this.state.isScrolled) {
      return `scrolled`
    }
    return ``
  }

  render() {
    return (
      <footer className={`fixed-bottom ` + this.getClassName()}>
        <div className="row">
          <div className="col-7">
            <span className="copyright">
              &copy; Interrobang Consulting, LLC
            </span>
          </div>
          <div className="col-5 justify-content-center align-self-center">
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
      </footer>
    )
  }
}

export default Footer
