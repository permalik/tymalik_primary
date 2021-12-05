import Link from 'next/link';

import PuzzleCardStyles from '../../styles/PuzzleCard.module.scss';

export default function PuzzleCard({ trial }) {
  return (
    <Link href={`${trial.link}`} passHref>
      <article className={PuzzleCardStyles.article}>
        <header className={PuzzleCardStyles.header}>
          <h2 className={PuzzleCardStyles.title}>{trial.title}</h2>
          <time className={PuzzleCardStyles.timestamp}>{trial.timestamp}</time>
        </header>
        <p className={PuzzleCardStyles.description}>
          <span>{trial.language}</span> | <span>{trial.type}</span>
        </p>
      </article>
    </Link>
  );
}
