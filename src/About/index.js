import React from 'react';
import { Link } from 'react-scroll';

import './style.less';

const content = (
  <div>
    <p>Liz is a highly experienced and dedicated flute teacher with qualifications in both traditional and Suzuki flute teaching.
    Her pupils range in age from five to adult and in ability from beginners to diploma level.
    Liz teaches at the Kings School Ely, at home, and at Suzuki flute weekend workshops and summer schools.</p>

    <p>Liz teaches braille music and also teaches theory to both sighted and visually impaired pupils.
    Liz is part of the Cambridge Suzuki group working alongside piano, violin and cello teachers, organising book recitals and joint concerts.
    Liz is also a member of the Ely Sinfonia orchestra and performs with them when she is available.</p>

    <p>Recently she has been involved in a film about Louis Braille and Braille music, directed and compiled by Michael House.
    She was filmed teaching and talking about the value of braille music. She was also filmed performing alongside the other musicians involved in the film featuring a piece called Hope, written by a young blind teenager.</p>
    <p>Liz has a strong desire to further her own performance ability in all areas and attends courses nationally and internationally.
    She is an inspiration to all who meet her.</p>
  </div>
);

const oldContent = `
Liz believes that first-hand musical experiences throughout a musician’s lifetime helps them become more accomplished, musical and confident performers.
With this in mind, she continually challenges herself and her students to get more from their flute lesson through events and workshops she helps to organise.
For instance, Liz and a colleague formed a flute group in 2006 called ‘Flute Pie’. The group has since performed at a number of charity concerts and even appeared on the Barbican stage in London.
Liz is supported by friends and experienced musical personalities including British flautist and children’s concert presenter, Atarah Ben Tovim, and founder
member of the Scottish Chamber Orchestra, David Nicholson.`;

export default function About() {
  const justify = { textAlign: 'justify', textShadow: '1px 1px 5px rgba(0,0,0,0.5)' };
  return (
    <section className="bg-primary hex-bg" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <h2 className="section-heading">Who is Liz Hargest?</h2>
            <hr className="light" />
            <p className="text-faded" />
            {content}
            <Link
              to="lessons"
              className="btn btn-default btn-xl page-scroll sr-button"
              spy={true}
              smooth={true}
              offset={-51}
              duration={500}
            >
              Available Lessons
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
