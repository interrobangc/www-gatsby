import React from "react"
import IconItem from "../components/IconItem"
import { useStaticQuery, graphql } from "gatsby"

function Services() {
  const { allServicesYaml } = useStaticQuery(graphql`
    {
      allServicesYaml {
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
    <div id="services" className="container-fluid">
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-5">Technical Services</h1>
          <h3 className="col-xl-1 my-1 text-muted">
            We design software, processes, and infrastructures that get out of
            the way and let empowered developers and system engineers do what
            they do best.
          </h3>
          <div className="row my-4">
            {allServicesYaml.edges.map(({ node }) => {
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

export default Services
