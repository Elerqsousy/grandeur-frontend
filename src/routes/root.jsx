import React from 'react';
import {
  Outlet, BrowserRouter as Router, Routes, Route,
} from 'react-router-dom'; // Import the necessary routing components
import Item1Detail from '../components/ItemDetail'; // Import the Item1Detail component

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden
            />
            <div
              className="sr-only"
              aria-live="polite"
            />
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/items">item 1</a>
            </li>
            <li>
              <a href="/contacts/2">item 2</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/items" element={<Item1Detail />} />
      </Routes>
    </Router>
  );
}
