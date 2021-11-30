import fs from 'fs';
import { sortByDate } from '../../utils';
import matter from 'gray-matter';
import path from 'path';

import ArticleCard from '../components/ArticleCard';
import PrimarySection from '../components/PrimarySection';

import ArticlesStyles from '../styles/Articles.module.scss';

export default function allArticles({ articles }) {
  return (
    <PrimarySection>
      all articles
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
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
