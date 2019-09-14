import React from "react"
import IconSectionItem from "../components/IconSectionItem"

function IconSection({ data }) {
  return (
    <section id={data.id}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-heading">{data.heading}</h2>
            <h3 className="section-subheading text-muted">{data.subheading}</h3>
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
    </section>
  )
}

export default IconSection
