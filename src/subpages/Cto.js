import React from "react"
import IconItem from "../components/IconItem"
import { useStaticQuery, graphql } from "gatsby"

function Cto() {
  const { allCtoYaml } = useStaticQuery(graphql`
    {
      allCtoYaml {
        edges {
          node {
            title
            icon
            description
          }
        }
      }
    }
  `)
  return (
    <div id="cto" className="container-fluid">
      <div className="container center-items">
        <div className="flexbox">
          <h1 className="text-center my-5">Fractional CTO</h1>
          <h3 className="my-2 text-muted text-center">
            We provide fractional CTO services that come with the support of an
            existing team. This allows us to make progress toward your goals
            with minimal ramp up time. Our team can take your startup from 0 to
            10 or from 10 to 100.
          </h3>
          <div className="row my-4">
            {allCtoYaml.edges.map(({ node }) => {
              return (
                <IconItem
                  key={node.title}
                  title={node.title}
                  icon={node.icon}
                  description={node.description}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cto
