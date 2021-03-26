import React from 'react';
import ReactDOM from 'react-dom';
import ColorProvider from './contexts/ColorProvider';

import App from './components/App';

ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('app')
);
