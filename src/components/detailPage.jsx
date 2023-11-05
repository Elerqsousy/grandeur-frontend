import React from 'react';
import PropTypes from 'prop-types';

const DetailPage = ({ image, price, description }) => (
  <div>
    <img src={image} alt="Detail" />
    <p>
      Price:
      {price}
    </p>
    <p>
      Description:
      {description}
    </p>
  </div>
);

DetailPage.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired, // Change the type to match your data
  description: PropTypes.string.isRequired,
};

export default DetailPage;
