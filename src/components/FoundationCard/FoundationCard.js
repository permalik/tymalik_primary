import Link from 'next/link';

import FoundationCardStyles from '../../styles/FoundationCard.module.scss';

export default function FoundationCard({ foundation }) {
  return (
    <Link href={`${foundation.link}`} passHref>
      <article className={FoundationCardStyles.article}>
        <header className={FoundationCardStyles.header}>
          <h2 className={FoundationCardStyles.title}>{foundation.title}</h2>
          <p className={FoundationCardStyles.description}>{foundation.type}</p>
        </header>
        <time
          className={FoundationCardStyles.timestamp}
          dateTime={foundation.timestamp}
        >
          {foundation.timestamp}
        </time>
      </article>
    </Link>
  );
}
