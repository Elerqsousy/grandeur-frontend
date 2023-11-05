import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import logoHouseGreen from '../../assets/logo-house-green.png';
import './index.scss';

const TopBar = ({ navRoutes }) => {
  const [checked, setChecked] = React.useState(false);

  const onClick = () => {
    setChecked(!checked);
  };

  return (
    <div id="topbar">
      <label htmlFor="menu" className="icon" aria-label="Menu Toggle">
        <input type="checkbox" id="menu" checked={checked} onClick={onClick} />
        <div className="menu" />
      </label>
      <nav className={classNames({ expanded: checked })}>
        <ul>
          {navRoutes.map((item) => (
            <li key={item.route} className="transition-all ease-in-out duration-75">
              <NavLink
                onClick={onClick}
                to={item.route}
                className={({ isActive }) => isActive && 'active'}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Link to="/" className="logo">
        <img src={logoHouseGreen} alt="Grandeur logo" />
      </Link>
    </div>
  );
};

export default TopBar;

TopBar.propTypes = {
  navRoutes: PropTypes.shape([{
    route: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }]).isRequired,
};
