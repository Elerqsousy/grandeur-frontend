import axios from 'axios';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  const getData = () => {
    axios.get('http://127.0.0.1:3000/units/1')
      .then((response) => {
        console.log(response.data.content);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <h1>Navbar goes here</h1>
        <Outlet />
      </div>
    </>
  );
}
