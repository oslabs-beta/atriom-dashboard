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
    // const appFlowObj = { id, dependencies, devDependencies, modules };
    const appFlowObj = { id };

    // Add React Flow Properties
    appFlowObj.type = 'AppContainer';
    appFlowObj.position = appLocations[i];
    appFlowObj.data = {
      label: name,
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
    appFlowObj.data.link = `/app/${id}`;
    appFlowObj.link = `/app/${id}`;

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
    colorMap[app.id] = colors[i];
    return colorMap;
  }, {});
