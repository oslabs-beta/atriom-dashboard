import React, { useState, useEffect } from 'react';
import ColorContext from './ColorContext';
import data from '../dummy-data';

const colors = ['red', 'blue', 'pink', 'yellow'];

export default ({ children }) => {
  const [colorObj, setColorObj] = useState({});
  const setColors = () => {
    const newColorObj = {};
    data.forEach((app, i) => {
      newColorObj[app.id] = colors[i];
    });
    setColorObj(newColorObj);
  };
  useEffect(() => {
    setColors();
  }, []);

  const { Provider } = ColorContext;
  return <Provider value={colorObj}>{children}</Provider>;
};
