import React, { useState, useEffect } from 'react';
import AppsContext from './AppsContext';
import appData from './ATRIOM';
import colors from '../helpers/colors';
import { createColorMap, convertAppObj } from '../helpers';
import { ModalContext } from './ModalContext'

export default ({ children }) => {
  const [apps, setApps] = useState([]);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const colorMap = createColorMap(appData, colors);
    const convertedApps = convertAppObj(appData, colorMap);
    setApps(convertedApps);
  }, []);

  const { Provider } = AppsContext;
  return (
    <Provider value={{ apps, setApps }}>
      {/* <ModalContext.Provider value={{ open, setOpen }}> */}
        {children}
      {/* </ModalContext.Provider> */}
    </Provider>
  );
};
