import Link from 'next/link';

import ArticleCardStyles from '../../styles/ArticleCard.module.scss';

export default function ArticleCard({ article }) {
  return (
    <li className={ArticleCardStyles.article}>
      <Link href={`/article/${article.slug}`} passHref>
        <a>
          <div className={ArticleCardStyles.headerWrapper}>
            <header className={ArticleCardStyles.header}>
              <h2 className={ArticleCardStyles.title}>
                {article.frontmatter.title}
              </h2>
              <p className={ArticleCardStyles.description}>
                {article.frontmatter.description}
              </p>
            </header>
            <time className={ArticleCardStyles.timestamp}>
              {article.frontmatter.timestamp}
            </time>
          </div>
          <p className={ArticleCardStyles.excerpt}>
            {article.frontmatter.excerpt} [...]
          </p>
        </a>
      </Link>
    </li>
  );
}

// Future tagging implementation
{
  /* <ul className={ArticleCardStyles.tagList}>
          {article.frontmatter.tags.map((tag, index) => (
            <li className={ArticleCardStyles.tag} key={index}>
              <Link href={`/${tag}`}>
                <a>#{tag}</a>
              </Link>
            </li>
          ))}
        </ul> */
}
