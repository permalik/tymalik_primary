import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import path from 'path';
import { sortByDate } from '../../../utils';

import ArticleCard from '../../components/ArticleCard';
import PrimarySection from '../../components/PrimarySection';

import styles from './Articles.module.scss';

export default function Articles({ articles }) {
  return (
    <PrimarySection className={styles.primarySection}>
      <Head>
        <title>Ty Malik | Article Archive</title>
        <meta name='description' content="Ty Malik's article archive" />
        <meta
          name='keywords'
          content='software development, blog article, html, css, javascript'
        />
        <link rel='icon' href='/public/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.headingOne}>all articles</h1>
      </header>
      <ul className={styles.articleList}>
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </ul>
    </PrimarySection>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('articles'));
  const articles = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('articles', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter
    };
  });

  return {
    props: {
      articles: articles.sort(sortByDate)
    }
  };
}
