import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

function Masthead() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
        headerImage {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const { welcomeText, landingText, headerImage } = pageDataYaml

  return (
    <BackgroundImage
      Tag="header"
      className="masthead"
      fluid={headerImage.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">{welcomeText}</div>
          <div className="intro-heading text-uppercase">{landingText}</div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Masthead
