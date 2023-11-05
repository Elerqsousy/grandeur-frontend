/* eslint-disable */
import React from 'react';
import {
  Link, NavLink,
  Outlet,
} from 'react-router-dom';
import TopBar from './TopBar';

export default function Root() {
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
        <TopBar navRoutes={navRoutes} />
        <Outlet />
      </div>
    </>
  );
}
