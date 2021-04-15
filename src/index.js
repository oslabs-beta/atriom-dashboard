import React from 'react';
import ReactDOM from 'react-dom';
import AppsProvider from './contexts/AppsProvider';
import ModalProvider from './contexts/ModalProvider'

import App from './components/App';

ReactDOM.render(
  <AppsProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </AppsProvider>,
  document.getElementById('app')
);
