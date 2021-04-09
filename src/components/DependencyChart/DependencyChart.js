import React, { useContext } from 'react';
import DependencyTable from './DependencyTable';
import AppsContext from '../../contexts/AppsContext';
import { createAppList, createDependencyList } from '../../helpers/chartdata';
import '../../styles/DependencyChart.scss';

function DependencyChart() {
  const { apps } = useContext(AppsContext);

  const appList = createAppList(apps);
  const depList = createDependencyList(apps, appList);

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

  if (apps.length && columns.length)
    return (
      <div className="DependencyChart">
        <DependencyTable columns={columns} data={depList} />
      </div>
    );
  else return null;
}

export default DependencyChart;
