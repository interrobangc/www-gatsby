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
            img
            github
            linkedin
            facebook
          }
        }
      }
    }
  `)
  return (
    <div id="team" className="container-fluid">
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-4">Meet Our Team </h1>
          <div className="row my-5">
            {allTeamYaml.edges.map(({ node }) => {
              return (
                <TeamItem
                  key={node.name}
                  name={node.name}
                  title={node.title}
                  img={node.img}
                  github={node.github}
                  linkedin={node.linkedin}
                  facebook={node.facebook}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
