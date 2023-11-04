import PropTypes from 'prop-types';
import Moment from 'moment';
import classNames from 'classnames';

import ContainerBtn from './container_btn';

const UnitItem = ({
  item, img, reservation, pastReservation,
}) => {
  const {
    name, description, price, location,
  } = item;

  return (
    <ContainerBtn urlVariable={`/units/${item.id}`} className="!max-w-fit">
      <article className="unit-display-container">
        <div className="image-container">
          <p className="price-fixed shadow-lg">
            {item.unit_type}
            {' '}
            $
            {price}
          </p>
          <img src={img} alt="unit show" className={pastReservation && 'blur-sm'} />
        </div>
        <h2 className="sec-title title-container">{name}</h2>
        <span className="breaker mb-3">................</span>
        <p className="details">{description}</p>
        <p className="location">
          <span>Location: </span>
          {location}
        </p>
        { !!reservation
        && (
        <p className={classNames({ 'text-warning': pastReservation }, 'location')}>
          <span>Reservation Date: </span>
          {Moment(reservation.date).format('D MMM, hh:mm a')}
        </p>
        )}
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
    price: PropTypes.number,
    unit_type: PropTypes.string,
    location: PropTypes.string,
    user_id: PropTypes.number,
    created_at: PropTypes.instanceOf(Date),
    updated_at: PropTypes.instanceOf(Date),
  }).isRequired,
  img: PropTypes.node.isRequired,
  reservation: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
  }),
  pastReservation: PropTypes.bool,
};

UnitItem.defaultProps = {
  reservation: null,
  pastReservation: false,
};
