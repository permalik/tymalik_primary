import Link from 'next/link';

import ArticleCardStyles from '../../styles/ArticleCard.module.scss';

export default function ArticleCard({ article }) {
  return (
    <Link href={`/article/${article.slug}`} passHref>
      <article className={ArticleCardStyles.article}>
        <h2 className={ArticleCardStyles.title}>{article.frontmatter.title}</h2>
        <p className={ArticleCardStyles.description}>
          {article.frontmatter.description}
        </p>
        <time className={ArticleCardStyles.timestamp}>
          {article.frontmatter.timestamp}
        </time>
        {/* <ul className={ArticleCardStyles.tagList}>
          {article.frontmatter.tags.map((tag, index) => (
            <li className={ArticleCardStyles.tag} key={index}>
              <Link href={`/${tag}`}>
                <a>#{tag}</a>
              </Link>
            </li>
          ))}
        </ul> */}
        <p className={ArticleCardStyles.excerpt}>
          {article.frontmatter.excerpt} [...]
        </p>
      </article>
    </Link>
  );
}
