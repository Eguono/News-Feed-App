import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';

const Nav = (props) => {
  const img = props.info.imageURL;
  const name = props.info.name;
  return (
    <div>
      <nav>
        <div className="nav-wrapper teal lighten-1">
          <div data-activates="mobile-demo" className="button-collapse">
            <i className="material-icons">menu</i>
          </div>
          <ul className="right hide-on-med-and-down">
            <li><IndexLink to="news">Dashboard</IndexLink></li>
            <li>
              <Link to="/">
                <img className="pic" src={img} alt="profile pic" />
              </Link>
            </li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><IndexLink><p>Welcome {name}</p></IndexLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

Nav.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Nav;
