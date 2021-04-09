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
    let result = apps[i].data.dependencies;
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

  // Generate list of overrides by app

  const overrides = {};
  for (let i = 0; i < appList.length; i++) {
    overrides[apps[i].id] = {};
    for (let j = 0; j < apps[i].data.overrides.length; j++) {
      overrides[apps[i].id][apps[i].data.overrides[j].id] =
        apps[i].data.overrides[j].version;
    }
  }

  // Generate list of dependencies by app with version & overrides

  for (let i = 0; i < appList.length; i++) {
    let index = 0;
    for (let j = 0; j < depList.length; j++) {
      if (!apps[i].data.dependencies[index]) depList[j][apps[i].id] = 'N/A';
      else if (
        depList[j].name === apps[i].data.dependencies[index].name &&
        overrides[apps[i].id][depList[j].name]
      ) {
        depList[j][apps[i].id] = (
          <strong>{overrides[apps[i].id][depList[j].name]}</strong>
        );
        index++;
      } else if (
        depList[j].name === apps[i].data.dependencies[index].name &&
        !overrides[apps[i].id][depList[j].name]
      ) {
        depList[j][apps[i].id] = (
          <div className="not_shared">
            {apps[i].data.dependencies[index].version}
            <span className="hovertext">This should be shared.</span>
          </div>
        );
        index++;
      } else {
        depList[j][apps[i].id] = 'N/A';
      }
    }
  }
  return depList;
};
