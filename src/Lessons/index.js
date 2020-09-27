import React from "react"

import { Row, Col } from "react-bootstrap"
import { Link } from "react-scroll"
import Card from "../Card"

import "./style.scss"

const teaching = (
  <svg viewBox="0 0 512.002 512.002" style={{ height: "100%" }}>
    <g>
      <g>
        <path
          d="M273.754,187.249l-30.775-34.82c-2.054-2.325-5.604-2.544-7.93-0.49c-2.324,2.055-2.544,5.606-0.489,7.93l24.438,27.65    l-46.909-15.345c-2.475-0.81-5.138,0.54-5.948,3.016l-7.207,22.03c14.278-0.822,28.399,6.561,35.496,20.042    c9.682,18.394,2.619,41.157-15.776,50.84l-10.576,5.566l31.945,10.449c2.475,0.81,5.138-0.54,5.948-3.016l28.912-88.387    l-0.021-0.007C275.459,190.878,275.12,188.795,273.754,187.249z"
          fill="#933EC5"
        />
      </g>
    </g>
    <g>
      <g>
        <circle cx="94.189" cy="132.954" r="44.94" fill="#933EC5" />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M219.14,225.31c-5.237-9.95-17.55-13.773-27.501-8.535l-53.213,28.008c-7.767-3.791-61.718-30.123-70.428-34.375    l48.642,10.956c-2.979-16.063-16.94-27.762-33.28-27.879l-31.364-0.225c-18.959-0.136-34.392,15.239-34.34,34.188    c0.298,112.95,0.385,118.572,0.794,126.539c0.106,15.341,5.247,22.556,16.533,26.303l9.346,3.103H24.432    C10.938,383.397,0,394.336,0,407.829c0,13.493,10.938,24.432,24.432,24.432h126.927c15.567,0,28.67-11.154,31.156-26.521    c2.485-15.368-6.434-30.085-21.211-34.992l-46.103-15.309l0.853-54.168l-54.965-48.922c33.066,16.138,36.153,17.645,68.52,33.442    c5.681,2.861,12.612,3.012,18.649-0.165l62.348-32.817C220.557,247.573,224.378,235.26,219.14,225.31z"
          fill="#933EC5"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M495.898,400.056h-13.114c9.667-3.21,4.691-1.557,6.201-2.061c10.014-3.355,11.062-10.994,11.159-20.584l0.219-80.132    c0.033-11.818-9.169-21.87-21.366-22.478c-0.369-0.018-12.985-0.578-27.284,0.807c-10.79,1.045-17.118,12.059-16.959,22.111    l0.362,22.964l27.846-28.267l-26.793,44.158c0,0-31.146,2.712-39.481,3.438c-7.427,0.647-12.851,7.207-12.203,14.532    c0.646,7.431,7.228,12.841,14.532,12.204c0.001,0,46.307-4.031,46.308-4.033c3.844-0.274,7.985-2.544,10.347-6.546l26.07-42.969    l-13.921,49.883c-1.001,3.586-1.611,8.464-4.789,9.598l-57.338,19.038c-9.734,3.231-15.618,12.927-13.979,23.066    c1.625,10.022,10.223,17.475,20.533,17.475H495.9c8.893,0,16.102-7.21,16.102-16.103C512,407.265,504.79,400.056,495.898,400.056z    "
          fill="#933EC5"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M479.39,162.326c-4.25-4.231-10.017-6.589-16.015-6.546l-20.67,0.148c-5.993,0.043-11.721,2.477-15.91,6.764    c-4.19,4.285-6.492,10.067-6.398,16.06l0.594,37.747c6.43-17.009,22.741-29.025,41.934-29.025c8.145,0,16.109,2.252,23.039,6.422    l0.043-15.584C486.023,172.314,483.641,166.558,479.39,162.326z"
          fill="#933EC5"
        />
      </g>
    </g>
    <g>
      <g>
        <circle cx="448.531" cy="113.281" r="33.54" fill="#933EC5" />
      </g>
    </g>
    <g>
      <g>
        <circle cx="360.376" cy="187.246" r="33.54" fill="#933EC5" />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M437.174,268.906c-3.364-2.359-6.357-5.122-9.01-8.381c-2.755-3.384-4.992-7.154-6.655-11.181l0.21,13.321l-23.92,7.943    l0.051-18.336c0.017-5.998-2.366-11.754-6.617-15.986c-4.251-4.233-10.017-6.589-16.015-6.546l-20.67,0.148    c-5.993,0.043-11.72,2.477-15.91,6.764s-6.492,10.068-6.398,16.06l0.362,22.964l27.846-28.267l-26.793,44.158    c-24.656,2.147-15.8,1.376-39.482,3.438c-6.986,0.609-12.254,6.467-12.255,13.351c0,7.508,6.09,13.437,13.404,13.436    c0.975,0,47.465-4.075,47.488-4.084c0.01,0.001,0.019-0.001,0.027-0.002c4.375-0.404,8.17-2.896,10.321-6.545l26.069-42.966    l-12.83,49.422c-1.001,3.586-2.621,8.801-5.881,10.058c-33.636,11.168-19.591,6.504-57.338,19.038    c-9.741,3.234-15.619,12.935-13.979,23.058c1.637,10.13,10.273,17.483,20.533,17.483h79.812    c5.977-5.583,11.529-7.023,16.656-8.726c-6.576,0.573-6.901,0.63-8.366,0.63c-13.463,0-24.496-10.121-25.662-23.524    c-1.215-13.671,8.336-25.758,21.93-27.732c1.446-0.21,0.652-0.128,3.543-0.38l0.039-14.237c1.124,0.013-5.431,0.009,24.956,0.009    l-0.243-15.381C422.222,286.83,427.462,275.717,437.174,268.906z"
          fill="#933EC5"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M496.041,227.189c-2.535-16.594-16.828-28.48-33.114-28.48c-20.663,0-36.287,18.382-33.197,38.609    c2.535,16.595,16.828,28.48,33.114,28.48C483.505,265.798,499.129,247.416,496.041,227.189z"
          fill="#933EC5"
        />
      </g>
    </g>
  </svg>
)

//Suzuki students Graduate from each book performing a piece which is recorded and sent away for comments and they gain a certificate.
export default function Lessons() {
  return (
    <section id="lessons">
      <div className="container">
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="section-heading">Lessons</h2>
            <hr className="primary" />
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row>
          <Card
            title="Graded Exams"
            content="Liz prepares students for ABRSM & Trinity exams, usually performing from memory gaining excellent results from Grade 1 to Diploma."
            svgContents={
              <image
                id="image0"
                width="166"
                height="126"
                x="0"
                y="0"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAB+CAMAAACZO5oHAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACc1BMVEWdRLX///+dRLWdRLWd RLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWd RLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWd RLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWd RLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWd RLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWd RLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWd RLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWd RLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWd RLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWd RLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWd RLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLWdRLX///8syfe+AAAAz3RSTlMA ACQoDHqlqYEQSlp2jYeXi58Gm4OVDjgUfo80Piw8oS5Uk4lquyZ0hURwGKd8aG4Eo1IqUJkSSGRC XjpYCEwaNmAwHEYKeK0CqyIWHrexVrVOZpGvMmxcQHIg/OTVurSudWO5b4SkqtPH2fm88hVpSdbo 0UsFkHs1HQM7sNDt48SYZ4pD3yNPYpZbX6hXnhcbLTM5orPP5c0htlUJ2Cld3nGg4p0nzpQlhkH2 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 ccllPAAAAABJRU5ErkJggg=="
              />
            }
          />
          <Card
            title="Suzuki Levels"
            content="
              Learn by listening and performing from memory and quickly perform with true musicianship. Gradaute book levels through performing pieces that are recorded for examination.
            "
            svgContents={teaching}
          />
          <Card
            title="ABRSM Theory"
            content="Theory lessons are given when students are ready to work through each theory book. Exams usually taken for Grade 3 and 5."
            icon="fa-book"
          />
          <Card
            title="Braille Music"
            content="The complex braille code for music is taught to blind students so that they can they can work with their own instrumental teachers learning pieces and sight-reading."
            icon="fa-braille"
          />
        </Row>
      </div>

      <div className="container" id="pricing">
        <Row>
          <Col lg={12} className="text-center">
            <h3 className="section-heading">Pricing</h3>
            <hr className="primary" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">Info Coming Soon</Col>
        </Row>

        <Row id="lessons-button">
          <Col className="text-center">
            <Link
              to="photos"
              className="btn btn-primary btn-xl page-scroll sr-button"
              spy={true}
              smooth={true}
              offset={-51}
              duration={500}
            >
              Photos
            </Link>
          </Col>
        </Row>
      </div>
    </section>
  )
}
