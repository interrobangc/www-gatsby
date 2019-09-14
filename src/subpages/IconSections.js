import React from "react"
import IconSection from "../components/IconSection"
import { useStaticQuery, graphql } from "gatsby"

function IconSections() {
  const { allIconSectionsYaml } = useStaticQuery(graphql`
    {
      allIconSectionsYaml {
         edges {
          node {
            id
            heading
            subheading
            iconItems {
              title
              icon
              description
            }
          }
        }
      }
    }
  `)

  return ( 
    allIconSectionsYaml.edges.map(({ node }, index) => {
      return (
        <IconSection key={index} data={node} />
      )
    })
  )

}

export default IconSections
