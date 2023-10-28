import React, { useEffect, useState } from 'react';
import { FaCaretLeft } from 'react-icons/fa6';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import img from './1.png';

const UnitDetails = () => {
  const API_BASE_URL = 'http://localhost:3000/units';
  const [unit, setUnit] = useState(null);
  // const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      axios.get(url).then((response) => {
        setUnit(response);
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(unit);
  useEffect(() => {
    // fetchData(`${API_BASE_URL}/${id}`);
    fetchData(`${API_BASE_URL}/1`);
  }, []);
  // if (error) {
  //   return (
  //     <div>
  //       Error:
  //       {error}
  //     </div>
  //   );
  // }

  // const handleNextUnit = () => {
  //   const currentUnitIndex = nextUnitId.findIndex(
  //     (d) => d.id === parseInt(id, 10)
  //   );
  //   if (currentUnitIndex !== -1 && currentUnitIndex < nextUnitId.length - 1) {
  //     const nextUnit = nextUnitId[currentUnitIndex + 1];
  //     // navigate(`/unit_details/${nextUnit.id}`);
  //     console.log(nextUnit);
  //   }
  // };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-12 mx-0 px-0">
          {/* <NavBar /> */}
        </div>
        <div className="col-lg-6 col-md-6 col-12 d-flex flex-column mx-0 px-0 text-center doctor_details_bg">
          <div>
            <img src={img} alt=" name" className="img-fluid rounded-circle" />
            <h2> Unit Description</h2>
            {/* <p>{unit.name}</p> */}
          </div>
          <button
            type="button"
            // onClick={handleNextUnit}
            className="nextBtn rounded-end-pill"
          >
            <FaCaretLeft />
          </button>
        </div>

        <div className="col-lg-4 col-md-4 col-12">
          <h4>unit Details</h4>
          <table className="table">
            <tbody>
              <tr>
                <td>Price:</td>
                {/* <td>{unit.price}</td> */}
              </tr>
              <tr>
                <td>Unit Type</td>
                {/* <td>{unit.unit_type}</td> */}
              </tr>
              <tr>
                <td>Unit Location</td>
                {/* <td>{unit.location}</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UnitDetails;
