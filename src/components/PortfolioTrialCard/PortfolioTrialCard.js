import Link from 'next/link';

import PortfolioTrialCardStyles from '../../styles/PortfolioTrialCard.module.scss';

export default function PortfolioTrialCard({ trial }) {
  return (
    <li className={PortfolioTrialCardStyles.trialCard}>
      <Link href={`${trial.link}`} passHref>
        <a>
          <h3 className={PortfolioTrialCardStyles.trialHeading}>
            {trial.title}
          </h3>
          <time
            dateTime={trial.timestamp}
            className={PortfolioTrialCardStyles.trialTimestamp}
          >
            {trial.timestamp}
          </time>
          <p className={PortfolioTrialCardStyles.trialDescription}>
            A {trial.type} challenge solved with {trial.language}
          </p>
        </a>
      </Link>
    </li>
  );
}
