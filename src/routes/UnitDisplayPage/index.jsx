import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import api from '../../redux/api';

const UnitDisplayPage = () => {
  const dispatch = useDispatch();
  const { unitId } = useParams();

  const { unitData } = useSelector((state) => state.unit);

  React.useEffect(() => {
    dispatch(api.fetchUnit(unitId));
  }, [dispatch, unitId]);

  React.useEffect(() => {
    console.log(unitData);
  }, [unitData]);

  return (
    <div>
      <h1>
        unit id
        {' '}
      </h1>
    </div>
  );
};

export default UnitDisplayPage;
