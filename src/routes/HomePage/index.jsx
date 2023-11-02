import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import api from '../../redux/api';

import UnitsDisplay from './unitsDisplay';
import './index.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.units.list);

  React.useEffect(() => {
    dispatch(api.fetchUnits());
  }, [dispatch]);

  return (
    <div className="main-page-container">
      <h1 className="main-title">Latest Units</h1>
      <span className="main-subtitle sec-color">Browse available units</span>
      <span className="breaker mb-5">...................</span>
      {!!data.length && <UnitsDisplay list={data} />}
    </div>
  );
};

export default HomePage;
