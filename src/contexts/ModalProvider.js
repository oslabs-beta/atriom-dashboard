import React, { useState, useEffect } from 'react';
import ModalContext from './ModalContext';

export default ({ children }) => {
  const [modal, setModal] = useState({});

  const { Provider } = ModalContext;
  return (
    <Provider value={{ modal, setModal }}>
        {children}
    </Provider>
  );
};
