import React from 'react'
import { Row, Col } from 'react-bootstrap'

import LazyLoad from 'react-lazyload'

import './style.scss'

const videos = [
  'https://www.youtube.com/embed/PHDBIUmMNzY',
  'https://www.youtube.com/embed/6AJqgpfKJzA',
  'https://www.youtube.com/embed/WDZsX-3FPjM',
  'https://www.youtube.com/embed/_9exikmOe_o',
  // 'https://www.youtube.com/embed/Gt_c1eeyyX4',
  // 'https://www.youtube.com/embed/EyWza7LDjck',
  // 'https://www.youtube.com/embed/97rnW6VdOUY',
  // 'https://www.youtube.com/embed/videoseries?list=PL4QFol8n_H4htqv36WEgqz4mmrS9vbkuq',
  // 'https://www.youtube.com/embed/EyWza7LDjck',
  // 'https://www.youtube.com/embed/3Tpu8ezUQRE',
  //'https://www.youtube.com/embed/Ua-r_2bdo7E',
  //'https://www.youtube.com/embed/LV5vluTRdho',
]

export default function Videos() {
  const videoComponents = videos.map((v, i) => (
    <Col lg={6} sm={6} xs={12} key={`v${i}`}>
      <div className="video">
        <iframe title={`video${i}`} src={v} frameBorder="0" allowFullScreen loading="lazy" />
      </div>
    </Col>
  ))

  return (
    <section className={'no-padding'} id="videos">
      <div className="container">
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="section-heading">Videos</h2>
            <hr className="primary" />
          </Col>
          {videoComponents}
        </Row>
      </div>
    </section>
  )
}
