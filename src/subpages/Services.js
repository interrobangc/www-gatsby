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
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-heading">Technical Services</h2>
            <h3 className="section-subheading text-muted">
              We design software, processes, and infrastructures that get out of
              the way and let empowered developers and system engineers do what
              they do best.
            </h3>
          </div>
        </div>
        <div className="row mx-auto">
          {allServicesYaml.edges.map(({ node }, index) => {
            return (
              <IconItem
                key={index}
                title={node.title}
                icon={node.icon}
                description={node.description}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
