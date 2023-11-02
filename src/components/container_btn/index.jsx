import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './index.scss';

const ContainerBtn = ({ urlVariable, children }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(urlVariable);

  return (
    <button type="button" className="container-btn" onClick={handleClick}>
      {children}
    </button>
  );
};

export default ContainerBtn;

ContainerBtn.propTypes = {
  urlVariable: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
