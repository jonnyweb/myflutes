import React from "react"
import { Link } from "react-scroll"

import "./style.scss"

const Header = () => (
  <header>
    <div className="header-content">
      <div className="header-content-inner">
        <h1 id="homeHeading">Welcome to Myflutes</h1>
        <hr />
        <p>
          Liz Hargest offers flute tuition to children and adults in the
          Cambridge area – teaching beginners to Diploma level flute. Flute
          lessons are generally conducted at Liz’s home in Ely.
        </p>
        <Link
          to="about"
          className="btn btn-primary btn-xl page-scroll"
          spy={true}
          smooth={true}
          offset={-51}
          duration={500}
        >
          Find Out More
        </Link>
      </div>
    </div>
  </header>
)

export default Header
