/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';

import PrimarySection from '../../components/PrimarySection';

import styles from './Article.module.scss';

marked.setOptions({
  breaks: true
});

export default function Article({
  content,
  frontmatter: {
    alt_text,
    author,
    cover_image,
    description,
    tags,
    timestamp,
    title
  },
  slug
}) {
  return (
    <PrimarySection>
      <Head>
        <title>Ty Malik | {title}</title>
        <meta
          name='description'
          content="Ty Malik's personal site and portfolio"
        />
        <meta
          name='keywords'
          content='software development, blog article, html, css, javascript'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <article className={styles.article}>
        <header className={styles.headerContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.creditWrapper}>
            <Link href={`/malik`} passHref>
              <span className={styles.credit}>Written by {author}</span>
            </Link>
            <time className={styles.timestamp}>{timestamp}</time>
          </div>
          <img
            alt={alt_text}
            className={styles.coverImage}
            src={cover_image}
          />
        </header>
        <section
          className={styles.bodySection}
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </article>
    </PrimarySection>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('articles'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }));
  return {
    paths,
    fallback: false
  };
}
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('articles', slug + '.md'),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      content,
      frontmatter,
      slug
    }
  };
}

// Future tagging implementation
{
  /* <ul className={styles.tagList}>
            {tags.map((tag, index) => (
              <li className={styles.tag} key={index}>
                #{tag}
              </li>
            ))}
          </ul> */
}
