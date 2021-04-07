import React from 'react';
import { Link } from 'react-router-dom';

export const createAppList = (apps) => {
  const appList = [];
  for (let i = 0; i < apps.length; i++) {
    appList.push({
      Header: <Link to={`/app/${apps[i].id}`}>{apps[i].id}</Link>,
      accessor: `${apps[i].id}`,
    });
  }
  return appList;
};

export const createDependencyList = (apps, appList) => {
  const depList = [];
  const deps = [];

  // Generate list of unique dependencies across apps

  for (let i = 0; i < apps.length; i++) {
    let result = apps[i].dependencies;
    for (let j = 0; j < result.length; j++) {
      if (!deps.includes(result[j].name)) {
        deps.push(result[j].name);
      }
    }
  }

  for (let i = 0; i < deps.length; i++) {
    depList.push({
      name: deps[i],
    });
  }

  // Generate list of dependencies by app with version

  for (let i = 0; i < appList.length; i++) {
    let index = 0;
    for (let j = 0; j < depList.length; j++) {
      if (!apps[i].dependencies[index]) depList[j][apps[i].id] = 'N/A';
      else if (depList[j].name === apps[i].dependencies[index].name) {
        depList[j][apps[i].id] = apps[i].dependencies[index].version;
        index++;
      } else {
        depList[j][apps[i].id] = 'N/A';
      }
    }
  }
  return depList;
};
