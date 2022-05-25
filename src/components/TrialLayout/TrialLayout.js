import PrimarySection from '../PrimarySection';

import styles from './Trial.module.scss';

export default function TrialLayout({
  children,
  puzzleSourceHref,
  puzzleTitle,
  puzzleType
}) {
  return (
    <PrimarySection>
      <header className={styles.header}>
        <h1 className={styles.headingOne}>{puzzleTitle}</h1>
        <a
          className={styles.type}
          href={puzzleSourceHref}
          rel='noreferrer'
          target='_blank'
        >
          {puzzleType}
        </a>
      </header>
      {children}
    </PrimarySection>
  );
}
