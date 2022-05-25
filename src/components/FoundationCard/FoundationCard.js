import Link from 'next/link';

import styles from './FoundationCard.module.scss';

export default function FoundationCard({ foundation }) {
  return (
    <li className={styles.listItem}>
      <Link href={`${foundation.link}`} passHref>
        <a>
          <div className={styles.article}>
            <header className={styles.header}>
              <h2 className={styles.title}>{foundation.title}</h2>
              <p className={styles.description}>
                {foundation.type}
              </p>
            </header>
            <time
              className={styles.timestamp}
              dateTime={foundation.timestamp}
            >
              {foundation.timestamp}
            </time>
          </div>
        </a>
      </Link>
    </li>
  );
}
