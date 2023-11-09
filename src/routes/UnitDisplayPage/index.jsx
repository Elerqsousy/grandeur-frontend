import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import api from '../../redux/api';

const UnitDisplayPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { unitId } = useParams();

  const { unitData } = useSelector((state) => state.unit);

  React.useEffect(() => {
    dispatch(api.fetchUnit(unitId));
  }, [dispatch, unitId]);

  const onReserve = () => {
    navigate(`/book-visit/${unitId}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="flex flex-column h-100">
      {unitData && (
      <article className="flex justify-between sm:flex-wrap md:flex-wrap lg:flex-nowrap lg:pt-[15vh] sm:pt-[100px] md:pt-[100px] px-[5vw] lg:overflow-y-hidden md:overflow-y-auto lg:max-h-[85vh]">
        <div className="flex-2 md:max-h-[60vh] md:min-w-[400px] rounded-lg overflow-hidden sm:mx-[3vw]">
          {!!unitData.image_urls?.length && (
            <img className="w-100 h-auto bg-cover" src={unitData?.image_urls[0]} alt="apartment" />
          )}
        </div>
        <div className="flex-1 md:mx-[3vw] min-w-[300px] h-100 flex flex-column">
          <h1 className="mt-[80px]">{unitData.name}</h1>
          <p className="bg-lime-500 w-fit px-3 py-1 rounded-md">{unitData.unit_type}</p>
          <p>{unitData.description}</p>
          <p>
            Location:
            {' '}
            {unitData.location}
          </p>
          <p>
            Available since:
            {' '}
            {moment(unitData.created_at).format('YYYY MMM DD - h:mma')}
          </p>
          <p>
            Asked Price: $
            {unitData.price}
          </p>
          <button type="button" className="mt-5 w-fit px-5 mp-2 bg-lime-500 active:bg-lime-300 text-white rounded-md" onClick={onReserve}>Book a visit</button>
        </div>
      </article>
      )}
      <button type="button" className="bg-lime-500 w-fit h-fit rounded-r-[30px] pl-[30px] pr-4 py-[14px] mt-[8vw]" onClick={handleBack}>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="w-[24px] h-[24px] text-white rotate-180 mt-1"
        />
        {' '}
      </button>
    </section>
  );
};

export default UnitDisplayPage;
