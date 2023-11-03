import React from 'react';
import PropTypes from 'prop-types';

const DetailPage = ({ image }) => (
  <div>
    <img src={image} alt="Detail" />
    {/* Other component content */}
  </div>
);

DetailPage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default DetailPage;
