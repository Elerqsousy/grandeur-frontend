import React from 'react';
import {
  Outlet, NavLink, Link, useParams,
} from 'react-router-dom';
import classNames from 'classnames';

import TopBar from '../components/topbar';
import logoGreen from '../assets/logo-green.png';

const navRoutes = [
  {
    name: 'All Units',
    route: '/',
  },
  {
    name: 'My Visits',
    route: '/reservations',
  },
  {
    name: 'Book a Visit',
    route: '/book-visit',
  },
  {
    name: 'Add Unit',
    route: '/unit-form',
  },
  {
    name: 'Remove Unit',
    route: '/remove-unit',
  },
];

const Root = () => {
  const params = useParams();

  const unitDisplay = (route) => {
    if (route !== '/' || !params.unitId) return false;
    return true;
  };

  return (
    <>
      <div id="sidebar">
        <div>
          <Link to="/" className="logo">
            <img src={logoGreen} alt="Grandeur logo" />
          </Link>
        </div>
        <nav>
          <ul>
            {navRoutes.map((item) => (
              <li key={item.route} className="transition-all ease-in-out duration-75">
                <NavLink
                  to={item.route}
                  className={classNames(({ isActive }) => isActive && 'active', { 'semi-active': unitDisplay(item.route) })}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <TopBar navRoutes={navRoutes} unitDisplay={unitDisplay} />
        <Outlet />
      </div>
    </>
  );
};

export default Root;
