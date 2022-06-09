/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from "react";

import styles from './Card.module.scss';

// <article key={post.slug} className="post-title">
//   <Link href={{pathname: `/blog/${post.slug}`}}>
//     <a>{post.frontMatter.title}</a>
//   </Link>{" "}
//   - {post.frontMatter.description}
//   <p>[ {post.frontMatter.tags.join(", ")} ]</p>
// </article>

export default function Card({ post }: any) {
  return (
    <li className={styles.post}>
      <Link
        href={`/blog/${post.frontMatter.slug}`}
        passHref
      >
        <a>
          <img
            alt={post.frontMatter.alt_text}
            className={styles.image}
            src={post.frontMatter.cover_image}
          />
          <div className={styles.container}>
            <h3 className={styles.heading}>
              {post.frontMatter.title}
            </h3>
            <p className={styles.description}>
              {post.frontMatter.description}
            </p>
            <time
              dateTime={post.frontMatter.timestamp}
              className={styles.timestamp}
            >
              {post.frontMatter.timestamp}
            </time>
            <p className={styles.excerpt}>
              {post.frontMatter.excerpt}
            </p>
          </div>
        </a>
      </Link>
    </li>
  );
}
