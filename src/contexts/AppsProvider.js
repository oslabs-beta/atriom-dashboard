import React, { useState, useEffect } from 'react';
import AppsContext from './AppsContext';
import appData from './ATRIOM';
import colors from '../helpers/colors';
import { createColorMap, convertAppObj } from '../helpers';

export default ({ children }) => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    console.log(appData);
    // const contents = JSON.parse(appData);
    // // const contents = eval(e.target.result);
    const colorMap = createColorMap(appData, colors);
    const convertedApps = convertAppObj(appData, colorMap);
    setApps(convertedApps);
  }, []);

  const { Provider } = AppsContext;
  return <Provider value={{ apps, setApps }}>{children}</Provider>;
};
