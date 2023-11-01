import React from 'react';

import './index.scss';
import UnitsDisplay from './unitsDisplay';

const HomePage = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData([
      {
        id: 1,
        name: 'Appartment1',
        description: 'adfhad',
        image: [],
        price: 500,
        unit_type: 'Apartment',
        location: 'bla bla bla',
        user_id: 1,
        created_at: '2023-10-28T20:29:54.519Z',
        updated_at: '2023-10-28T20:29:54.519Z',
      },
      {
        id: 2,
        name: 'Appartment2',
        description: 'adfhad',
        image: [],
        price: 500,
        unit_type: 'House',
        location: 'bla bla bla',
        user_id: 1,
        created_at: '2023-10-28T20:29:54.539Z',
        updated_at: '2023-10-28T20:29:54.539Z',
      },
      {
        id: 3,
        name: 'Appartment1',
        description: 'adfhad',
        image: [],
        price: 500,
        unit_type: 'Apartment',
        location: 'bla bla bla',
        user_id: 1,
        created_at: '2023-10-28T20:29:54.519Z',
        updated_at: '2023-10-28T20:29:54.519Z',
      },
      {
        id: 4,
        name: 'Appartment2',
        description: 'adfhad',
        image: [],
        price: 500,
        unit_type: 'House',
        location: 'bla bla bla',
        user_id: 1,
        created_at: '2023-10-28T20:29:54.539Z',
        updated_at: '2023-10-28T20:29:54.539Z',
      },
    ]);
  }, []);

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
