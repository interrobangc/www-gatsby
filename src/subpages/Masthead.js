import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql } from "gatsby"

function Masthead() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

  return (
    <header className="masthead">
      <Navbar />
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">{welcomeText}</div>
          <div className="intro-heading text-uppercase">{landingText}</div>
        </div>
      </div>
    </header>
  )
}

export default Masthead
