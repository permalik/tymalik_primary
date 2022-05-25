import Link from 'next/link';

import styles from './PuzzleCard.module.scss';

export default function PuzzleCard({ trial }) {
  return (
    <li className={styles.listItem}>
      <Link href={`${trial.link}`} passHref>
        <a>
          <div className={styles.article}>
            <header className={styles.header}>
              <h2 className={styles.title}>{trial.title}</h2>
              <p className={styles.description}>
                <span>{trial.language}</span> | <span>{trial.type}</span>
              </p>
            </header>
            <time className={styles.timestamp}>
              {trial.timestamp}
            </time>
          </div>
        </a>
      </Link>
    </li>
  );
}
