import React from "react"
import IconSection from "../components/IconSection"
import { useStaticQuery, graphql } from "gatsby"

function IconSections() {
  const { allIconSectionsYaml } = useStaticQuery(graphql`
    {
      allIconSectionsYaml(sort: { fields: [order], order: ASC }) {
        edges {
          node {
            id
            backgroundGradient
            backgroundImage {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 1500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            subheading
            iconItems {
              title
              icon
              image {
                childImageSharp {
                  fluid(maxWidth: 800, maxHeight: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              description
            }
          }
        }
      }
    }
  `)

  return allIconSectionsYaml.edges.map(({ node }, index) => {
    return <IconSection key={index} data={node} />
  })
}

export default IconSections
