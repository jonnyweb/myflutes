import React from 'react';
import { Row, Col } from 'react-bootstrap';

const eventList = [];

export default function EventsList() {
  if (eventList.length === 0) return null;

  return (
    <section id="events" className="bg-primary hex-bg">
      <div className="container">
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="section-heading">Events</h2>
            <hr className="light" />
          </Col>
        </Row>
      </div>
      <div className="container">
      </div>
    </section>
  );
}

export {
  eventList,
  EventsList
}
