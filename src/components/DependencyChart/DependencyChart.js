import React, { useContext } from 'react';
import DependencyTable from './DependencyTable';
import AppsContext from '../../contexts/AppsContext';
import { Link } from 'react-router-dom';
import '../../styles/DependencyChart.scss';

function DependencyChart() {
  const { apps } = useContext(AppsContext);
  const appList = [];
  for (let i = 0; i < apps.length; i++) {
    appList.push({
      Header: <Link to={`/app/${apps[i].id}`}>{apps[i].id}</Link>,
      accessor: `${apps[i].id}`,
    });
  }

  const columns = [
    {
      Header: ' ',
      columns: [
        {
          Header: 'Dependencies',
          accessor: 'name',
        },
      ],
    },
    {
      Header: 'Version by Application',
      columns: appList,
    },
  ];

  const depList = [];
  const deps = [];
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
  if (apps.length && columns.length)
    return (
      <div className="DependencyChart">
        <DependencyTable columns={columns} data={depList} />
      </div>
    );
  else return null;
}

export default DependencyChart;
