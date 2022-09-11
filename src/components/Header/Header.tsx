import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header data-testid='header'>
      <nav>
        <ul className={styles.headerUl}>
          <li className={styles.headerLi}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.headerLi}>
            <Link to='/create'>Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
