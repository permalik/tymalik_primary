import Link from 'next/link';

export default function ArticleCard({ article }) {
  return (
    <Link href={`/article/${article.slug}`} passHref>
      <article>
        <h2>{article.frontmatter.title}</h2>
        <p>{article.frontmatter.description}</p>
        <ul>
          {article.frontmatter.tags.map((tag, index) => (
            <li key={index}>
              <Link href={`/${tag}`}>
                <a>{tag}</a>
              </Link>
            </li>
          ))}
        </ul>
        <time>{article.frontmatter.timestamp}</time>
        <p>{article.frontmatter.excerpt}</p>
      </article>
    </Link>
  );
}
