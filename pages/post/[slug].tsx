/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import {getFiles, getPostBySlug} from "@lib/utils/utils";
import {Params} from "next/dist/server/router";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import {BlogPostProps} from "../../types/blog";

import MainSection from "@components/common/mainSection";

import styles from "../../styles/Post.module.scss";

const Post = ({frontMatter, markdownBody}: BlogPostProps) => {
  console.log(markdownBody)
  return (
    <MainSection>
      <Head>
        <title>Ty Malik | {frontMatter.title}</title>
        <meta
          name="description"
          content="Ty Malik's personal site and portfolio"
        />
        <meta
          name="keywords"
          content="software development, blog article, html, css, javascript"
        />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <article className={styles.article}>
        <header>
          <h1>{frontMatter.title}</h1>
          <p>{frontMatter.description}</p>
          <div>
            <Link href={`/malik`} passHref>
              <span>Written by {frontMatter.author}</span>
            </Link>
            <time>{frontMatter.timestamp}</time>
          </div>
          <img
            alt={frontMatter.alt_text}
            src={frontMatter.cover_image}
          />
        </header>
        <ReactMarkdown
          children={markdownBody}
          className={styles.body}
          rehypePlugins={[rehypeRaw]}
        />
      </article>
    </MainSection>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  const paths = posts.map((filename: string) => ({
    params: {
      slug: filename.replace(/\.md/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}: Params) {
  const {frontMatter, markdownBody} = await getPostBySlug("blog", params.slug);

  return {
    props: {
      frontMatter,
      markdownBody,
    },
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

export default Post;