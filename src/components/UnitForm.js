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

    dispatch(createUnit(unitData, navigate('/')))
      .catch((error) => {
        throw new Error('Error adding unit:', error.message);
      });
  };

  return (
    <div className="unit-form-container">
      <form
        className="awesome-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h2 className="unit-form-header">Add a New Unit</h2>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter unit name"
            name="name"
            id="name"
            value={unitData.name}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div>
          <div>
            <input
              type="number"
              className="form-control"
              placeholder="Enter unit price"
              name="price"
              id="price"
              value={unitData.price}
              onChange={(e) => {
                const { name, value } = e.target;
                return handleInputChange(
                  name,
                  Number(value) === 0 ? undefined : Number(value),
                );
              }}
              required
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            name="unit_type"
            placeholder="Enter unit type (e.g. 'apartment')"
            id="unit_type"
            value={unitData.unit_type}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="file"
            className="form-control"
            placeholder="Upload unit image"
            name="unit[images][]"
            multiple
            accept="image/*"
            id="image"
            onChange={handleImageChange}
            ref={imagesRef}
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            name="location"
            placeholder="Enter unit location (e.g. 'Accra, Cairo')"
            id="location"
            value={unitData.location}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            name="description"
            className="form-control"
            placeholder="Enter unit description (e.g. 'This is a beautiful apartment')"
            id="description"
            value={unitData.description}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            required
          />
        </div>
        <div>
          <button className="btn" type="submit">
            Add Unit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UnitForm;
