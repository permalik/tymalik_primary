/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import FeedCardStyles from './FeedCard.module.scss';

export default function FeedCard({ article }) {
  return (
    <li className={FeedCardStyles.articleCard}>
      <Link
        className={FeedCardStyles.articleLink}
        href={`/article/${article.slug}`}
        passHref
      >
        <a>
          <img
            alt={article.frontmatter.alt_text}
            className={FeedCardStyles.articleImage}
            src={article.frontmatter.cover_image}
          />
          <div className={FeedCardStyles.contentWrapper}>
            <h3 className={FeedCardStyles.articleHeading}>
              {article.frontmatter.title}
            </h3>
            <p className={FeedCardStyles.articleDescription}>
              {article.frontmatter.description}
            </p>
            <time
              dateTime={article.frontmatter.timestamp}
              className={FeedCardStyles.timestamp}
            >
              {article.frontmatter.timestamp}
            </time>
            <p className={FeedCardStyles.articleExcerpt}>
              {article.frontmatter.excerpt}
            </p>
          </div>
        </a>
      </Link>
    </li>
  );
}
