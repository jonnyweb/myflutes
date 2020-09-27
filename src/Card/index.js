import React from "react"
import PropTypes from "prop-types"
import { Col } from "react-bootstrap"

export default function Card(props) {
  let svg = ""
  if (props.svgContents) {
    svg = (
      <svg style={{ height: "100%", display: "block" }} viewBox="0 0 166 126">
        {props.svgContents}
      </svg>
    )
  }

  return (
    <Col lg={6} md={5} className="text-center">
      <div className="service-box">
        <i
          className={`fa fa-4x ${props.icon} text-primary sr-icons`}
          style={{ height: "54px" }}
        >
          {svg}
        </i>
        <h3>{props.title}</h3>
        <p className="text-muted text-justify">{props.content}</p>
      </div>
    </Col>
  )
}

Card.propTypes = {
  svgContents: PropTypes.node,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
