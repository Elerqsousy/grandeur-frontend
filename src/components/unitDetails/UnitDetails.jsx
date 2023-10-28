import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
import { FaCaretLeft } from 'react-icons/fa6';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import NavBar from '../navbar/Navbar';

const UnitDetails = () => {
  const API_BASE_URL = '../public/FakeData.json';
  console.log(API_BASE_URL);
  const { id } = useParams();
  // const navigate = useNavigate();
  const [unit, setUnit] = useState(null);
  const [nextUnitId, setNextUnitId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // axios.get(`${API_BASE_URL}/units/${id}`)
    fetch(API_BASE_URL)
      .then((unitResponse) => {
        setUnit(unitResponse);
        const units = unitResponse.json();
        console.log(units);
        setNextUnitId(units);
        setLoading(false);
      })
      .catch((error) => {
        setError(`Failed to fetch unit details.${error}`);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return (
      <div style={{ width: 200, height: 200 }}>
        loading...
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  const handleNextUnit = () => {
    const currentUnitIndex = nextUnitId.findIndex((d) => d.id === parseInt(id, 10));
    if (currentUnitIndex !== -1 && currentUnitIndex < nextUnitId.length - 1) {
      const nextUnit = nextUnitId[currentUnitIndex + 1];
      // navigate(`/unit_details/${nextUnit.id}`);
      console.log(nextUnit);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-12 mx-0 px-0">
          {/* <NavBar /> */}
        </div>
        <div className="col-lg-6 col-md-6 col-12 d-flex flex-column mx-0 px-0 text-center doctor_details_bg">
          <div>
            <img src={unit.image} alt={unit.name} className="img-fluid rounded-circle" />
            <h2>{unit.name}</h2>
            <p>{unit.description}</p>
          </div>
          <button type="button" onClick={handleNextUnit} className="nextBtn rounded-end-pill">
            <FaCaretLeft />
          </button>
        </div>

        <div className="col-lg-4 col-md-4 col-12">
          <h4>unit Details</h4>
          <table className="table">
            <tbody>
              <tr>
                <td>Price:</td>
                <td>{unit.price}</td>
              </tr>
              <tr>
                <td>Unit Type</td>
                <td>{unit.type}</td>
              </tr>
              <tr>
                <td>Unit Location</td>
                <td>{unit.location}</td>
              </tr>
              <tr>
                <td>Rating:</td>
                <td>
                  <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbarWithChildren value={5 * 100}>
                      <div style={{ fontSize: 20, fontWeight: 'bold' }}>{5}</div>
                    </CircularProgressbarWithChildren>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="button" className=" rounded-end-pill rounded-start-pill">
            <Link to="/reservation">Make a Reservation</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnitDetails;
