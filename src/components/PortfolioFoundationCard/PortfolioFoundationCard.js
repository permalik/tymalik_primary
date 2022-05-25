import Link from 'next/link';

import styles from './PortfolioFoundationCard.module.scss';

export default function PortfolioFoundationCard({ foundation }) {
  return (
    <li className={styles.foundationCard}>
      <Link href={`${foundation.link}`} passHref>
        <a>
          <header className={styles.foundationHeader}>
            <h3 className={styles.foundationHeading}>
              {foundation.title}
            </h3>
            <time
              dateTime={foundation.timestamp}
              className={styles.foundationTimestamp}
            >
              {foundation.timestamp}
            </time>
          </header>
          <p className={styles.foundationDescription}>
            {foundation.type}
          </p>
        </a>
      </Link>
    </li>
  );
}
