import PropTypes from 'prop-types';
import React from 'react';

import './index.scss';
import UnitItem from '../../components/unitItem';

const UnitsDisplay = ({ list }) => {
  const [start, setStart] = React.useState(0);
  const [count, setCount] = React.useState(2);
  const [displayedList, setDisplayedList] = React.useState(list.slice(start, start + count));
  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setCount(3);
    } else if (window.innerWidth >= 992) {
      setCount(2);
    } else if (window.innerWidth <= 768) {
      setCount(1);
    }
  };

  const onPrevious = () => {
    const newStart = start - count > 0 ? start - count : 0;
    setStart(newStart);
  };

  const onNext = () => {
    const newStart = start + (2 * count) <= list.length ? start + count : list.length - count;
    setStart(newStart);
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    setDisplayedList(list.slice(start, start + count));
  }, [start, count, list]);

  return (
    <div className="display-section-container">
      <button type="button" className="btn btn-primary" disabled={start === 0} onClick={onPrevious}>
        &#x2190;
      </button>
      <section className="items-container">
        {displayedList.map((item) => <UnitItem key={item.id} item={item} />)}
      </section>
      <button type="button" className="btn btn-primary" disabled={start + count >= list.length} onClick={onNext}>
        &#x2192;
      </button>
    </div>
  );
};

export default UnitsDisplay;

UnitsDisplay.propTypes = {
  list: PropTypes.shape([{}]).isRequired,
};
