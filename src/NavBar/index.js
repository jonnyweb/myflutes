import React, { PureComponent } from "react"

import { Link } from "react-scroll"
import { eventList } from "../Events"

import "./style.scss"

const debounce = fn => {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame)
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call our function and pass any params we received
      fn(...params)
    })
  }
}

export default class NavBar extends PureComponent {
  constructor() {
    super()

    this.state = {
      showNavBar: false,
      affix: false,
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", debounce(this.storeScroll), {
      passive: true,
    })
  }

  storeScroll = () => {
    this.setState({ affix: window.scrollY > 10 })
  }

  triggerNav = () => {
    this.setState({
      showNavBar: !this.state.showNavBar,
    })
  }

  render() {
    const { children } = this.props
    const navItems = []

    React.Children.forEach(children, child => {
      const { href, name } = child.props

      if (name) {
        if (name === "Events" && eventList.length === 0) return
        navItems.push(
          <li key={name}>
            <Link
              to={href}
              spy={true}
              smooth={true}
              duration={500}
              offset={-51}
              onClick={this.triggerNav.bind(this, false)}
            >
              {name}
            </Link>
          </li>
        )
      }
    })

    const collapse = this.state.showNavBar ? "" : "collapse"

    return (
      <>
        <nav
          id="mainNav"
          className={`${
            this.state.affix ? "affix" : ""
          } navbar navbar-expand-lg navbar-toggler navbar-default`}
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand page-scroll" href="#page-top">
                Liz Hargest
              </a>

              <button
                className={`navbar-toggler ${collapse ? "collapsed" : ""}`}
                type="button"
                data-toggle="collapse"
                aria-expanded={this.state.showNavBar}
                aria-label="Toggle navigation"
                onClick={this.triggerNav}
              >
                Menu
                <i className="navbar-toggler-icon fa fa-bars" />
              </button>
            </div>
          </div>
          <div
            className={`${collapse} navbar-collapse`}
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">{navItems}</ul>
          </div>
        </nav>

        {this.props.children}
      </>
    )
  }
}
