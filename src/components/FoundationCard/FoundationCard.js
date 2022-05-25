import Link from 'next/link';

import FoundationCardStyles from './FoundationCard.module.scss';

export default function FoundationCard({ foundation }) {
  return (
    <li className={FoundationCardStyles.listItem}>
      <Link href={`${foundation.link}`} passHref>
        <a>
          <div className={FoundationCardStyles.article}>
            <header className={FoundationCardStyles.header}>
              <h2 className={FoundationCardStyles.title}>{foundation.title}</h2>
              <p className={FoundationCardStyles.description}>
                {foundation.type}
              </p>
            </header>
            <time
              className={FoundationCardStyles.timestamp}
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
