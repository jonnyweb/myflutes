import React from 'react';

import { Row, Col } from 'react-bootstrap';

export default function Videos(){
  return (
    <section className={'no-padding'} id="videos">
      <div className="container">
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="section-heading">Videos</h2>
            <hr className="primary" />
          </Col>
          <Col lg={6} sm={6} xs={12}>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/dVw_U5HK0xA" frameBorder="0" allowFullScreen></iframe>
            </div>
          </Col>
          <Col lg={6} sm={6} xs={12}>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/LV5vluTRdho" frameBorder="0" allowFullScreen></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
