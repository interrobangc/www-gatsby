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
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 className="section-heading text-uppercase">
              Technical Services
            </h1>
            <h3 className="section-subheading text-muted text-center">
              We design software, processes, and infrastructures that get out of
              the way and let empowered developers and system engineers do what
              they do best.
            </h3>
          </div>
        </div>
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
    </section>
  )
}

export default Services
