import Link from 'next/link';

import PortfolioFoundationCardStyles from '../../styles/PortfolioFoundationCard.module.scss';

export default function PortfolioFoundationCard({ foundation }) {
  return (
    <li className={PortfolioFoundationCardStyles.foundationCard}>
      <Link href={`${foundation.link}`} passHref>
        <a>
          <header className={PortfolioFoundationCardStyles.foundationHeader}>
            <h3 className={PortfolioFoundationCardStyles.foundationHeading}>
              {foundation.title}
            </h3>
            <time
              dateTime={foundation.timestamp}
              className={PortfolioFoundationCardStyles.foundationTimestamp}
            >
              {foundation.timestamp}
            </time>
          </header>
          <p className={PortfolioFoundationCardStyles.foundationDescription}>
            {foundation.type}
          </p>
        </a>
      </Link>
    </li>
  );
}
