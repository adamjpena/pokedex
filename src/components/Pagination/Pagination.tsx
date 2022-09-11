import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Pagination.module.scss';

const Pagination = ({
  previous,
  next,
}: {
  previous?: string;
  next?: string;
}) => {
  return (
    <ul className={styles.paginationUl}>
      {previous && (
        <li className={styles.paginationLi}>
          <Link to={previous}>Previous</Link>
        </li>
      )}
      {next && (
        <li className={styles.paginationLi}>
          <Link to={next}>Next</Link>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
