import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router'

import Headline from './pages/Headline';
import Main from './pages/Main.js';

const app = document.getElementById('app');
ReactDom.render(<Router>
  <Route path="/" component={Main} />
  <Route path="/headlines" component={Headline} />
</Router>
  , app);