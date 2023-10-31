import axios from 'axios';
import React from 'react';

export default function Root() {
  const getData = () => {
    axios.get('http://127.0.0.1:3000/units/1')
      .then((response) => {
        console.log(response.data.content);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);
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
              <a href="/contacts/1">item 1</a>
            </li>
            <li>
              <a href="/contacts/2">item 2</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}