import React from "react"
import TeamItem from "../components/TeamItem"
import { useStaticQuery, graphql } from "gatsby"

function Team() {
  const { allTeamYaml } = useStaticQuery(graphql`
    {
      allTeamYaml {
        edges {
          node {
            name
            title
            image {
              childImageSharp {
                fluid(maxWidth: 225) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            github
            linkedin
            facebook
          }
        }
      }
    }
  `)
  return (
    <section id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="text-center section-heading text-uppercase">
              The Team
            </h2>
          </div>
        </div>
        <div className="row">
          {allTeamYaml.edges.map(({ node }) => {
            return (
              <TeamItem
                key={node.name}
                name={node.name}
                title={node.title}
                image={node.image}
                github={node.github}
                linkedin={node.linkedin}
                facebook={node.facebook}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team
