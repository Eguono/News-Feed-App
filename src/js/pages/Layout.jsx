import React from 'react';
import PropTypes from 'prop-types';

import UserStore from '../stores/UserStore';
import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';
import Sources from './Sources.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Nav info={UserStore.getUsers()} />
        <Sources />
        <Footer />
      </div>
    );
  }
}

