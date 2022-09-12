import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  return (
    <main data-testid='list-page'>
      <h1>404</h1>
      <p>
        <strong>Oops!</strong> a wild Snorlax has blocked your path!
      </p>
      <Link to='/'>Go home</Link>
    </main>
  );
};

export default List;
