import React from 'react';
import ReactDOM from 'react-dom';
import AppsProvider from './contexts/AppsProvider';

import App from './components/App';

ReactDOM.render(
  <AppsProvider>
    <App />
  </AppsProvider>,
  document.getElementById('app')
);
