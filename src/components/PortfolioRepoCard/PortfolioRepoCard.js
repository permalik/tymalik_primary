import PortfolioRepoCardStyles from '../../styles/PortfolioRepoCard.module.scss';

export default function PortfolioRepoCard({ repo }) {
  return (
    <li className={PortfolioRepoCardStyles.repoCard}>
      <a href={repo.html_url}>
        <h3 className={PortfolioRepoCardStyles.repoHeading}>
          {repo.name.replace(/_/g, ' ')}
        </h3>
        <p className={PortfolioRepoCardStyles.repoDescription}>
          {repo.description}
        </p>
      </a>
      <div className={PortfolioRepoCardStyles.liveLinkWrapper}>
        {repo.homepage ? (
          <a
            className={PortfolioRepoCardStyles.repoLiveLink}
            href={repo.homepage}
          >
            View Site
          </a>
        ) : null}
      </div>
    </li>
  );
}
