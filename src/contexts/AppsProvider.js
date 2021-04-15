import React, { useState, useEffect } from 'react';
import AppsContext from './AppsContext';
import appData from './ATRIOM';
import colors from '../helpers/colors';
import { createColorMap, convertAppObj, locationsMap } from '../helpers';
import { ModalContext } from './ModalContext'

export default ({ children }) => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // const colorMap = createColorMap(appData, colors);
    // const nodeColors = convertAppObj(appData, colorMap);
    // const convertedApps = locationsMap(nodeColors);
    // setApps(convertedApps);
    const apps = localStorage.getItem('apps');
    if (apps) {
      setApps(JSON.parse(apps));
      setLoading(false);
    } else {
      localStorage.clear();
      setLoading(false);
    }
  }, []);

  const { Provider } = AppsContext;
  
  return <Provider value={{ apps, setApps, loading }}>{children}</Provider>;
};
