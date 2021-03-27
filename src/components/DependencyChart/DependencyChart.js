import React, { useMemo, useState, useEffect } from 'react';
import Table from './Table';
import data from '../../dummy-data';

function DependencyChart () {

  let depList = [];
  for (let i = 0; i < data.length; i++) {
    const deps = data[i].dependencies;
    if (depList = []) {
      depList.push({
        name: data
      })
    }
  }
  console.log('DepList: ', depList);

  const appList = [];
  for (let i = 0; i < data.length; i++) {
    appList.push({
        Header: data[i].id,
        accessor: `${data[i].id}`
    })
  }


  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Dependencies",
            accessor: "dependency.name"
          }
        ]
      },
      {
        Header: "Version by Application",
        columns: appList
      }
    ],
    []
  );

  return (
    <div className="DependencyChart">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default DependencyChart;