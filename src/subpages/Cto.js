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
    <section id="cto">
      <div className="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 className="section-heading">Fractional CTO</h2>
            <h3 className="section-subheading text-muted">
              We provide fractional CTO services that come with the support of
              an existing team. This allows us to make progress toward your
              goals with minimal ramp up time. Our team can take your startup
              from 0 to 10 or from 10 to 100.
            </h3>
          </div>
        </div>
        <div className="row mx-auto">
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
    </section>
  )
}

export default Cto
