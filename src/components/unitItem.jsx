import PropTypes from 'prop-types';
import ContainerBtn from './container_btn';

const UnitItem = ({ item, img }) => {
  const {
    name, description, price, location,
  } = item;

  return (
    <ContainerBtn urlVariable={`/units/${item.id}`}>
      <article className="unit-display-container">
        <div className="image-container">
          <p className="price-fixed shadow-lg">
            {item.unit_type}
            {' '}
            $
            {price}
          </p>
          <img src={img} alt="unit show" />
        </div>
        <h2 className="sec-title title-container">{name}</h2>
        <span className="breaker mb-3">................</span>
        <p className="details">{description}</p>
        <p className="location">
          <span>Location: </span>
          {location}
        </p>
      </article>
    </ContainerBtn>
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
  img: PropTypes.node.isRequired,
};
