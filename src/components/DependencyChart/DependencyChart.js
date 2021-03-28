import React, { useMemo, useState, useEffect, useContext, useCallback } from 'react';
import DependencyTable from './DependencyTable';
import AppsContext from '../../contexts/AppsContext';
import './DependencyChart.scss';

function DependencyChart () {

const data = useContext(AppsContext);


  const appList = [];
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].id);
    appList.push({
        Header: data[i].id,
        accessor: `${data[i].id}`
    })
  }

  const columns = [
    {
      Header: " ",
      columns: [
        {
          Header: "Dependencies",
          accessor: "name"
        }
      ]
    },
    {
      Header: "Version by Application",
      columns: appList
    }
  ];

  const depList = [];
  const deps = [];
  for (let i = 0; i < data.length; i++) {
    let result = data[i].dependencies;
    for (let j = 0; j < result.length; j++) {
      if (!deps.includes(result[j].name)) {
      deps.push(result[j].name)
    }
  }
}

for (let i = 0; i < deps.length; i++) {
  depList.push({
    name: deps[i],
  });
}

  for (let i = 0; i < appList.length; i++) {
    let index = 0;
    for (let j = 0; j < depList.length; j++) {
      if (!data[i].dependencies[index]) depList[j][data[i].id] = "N/A";
      else if (depList[j].name === data[i].dependencies[index].name) {
        depList[j][data[i].id] = data[i].dependencies[index].version;
        index++
      } else {
        depList[j][data[i].id] = "N/A";
      }
    }
  }


  if (data.length && columns.length) 
  return (
    <div className="DependencyChart">
      <DependencyTable columns={columns} data={depList} />
    </div>
  );
  else return null;
}

export default DependencyChart;

[
  {
    dependency: 'test',

  }
]