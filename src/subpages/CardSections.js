import React from "react"
import CardSection from "../components/CardSection"
import { useStaticQuery, graphql } from "gatsby"

function CardSections() {
  const { allCardSectionsYaml } = useStaticQuery(graphql`
    {
      allCardSectionsYaml(sort: { fields: [order], order: ASC }) {
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
            cards {
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

  return allCardSectionsYaml.edges.map(({ node }, index) => {
    return <CardSection key={index} data={node} />
  })
}

export default CardSections
