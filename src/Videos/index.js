import React from 'react';

import { Row, Col } from 'react-bootstrap';


const videos = [
  'https://www.youtube.com/embed/Ua-r_2bdo7E',
  'https://www.youtube.com/embed/LV5vluTRdho',
];

export default function Videos(){

  let videoComponents = [];

  for (let i = 0; i < videos.length; i++) {
    videoComponents.push(
      <Col lg={6} sm={6} xs={12}>
        <div className="video">
          <iframe src={videos[i]} frameBorder="0" allowFullScreen></iframe>
        </div>
      </Col>
    );
  }

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
  );
}
