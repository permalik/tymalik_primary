import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import path from 'path';
import { sortByDate } from '../../utils';

import ArticleCard from '../components/ArticleCard';
import PrimarySection from '../components/PrimarySection';

import ArticlesStyles from '../styles/Articles.module.scss';

export default function AllArticles({ articles }) {
  return (
    <PrimarySection className={ArticlesStyles.primarySection}>
      <Head>
        <title>Ty Malik | Articles</title>
        <meta name='description' content="Ty Malik's articles" />
        <meta
          name='keywords'
          content='software development, blog article, html, css, javascript'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={ArticlesStyles.header}>
        <h1 className={ArticlesStyles.headingOne}>all articles</h1>
      </header>
      <ul className={ArticlesStyles.articleList}>
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
