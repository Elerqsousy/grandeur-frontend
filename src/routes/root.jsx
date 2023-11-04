import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

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
    route: '/add-unit',
  },
  {
    name: 'Remove Unit',
    route: '/remove-unit',
  },
];

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <div>
          <img src={logoGreen} alt="Grandeur logo1" />
        </div>
        <nav>
          <ul>
            {navRoutes.map((item) => (
              <li key={item.route} className="transition-all ease-in-out duration-75">
                <NavLink
                  to={item.route}
                  className={({ isActive }) => isActive && 'active'}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <div id="topbar">
          <img src={logoGreen} alt="Grandeur logo1" />
        </div>
        <Outlet />
      </div>
    </>
  );
}
