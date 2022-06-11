import Link from 'next/link';
import React from "react";

import styles from './Header.module.scss';

const Header = ({toggle}: any) => {
  return (
    <header
      aria-label="page header"
      className={styles.siteHeader}
      role="banner"
    >
      <div className={styles.contentWrapper}>
        <nav
          aria-label="site navigation"
          className={styles.nav}
          role="navigation"
        >
          <Link href={`/blog`}>
            <a
              aria-label="articles"
              className={styles.navLink}
              title="articles"
            >
              articles
            </a>
          </Link>
          <Link href={`/#contact`}>
            <a aria-label="contact"
               className={styles.navLink}>
              contact
            </a>
          </Link>
          <Link href={`/portfolio/portfolio`}>
            <a aria-label="portfolio"
               className={styles.navLink}>
              portfolio
            </a>
          </Link>
          <button
            className={styles.themeButton}
            onClick={toggle}
          >
            Toggle Theme
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;