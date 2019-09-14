import React from "react"
import BackgroundImage from "gatsby-background-image"
import IconSectionItem from "../components/IconSectionItem"

const ConditionalBackgroudImage = ({ data, children}) => {
  console.log(data.id)
  if (data.id && data.backgroundImage){
    console.log('not null')
    return (
      <BackgroundImage
        Tag="section"
        id={data.id}
        fluid={[
          `linear-gradient(rgba(33, 37, 41, 0.80), rgba(33, 37, 41, 0.80))`,
          data.backgroundImage.childImageSharp.fluid
        ]}
      >{children}</BackgroundImage>
    )
  } else {
    console.log('in null')
    return  (
      <section id={data.id}>{children}</section>
    )
  }
};

function IconSection({ data }) {
  return (
    <ConditionalBackgroudImage data={data}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-heading">{data.heading}</h2>
            <h3 className="section-subheading">{data.subheading}</h3>
          </div>
        </div>
        <div className="row mx-auto">
          {data.iconItems.map(( node , index) => {
            return (
              <IconSectionItem
                key={index}
                index={index}
                title={node.title}
                icon={node.icon}
                description={node.description}
              />
            )
          })}
        </div>
      </div>
    </ConditionalBackgroudImage>
  )
}

export default IconSection
