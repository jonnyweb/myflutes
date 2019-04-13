import React from "react";

import { Row, Col } from "react-bootstrap";
import "./style.less"
// <h3>King's Junior School Music Competition</h3>
// <p>Congratulation to all of my pupils for the following results!</p>
// <div id="results">
//   <p>
//     <span className="bold">Year 3/4 Woodwind</span>
//     <span>Megan (1st), Molly (2nd)</span>
//     <br />
//     <span className="bold">Year 5/6 Woodwing</span>
//     <span>Hattie (1st), Amy (2nd)</span>
//     <br />
//     <span className="bold">Year 7/8 Woodwind</span>
//     <span>Sophie (1st), Lauren (2nd)</span>
//   </p>
// </div>

const peterborough = (
  <div className="container">
    <Row>
      <Col lg={12} className="text-center">
        <h2 className="section-heading">Peterborough & Oundle Music Festival Results</h2>
        <hr className="primary" />

        <p>
          The Peterborough Music Festival 2019 was another great success for my pupils this year. They all played amazingly well and were given glowing reviews from the judge.
          A special congratulations to Lara who managed to win the Under 18 Woodwind Solo class.
        </p>

        <div className="results">
          <h3>Peterborough Class Results</h3>
          <p>
            <span className="bold">Elementary & Grade 1 Solo</span>
            <span>Distinction: Aoife (Winner)</span>
          </p>

          <p>
            <span className="bold">Grade 2/3 Solo</span>
            <span>Distinction: Agatha (Winner)</span>
            <span>Commended: Cosima</span>
          </p>

          <p>
            <span className="bold">Grade 4/5 Solo</span>
            <span>Distinction: Nell (Winner)</span>
          </p>

          <p>
            <span className="bold">Under 15 Solo</span>
            <span>Outstanding: Lara (Winner)</span>
            <span>Distinction: Laure & Sophie</span>
          </p>

          <p>
            <span className="bold">Under 18 Solo</span>
            <span>Oustanding: Lara (Winner), Victoria & Lauren</span>
          </p>

          <p>
            <span className="bold">Senior Duet</span>
            <span>Oustanding: Victoria & Lara</span>
          </p>
        </div>

        <div class="results">
          <h3>Oundle Class Results</h3>

        </div>
      </Col>
    </Row>
  </div>
);


// Exams released today.
// Private  pupil
// Grade 8 Lara 144 Distinction.
// Kings pupils.

// Sophie Grade 7 140 Distinction.
// Charlotte grade 7 130 distinction
// Helen grade 5 131 Distinction.
const exams = (
  <div className="container">
    <Row>
      <Col lg={12} className="text-center">
        <h2 className="section-heading">Recent ABRSM exams</h2>
        <hr className="primary" />

        <p>
          I'd like to congratulate all of my pupils who recently achieved outstanding results with the ABRSM exams.
        </p>

        <div className="results">
          <p>
            <span className="bold">Grade 8</span>
            <span>Distinction: Lara (144)</span>
          </p>
          <p>
            <span className="bold">Grade 7</span>
            <span>Distinction: Sophie (140), Charlotte (130)</span>
          </p>
          <p>
            <span className="bold">Grade 5</span>
            <span>Distinction: Helen (131)</span>
          </p>
        </div>
      </Col>
    </Row>
  </div>
);

export default function News() {
  return <section id="news">{peterborough}{exams}</section>;
}
