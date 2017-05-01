import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './pages/Layout.jsx';
import Main from './pages/Main.jsx';
import Sources from './pages/Sources.jsx';

const app = document.getElementById('app');
ReactDom.render(<Layout />, app);
