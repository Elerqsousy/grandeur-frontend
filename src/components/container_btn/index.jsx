import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './index.scss';
import classNames from 'classnames';

const ContainerBtn = (
  {
    urlVariable, children, onClick, className,
  },
) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(urlVariable);

  return (
    <button type="button" className={classNames('container-btn', className)} onClick={urlVariable ? handleClick : onClick}>
      {children}
    </button>
  );
};

export default ContainerBtn;

ContainerBtn.propTypes = {
  urlVariable: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ContainerBtn.defaultProps = {
  urlVariable: null,
  onClick: () => {},
  className: '',
};
