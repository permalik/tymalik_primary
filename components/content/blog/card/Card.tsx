import Link from "next/link";

import styles from "./Card.module.scss";

export default function Card({post}: any) {
  return (
    <li className={styles.card}>
      <Link href={`/blog/${post.frontMatter.slug}`} passHref>
        <a>
          <div className={styles.container}>
            <header>
              <h2>
                {post.frontMatter.title}
              </h2>
              <p>
                {post.frontMatter.description}
              </p>
            </header>
            <time>
              {post.frontMatter.timestamp}
            </time>
          </div>
          <p className={styles.excerpt}>
            {post.frontMatter.excerpt} [...]
          </p>
        </a>
      </Link>
    </li>
  );
};

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