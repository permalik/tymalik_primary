import Head from "next/head";
import React from "react";
import {BlogProps} from "../types/blog";
import { getPostsWithFrontMatter } from '../lib/utils/utils'

import Blog from "../components/content/home/blog";
import Section from "../components/content/home/common/section";
import Hero from '../components/content/home/hero';
import Portfolio from "../components/content/home/portfolio";
import Skills from "../components/content/home/skills";
// import About from '../components/About';
// import Contact from '../components/Contact';
// import FeedCard from '../components/FeedCard';

import styles from '../styles/Index.module.scss';

// export default function Home({data}) {
const Home = ({posts}: BlogProps) => {
  return (
    <section className={styles.indexSection}>
      <Head>
        <title>Ty Malik | Front-End Engineer</title>
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
      <Hero/>
      <Skills/>
      <Portfolio/>
      <Section heading="latest articles">
        <Blog posts={posts}/>
      </Section>
      {/*<About/>*/}
      {/*<Contact/>*/}
    </section>
  );
}

export async function getStaticProps() {
  const posts = await getPostsWithFrontMatter('blog')

  return {
    props: {
      posts,
      title: 'Blog',
      description: 'Posts on software engineering',
    },
  }
}

// export async function getStaticProps() {
//   const files = fs.readdirSync(path.join('data'));
//   const data = files.map((filename) => {
//     const slug = filename.replace('.md', '');
//
//     const markdownWithMeta = fs.readFileSync(
//       path.join('data', filename),
//       'utf-8'
//     );
//
//     const {data: frontmatter} = matter(markdownWithMeta);
//
//     return {
//       slug,
//       frontmatter
//     };
//   });
//
//   return {
//     props: {
//       data: data.sort(sortByDate)
//     }
//   };
// }

// Future accessibility implementation: Page font size adjuster hook
// import { useEffect, useState } from 'react';

// const [fontZoom, setFontZoom] = useState(false);

// useEffect(() => {
//   const root = document.documentElement;
//   root?.style.setProperty('--htmlFontSize', fontZoom ? '50px' : '4px');
// }, [fontZoom]);

// <button onClick={() => setFontZoom(!fontZoom)}>
//   {fontZoom ? '50px' : '4px'}
// </button>;

export default Home;