import Link from 'next/link';

import PuzzleCardStyles from '../../styles/PuzzleCard.module.scss';

export default function PuzzleCard({ trial }) {
  return (
    <li className={PuzzleCardStyles.listItem}>
      <Link href={`${trial.link}`} passHref>
        <a>
          <div className={PuzzleCardStyles.article}>
            <header className={PuzzleCardStyles.header}>
              <h2 className={PuzzleCardStyles.title}>{trial.title}</h2>
              <p className={PuzzleCardStyles.description}>
                <span>{trial.language}</span> | <span>{trial.type}</span>
              </p>
            </header>
            <time className={PuzzleCardStyles.timestamp}>
              {trial.timestamp}
            </time>
          </div>
        </a>
      </Link>
    </li>
  );
}
