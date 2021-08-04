import React from "react"

import { Row, Col } from "react-bootstrap"
import laurenAndSophie from "../images/lauren_and_sophie.jpg"
import "./style.scss"
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

// const peterborough = (
//   <div className="container">
//     <Row>
//       <Col lg={12} className="text-center">
//         <h2 className="section-heading">Peterborough & Oundle Music Festival Results</h2>
//         <hr className="primary" />

//         <p>
//           The Peterborough Music Festival 2019 was another great success for my pupils this year. They all played
//           amazingly well and were given glowing reviews from the judge. A special congratulations to Lara who managed to
//           win the Under 18 Woodwind Solo class.
//         </p>

//         <div className="results">
//           <h3>Peterborough Class Results</h3>
//           <p>
//             <span className="bold">Elementary & Grade 1 Solo</span>
//             <span>Distinction: Aoife (Winner)</span>
//           </p>

//           <p>
//             <span className="bold">Grade 2/3 Solo</span>
//             <span>Distinction: Agatha (Winner)</span>
//             <span>Commended: Cosima</span>
//           </p>

//           <p>
//             <span className="bold">Grade 4/5 Solo</span>
//             <span>Distinction: Nell (Winner)</span>
//           </p>

//           <p>
//             <span className="bold">Under 15 Solo</span>
//             <span>Outstanding: Lara (Winner)</span>
//             <span>Distinction: Laure & Sophie</span>
//           </p>

//           <p>
//             <span className="bold">Under 18 Solo</span>
//             <span>Oustanding: Lara (Winner), Victoria & Lauren</span>
//           </p>

//           <p>
//             <span className="bold">Senior Duet</span>
//             <span>Oustanding: Victoria & Lara</span>
//           </p>
//         </div>

//         <div class="results">
//           <h3>Oundle Class Results</h3>
//         </div>
//       </Col>
//     </Row>
//   </div>
// );

// const exams = (
//   <div className="container">
//     <Row>
//       <Col lg={12} className="text-center">
//         <h2 className="section-heading">Recent ABRSM exams</h2>
//         <hr className="primary" />

//         <p>I'd like to congratulate all of my pupils who recently achieved outstanding results with the ABRSM exams.</p>

//         <div className="results">
//           <p>
//             <span className="bold">Grade 8</span>
//             <span>Distinction: Lara (145)</span>
//           </p>
//           <p>
//             <span className="bold">Grade 7</span>
//             <span>Distinction: Sophie (140), Charlotte (130)</span>
//           </p>
//           <p>
//             <span className="bold">Grade 5</span>
//             <span>Distinction: Helen (131)</span>
//           </p>
//         </div>
//       </Col>
//     </Row>
//   </div>
// );

const kseymoty = (
  <div className="container">
    <Row>
      <Col lg={12} className="text-center">
        <h2 className="section-heading">
          Congraulations to Lauren & Sophie
        </h2>
        <hr className="primary" />


        <p>Lauren Booth, who will be going into Year 11 in September, has achieved a 49/50 Distinction in her ARSM Diploma exam on the flute. This is the highest mark ever achieved by a King&#39;s Ely student and according to Neil Porter-Thaw, the school’s Director of Music, it is a mark very rarely achieved.</p>
        <p>Sophie Hillier, who is also going into Year 11 next academic year, achieved 47/50 Distinction in her ARSM Diploma exam on the flute – again, an exceptional mark. Both Lauren and Sophie have been playing the flute since taking advantage of taster sessions in Year 2 at King&#39;s Ely Acremont Pre-Prep and Year 3 at King&#39;s Ely Junior. Their flute teacher, Liz Hargest, pictured here with the girls, is understandably proud of their results.</p>
        <img className="news-image" src={laurenAndSophie} alt="Lauren, Sophie and Liz Hargest" />
        <p>Liz said: "I am passionate about the flute and love the beautiful, silvery sound it makes. I have taught Lauren and Sophie from the ages of 6 and 8, respectively, and have inspired them to acquire the same love and passion for flute performance. Together we have nurtured and developed all the musical and technical skills needed to reach this standard of excellence. At the age of 15 in their recent ARSM performance diploma exams these girls have achieved outstanding marks. The girls appreciated Melody Day’s fine accompanying skills. This is a true example of how music making has enriched their lives. I am extremely happy for them and proud of all they have achieved."</p>


      </Col>
    </Row>
  </div>
)

export default function News() {
  return <section id="news">{kseymoty}</section>
}
