const convertModules = (mods) => {
  return mods.map((mod, i) => {
    const flowObj = { ...mod };

    // Add React Flow Properties
    flowObj.type = 'ModuleNode';
    flowObj.data = { label: mod.name };
    flowObj.position = locations[i];

    flowObj.data.color = colorMap[mod.applicationID];
    console.log(flowObj.data.color);

    return flowObj;
  });
};

export default convertModules;
