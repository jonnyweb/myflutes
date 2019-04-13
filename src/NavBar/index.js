import React, { Component, PropTypes } from 'react';
import { AutoAffix } from 'react-overlays';
import { Link } from 'react-scroll';

import './style.less';
import { eventList } from '../Events';

export default class NavBar extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor() {
    super();
    this.state = {
      showNavBar: false,
    };
  }

  triggerNav = state => {
    this.setState({
      showNavBar: state ? state : !this.state.showNavBar,
    });
  };

  render() {
    const { children } = this.props;
    const navItems = [];

    React.Children.forEach(children, child => {
      const { href, name } = child.props;

      if (name) {
        if (name === "Events" && eventList.length === 0) return;
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
        );
      }
    });

    const collapse = this.state.showNavBar ? '' : 'collapse';

    return (
      <div>
        <AutoAffix offsetTop={100} affixClassName="affix">
          <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  onClick={this.triggerNav}
                >
                  <span className="sr-only">Toggle navigation</span>
                  Menu
                  <i className="fa fa-bars" />
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">
                  Liz Hargest
                </a>
              </div>

              <div
                className={`${collapse} navbar-collapse`}
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav navbar-right">
                  {navItems}
                </ul>
              </div>
            </div>
          </nav>
        </AutoAffix>

        {this.props.children}
      </div>
    );
  }
}
