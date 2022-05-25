import Link from 'next/link';

import styles from './PortfolioTrialCard.module.scss';

export default function PortfolioTrialCard({ trial }) {
  return (
    <li className={styles.trialCard}>
      <Link href={`${trial.link}`} passHref>
        <a>
          <header className={styles.trialHeader}>
            <h3 className={styles.trialHeading}>
              {trial.title}
            </h3>
            <time
              dateTime={trial.timestamp}
              className={styles.trialTimestamp}
            >
              {trial.timestamp}
            </time>
          </header>
          <p className={styles.trialDescription}>
            A {trial.type} challenge solved with {trial.language}
          </p>
        </a>
      </Link>
    </li>
  );
}
