import locations, { appLocations } from './locations';

export const convertAppObj = (apps, colorMap) =>
  apps.map((app, i) => {
    const {
      dependencies,
      devDependencies,
      id,
      name,
      consumes,
      modules,
      overrides,
    } = app;
    let altName;
    if (!name || !id) altName = `app-${i}`;
    const appFlowObj = { id: id || altName };

    // Add React Flow Properties
    appFlowObj.type = 'AppContainer';
    // appFlowObj.position = appLocations[i];
    appFlowObj.data = {
      label: name || altName,
      dependencies,
      devDependencies,
      overrides,
      id,
      name,
      modules,
      consumes,
      overrides,
    };
    appFlowObj.data.consumesNodes = convertConsumedModules(consumes, colorMap);

    appFlowObj.data.color = colorMap[app.id];
    appFlowObj.data.link = `/app/${id || altName}`;

    return appFlowObj;
  });

export const convertConsumedModules = (mods, colorMap) =>
  mods.map((mod, i) => {
    const { applicationID, consumingApplicationID, name, usedIn } = mod;
    const flowObj = { ...mod };

    // Add React Flow Properties
    flowObj.type = 'ModuleNode';
    flowObj.data = {
      label: mod.name,
      applicationID,
      consumingApplicationID,
      name,
      usedIn,
    };
    flowObj.position = locations[i];

    // Add id property for consumes
    if (!flowObj.id)
      flowObj.id = flowObj.consumingApplicationID + ':' + flowObj.name;

    flowObj.data.color = colorMap[mod.applicationID];

    return flowObj;
  });

// Returns an object. Keys are application ids and values are color strings
export const createColorMap = (apps, colors) =>
  apps.reduce((colorMap, app, i) => {
    let color = i === 0 ? 0 : i % 8;
    colorMap[app.id] = colors[color];
    return colorMap;
  }, {});

// Returns file if valid, or false if invalid
export const validateFileType = (e, files) => {
  const file = files[0];
  const fileType =
    file.name.substring(file.name.lastIndexOf('.') + 1, file.name.length) ||
    file.name;

  if (fileType === 'dat') return file;
  else return false;
};

// Add container positions. If there are more than 8 apps, app locations are dynamically generated.
export const locationsMap = (apps) => {
  if (apps.length <= 8) {
    return apps.map((app, i) => {
      app.position = appLocations[i];
      return app;
    });
  } else {
    let columns = 0;
    let x = -350;
    let y = -200;
    return apps.map((app, i) => {
      if (i % 5 === 0) {
        y += 430;
        x = 100;
      } else {
        x += 400;
      }

      app.position = { x, y };
      return app;
    });
  }
};
