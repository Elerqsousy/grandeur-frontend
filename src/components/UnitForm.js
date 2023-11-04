import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUnit } from '../redux/unitFormSlice';
import '../styles/unitForm.scss';

const UnitForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imagesRef = useRef(null);

  const [unitData, setUnitData] = useState({
    name: '',
    price: undefined,
    unit_type: '',
    images: null,
    location: '',
    description: '',
  });

  const handleInputChange = (name, value) => {
    setUnitData({ ...unitData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFiles = e.target.files;
    setUnitData({ ...unitData, images: Array.from(imageFiles) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createUnit(unitData))
      .then((response) => {
        const formDataInResponse = response.formData;
        console.log(formDataInResponse);
        navigate('/');
      })
      .catch((error) => {
        throw new Error('Error adding unit:', error.message);
      });
  };

  return (

  );
};

export default UnitForm;
