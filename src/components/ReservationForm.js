import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../redux/api';

import '../styles/reservationForm.scss';

const ReservationForm = () => {
  const navigate = useNavigate();
  const userObject = sessionStorage.getItem('logged_user');
  const jsonObject = JSON.parse(userObject);
  const dispatch = useDispatch();
  const [unitId, setUnitId] = useState('');
  const [location, setLocation] = useState('');
  const [reserveDate, setReserveDate] = useState('');

  const { list } = useSelector((state) => state.units);

  useEffect(() => {
    dispatch(api.fetchUnits());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      api.postReservation({
        unit_id: unitId,
        user_id: jsonObject.id,
        location,
        date: reserveDate,
      }),
    );
    setUnitId('');
    setLocation('');
    setReserveDate('');

    navigate('/reservations');
  };

  const handleUnitChange = (e) => {
    const selectedUnitId = e.target.value;
    setUnitId(selectedUnitId);

    const selectedUnit = list.find((unit) => unit.id === selectedUnitId);
    if (selectedUnit) {
      setLocation(selectedUnit.location);
    } else {
      setLocation('');
    }
  };

  return (
    <div className="reservation-form-container">
      <form onSubmit={handleSubmit} className="reservation-form">
        <h2 className="reservation-form-header">Reserve a Unit.</h2>
        <p className="reservation-form-description">
          Grandeur is the future of apartment scheduling, booking, and
          reservation. Join our community of satisfied users and experience a
          hassle-free way to find and secure your ideal apartment unit. Say
          hello to a new era of apartment living with Grandeur. Make a
          reservation now.
        </p>
        <div className="formHandler">
          <section className="form-section">
            <div>
              <input
                style={{ padding: '0.5rem 0rem' }}
                className="input-holder"
                type="text"
                id="user_id"
                placeholder="User Id"
                disabled
                required
                value={jsonObject.name}
              />
            </div>
            <div>
              <input
                style={{ padding: '0.5rem 0rem' }}
                type="text"
                className="input-holder"
                id="location"
                placeholder="location"
                autoComplete="off"
                required
                value={location}
                disabled
              />
            </div>
            <div className="custom-select">
              <select
                className="unit-select"
                name="unit"
                id="unit_id"
                value={unitId}
                onChange={handleUnitChange}
              >
                <option value="" disabled>
                  Select a Unit...
                </option>
                {list ? (
                  list.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No Units Available
                  </option>
                )}
              </select>
            </div>
            <div>
              <input
                style={{ padding: '0.6rem 1rem' }}
                type="date"
                className="input-holder"
                id="reserveDate"
                required
                value={reserveDate}
                onChange={(e) => setReserveDate(e.target.value)}
              />
            </div>
            <button className="unit-btn" type="submit">
              Reserve Unit
            </button>
          </section>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
