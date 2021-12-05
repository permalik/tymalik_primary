import PrimarySection from '../PrimarySection';

import TrialStyles from '../../styles/Trial.module.scss';

export default function TrialLayout({
  children,
  puzzleSourceHref,
  puzzleTitle,
  puzzleType
}) {
  return (
    <PrimarySection>
      <header className={TrialStyles.header}>
        <h1 className={TrialStyles.headingOne}>{puzzleTitle}</h1>
        <a
          className={TrialStyles.type}
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
