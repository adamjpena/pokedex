import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Pagination.module.scss';

const Pagination = ({
  currentPage,
  pageTotal,
  previous,
  next,
  relativePath = '',
}: {
  currentPage: number;
  pageTotal: number;
  previous?: string;
  next?: string;
  relativePath?: string;
}) => {
  const pageStart = currentPage < 7 ? 1 : currentPage - 5;
  const pageEnd = Math.min(currentPage < 7 ? 10 : currentPage + 4, pageTotal);
  let pageLinks = [];
  for (let i = pageStart; i < pageEnd + 1; i++) {
    pageLinks.push({
      isCurrent: i === currentPage,
      page: i,
      to: `${relativePath}${i}`,
    });
  }
  return (
    <ul className={styles.paginationUl} data-testid='pagination'>
      {currentPage > 1 && (
        <li className={styles.paginationLi} data-testid='previous-link'>
          <Link to={`${relativePath}${currentPage - 1}`}>Previous</Link>
        </li>
      )}
      {pageLinks.map(({ isCurrent, page, to }) => (
        <li className={styles.paginationLi} key={to}>
          {isCurrent ? (
            <span data-testid='current-page'>{page}</span>
          ) : (
            <Link to={to}>{page}</Link>
          )}
        </li>
      ))}
      {currentPage < pageTotal && (
        <li className={styles.paginationLi} data-testid='next-link'>
          <Link to={`${relativePath}${currentPage + 1}`}>Next</Link>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
