import Head from "next/head";
import React from "react";
import {BlogProps} from "../types/blog";
import {getPostsWithFrontMatter} from "@lib/utils/utils";

import MainSection from "@components/common/mainSection";
import List from "@components/content/blog/list";

import styles from "../styles/Blog.module.scss";

const Blog = ({posts}: BlogProps) => {
  return (
    <MainSection>
      <Head>
        <title>Ty Malik | Article Archive</title>
        <meta name="description" content="Ty Malik's article archive"/>
        <meta
          name="keywords"
          content="software development, blog article, html, css, javascript"
        />
        <link rel="icon" href="/public/favicon.ico"/>
      </Head>
      <header>
        <h1>all articles</h1>
      </header>
      <div>
        <List posts={posts}/>
      </div>
    </MainSection>
  );
};

export async function getStaticProps() {
  const posts = await getPostsWithFrontMatter("blog");

  return {
    props: {
      posts
    },
  };
}

export default Blog;