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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">The Team</h2>
          </div>
        </div>
        <div className="row">
          {allTeamYaml.edges.map(({ node }, index) => {
            return (
              <TeamItem
                key={index}
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
