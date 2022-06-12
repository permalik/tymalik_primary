import Link from 'next/link';

import styles from './TrialCard.module.scss';

const TrialCard = ({ trial }: any) => {
  return (
    <li className={styles.card}>
      <Link href={`${trial.link}`} passHref>
        <a>
          <header className={styles.header}>
            <h3>
              {trial.title}
            </h3>
            <time
              dateTime={trial.timestamp}
            >
              {trial.timestamp}
            </time>
          </header>
          <p className={styles.description}>
            A {trial.type} challenge solved with {trial.language}
          </p>
        </a>
      </Link>
    </li>
  );
}

export default TrialCard