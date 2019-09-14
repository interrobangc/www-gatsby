import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

function Masthead() {
  const { mastheadYaml } = useStaticQuery(graphql`
    {
      mastheadYaml {
        scriptText
        capsText
        image {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const { scriptText, capsText, image } = mastheadYaml

  return (
    <BackgroundImage
      Tag="header"
      className="masthead"
      fluid={[
        `linear-gradient(rgba(33, 37, 41, 0.5), rgba(33, 37, 41, 0.2))`,
        image.childImageSharp.fluid
      ]}
      backgroundColor={`#040e18`}
    >
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">{scriptText}</div>
          <div className="intro-heading text-uppercase">{capsText}</div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Masthead
