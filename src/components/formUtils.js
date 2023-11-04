const createUnitFormData = (unitData, userId) => {
  const formData = new FormData();
  formData.append('unit[name]', unitData.name);
  formData.append('unit[price]', unitData.price);
  formData.append('unit[unit_type]', unitData.unit_type);
  formData.append('unit[location]', unitData.location);
  formData.append('unit[description]', unitData.description);
  if (unitData.images) {
    for (let i = 0; i < unitData.images.length; i += 1) {
      formData.append('unit[images][]', unitData.images[i]);
    }
  }

  if (userId) {
    formData.append('unit[user_id]', userId);
  } else {
    throw new Error('User is not logged in');
  }

  return formData;
};

export default createUnitFormData;
