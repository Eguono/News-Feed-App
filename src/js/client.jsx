import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './pages/Layout.jsx';

const app = document.getElementById('app');
ReactDom.render(<Layout />, app);
