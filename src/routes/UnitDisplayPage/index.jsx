import React from 'react';
import { useParams } from 'react-router-dom';

const UnitDisplayPage = () => {
  const { unitId } = useParams();
  const [id] = React.useState(unitId);

  return (
    <div>
      <h1>
        unit id
        {' '}
        {id}
      </h1>
    </div>
  );
};

export default UnitDisplayPage;
