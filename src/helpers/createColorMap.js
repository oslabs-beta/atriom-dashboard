// Returns an object. Keys are application ids and values are color strings

const createColorMap = (apps, colors) => {
  return apps.reduce((colorMap, app, i) => {
    colorMap[app.id] = colors[i];
    return colorMap;
  }, {});
};

export default createColorMap;
