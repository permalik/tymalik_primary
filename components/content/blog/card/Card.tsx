import Link from "next/link";
import styled from "styled-components";

import styles from "./Card.module.scss";

const StyledLink = styled.a`
  background: #1C182F;
  color: #FFF;
`

export default function Card({post}: any) {
  return (
    <li className={styles.card}>
      <Link href={`/post/${post.slug}`} passHref>
        <StyledLink>
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
        </StyledLink>
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