import styles from './PortfolioRepoCard.module.scss';

export default function PortfolioRepoCard({ repo }) {
  return (
    <li className={styles.repoCard}>
      <a href={repo.html_url}>
        <h3 className={styles.repoHeading}>
          {repo.name.replace(/_/g, ' ')}
        </h3>
        <p className={styles.repoDescription}>
          {repo.description}
        </p>
      </a>
      <div className={styles.liveLinkWrapper}>
        {repo.homepage ? (
          <a
            className={styles.repoLiveLink}
            href={repo.homepage}
          >
            View Site
          </a>
        ) : null}
      </div>
    </li>
  );
}
