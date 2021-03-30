import React, { useState, useEffect } from 'react';
import AppsContext from './AppsContext';
import appData from '../dummy-data';
import colors from '../helpers/colors';
import { createColorMap, convertAppObj } from '../helpers';

export default ({ children }) => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const colorMap = createColorMap(appData, colors);
    const convertedApps = convertAppObj(appData, colorMap);
    setApps(convertedApps);
  }, []);

  const { Provider } = AppsContext;
  return <Provider value={{ apps, setApps }}>{children}</Provider>;
};
