import PropTypes from 'prop-types';

const UnitItem = ({ item }) => {
  const { name } = item;

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default UnitItem;

UnitItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape([]),
    price: PropTypes.number,
    unit_type: PropTypes.string,
    location: PropTypes.string,
    user_id: PropTypes.number,
    created_at: PropTypes.instanceOf(Date),
    updated_at: PropTypes.instanceOf(Date),
  }).isRequired,
};
