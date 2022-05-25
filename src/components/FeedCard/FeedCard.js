/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import styles from './FeedCard.module.scss';

export default function FeedCard({ article }) {
  return (
    <li className={styles.articleCard}>
      <Link
        className={styles.articleLink}
        href={`/article/${article.slug}`}
        passHref
      >
        <a>
          <img
            alt={article.frontmatter.alt_text}
            className={styles.articleImage}
            src={article.frontmatter.cover_image}
          />
          <div className={styles.contentWrapper}>
            <h3 className={styles.articleHeading}>
              {article.frontmatter.title}
            </h3>
            <p className={styles.articleDescription}>
              {article.frontmatter.description}
            </p>
            <time
              dateTime={article.frontmatter.timestamp}
              className={styles.timestamp}
            >
              {article.frontmatter.timestamp}
            </time>
            <p className={styles.articleExcerpt}>
              {article.frontmatter.excerpt}
            </p>
          </div>
        </a>
      </Link>
    </li>
  );
}
