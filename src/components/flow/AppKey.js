import React, { useContext } from 'react';
import AppsContext from '../../contexts/AppsContext';

export default function AppKey() {
  const {apps} = useContext(AppsContext);

  const renderKey = () =>
    apps.map((app, i) => (
      <div key={`appKey ${i}`} className="AppKey-key">
        <div
          className="AppKey-color"
          style={{ backgroundColor: app.data.color }}
        ></div>
        <p>{app.id}</p>
      </div>
    ));

  return <div className="AppKey">{renderKey()}</div>;
}
