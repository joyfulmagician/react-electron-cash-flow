import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.global.css';
import { BrowserRouter as Router } from 'react-router-dom';

// import registerServiceWorker from './registerServiceWorker';

import { database, auth } from 'firebase';

ReactDOM.render(
  <Router>
    <App database={database} auth={auth} />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
