import Link from 'next/link';

import styles from './ArticleCard.module.scss';

export default function ArticleCard({ article }) {
  return (
    <li className={styles.article}>
      <Link href={`/article/${article.slug}`} passHref>
        <a>
          <div className={styles.headerWrapper}>
            <header className={styles.header}>
              <h2 className={styles.title}>
                {article.frontmatter.title}
              </h2>
              <p className={styles.description}>
                {article.frontmatter.description}
              </p>
            </header>
            <time className={styles.timestamp}>
              {article.frontmatter.timestamp}
            </time>
          </div>
          <p className={styles.excerpt}>
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
