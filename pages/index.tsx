// import fs from 'fs';
// import matter from 'gray-matter';
// import Head from 'next/head';
// import path from 'path';
// import {sortByDate} from '../../utils';
//
// import About from '../components/About';
// import Contact from '../components/Contact';
// import FeedCard from '../components/FeedCard';
// import SectionTwo from '../components/SectionTwo';

import React from "react";
import Hero from '../components/content/home/hero';

import Head from "next/head";
import Portfolio from "../components/content/home/portfolio/Portfolio";
import Skills from "../components/content/home/skills/Skills";

import styles from '../styles/Index.module.scss';

// export default function Home({articles}) {
const Home: React.FC = () => {
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
      {/*<SectionTwo className={styles.articleFeed}*/}
      {/*            heading="latest articles">*/}
      {/*  <ul className={styles.feedList}>*/}
      {/*    {articles.slice(0, 6).map((article, index) => (*/}
      {/*      <FeedCard article={article} key={index}/>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</SectionTwo>*/}
      {/*<About/>*/}
      {/*<Contact/>*/}
    </section>
  );
}

// export async function getStaticProps() {
//   const files = fs.readdirSync(path.join('articles'));
//   const articles = files.map((filename) => {
//     const slug = filename.replace('.md', '');
//
//     const markdownWithMeta = fs.readFileSync(
//       path.join('articles', filename),
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
//       articles: articles.sort(sortByDate)
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