import React from 'react';
import { withRouter } from 'react-router-dom';

function MainContainer({ apps, history }) {
  if (apps) history.push('/home');
  else history.push('/drop');
  return null;
}

export default withRouter(MainContainer);
