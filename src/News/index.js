import React from 'react';

import { Row, Col } from 'react-bootstrap';


export default function News() {
  return (
    <section id="news">
      <div className="container">
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="section-heading">Peterborough Music Festival Results</h2>
            <hr className="primary" />

            <p>The Peterborough Music Festival 2018 was a great success for my pupils this year. They all played amazingly well and were given glowing reviews from the judge.
            A special congratulations to Lara who managed to win the Under 18 Woodwind Solo class and also performed stylishly in the final concert to achieve runner up for the
            Young Musician of the Year competition.</p>

            <div id="results">
              <h3>Class Results</h3>
              <p>
                <span className="bold">Elementary & Grade 1 Solo</span>
                <span>Distinction: Aoife, Agatha, Erin & Molly</span>
              </p>

              <p>
                <span className="bold">Grade 2/3 Solo</span>
                <span>Distinction: Megan (Winner), Harriet B & Harriet P</span>
                <span>Commended: Nell, Isabel & Rebecca</span>
              </p>

              <p>
                <span className="bold">Grade 4/5 Solo</span>
                <span>Distinction: Sophie (Winner) & Lauren</span>
                <span>Commended: Olivia & Amy</span>
              </p>

              <p>
                <span className="bold">Under 12 Duet</span>
                <span>Distinction: Rebecca & Agatha (Winners), Lauren & Sophie, Nell & Olivia</span>
                <span>Commended: Harriet B & Harriet P, Isabel & Erin, Amy & Megan</span>
              </p>

              <p>
                <span className="bold">Under 15 Solo</span>
                <span>Outstanding: Lara (Winner)</span>
                <span>Distinction: Victoria, Sophie & Lauren</span>
              </p>

              <p>
                <span className="bold">Under 18 Solo</span>
                <span>Distinction: Lara (Winner) & Victoria</span>
              </p>

              <p>
                <span className="bold">Under 18 Duet</span>
                <span>Distinction: Victoria & Lara (Winners)</span>
              </p>

              <p>
                <span className="bold">Junior Woodwind Ensemble</span>
                <span>Outstanding: Kings Ely Junior Flute Choir</span>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
