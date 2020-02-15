import React from "react"
import BackgroundImage from "gatsby-background-image"
import Card from "./Card"

const ConditionalBackgroudImage = ({ data, children }) => {
  if (data.id && data.backgroundImage) {
    return (
      <BackgroundImage
        Tag="section"
        id={data.id}
        className="cardSection"
        fluid={[
          data.backgroundGradient,
          data.backgroundImage.childImageSharp.fluid,
        ]}
      >
        {children}
      </BackgroundImage>
    )
  } else {
    return (
      <section id={data.id} className="cardSection">
        {children}
      </section>
    )
  }
}

function CardSection({ data }) {
  return (
    <ConditionalBackgroudImage data={data}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="section-heading">{data.heading}</h2>
            <h3 className="section-subheading">{data.subheading}</h3>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="card-deck">
            {data.cards.map((node, index) => {
              return (
                <Card
                  key={index}
                  index={index}
                  title={node.title}
                  icon={node.icon}
                  image={node.image}
                  description={node.description}
                />
              )
            })}
          </div>
        </div>
      </div>
    </ConditionalBackgroudImage>
  )
}

export default CardSection
