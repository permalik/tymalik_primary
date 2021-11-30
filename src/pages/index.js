import Head from 'next/head';

import ArticleFeed from '../components/ArticleFeed';
import Promo from '../components/Promo';
import Showcase from '../components/Showcase';
import Skillset from '../components/Skillset';

import styles from '../styles/Index.module.scss';

export default function Home() {
  return (
    <section className={styles.indexSection}>
      <Head>
        <title>Ty Malik</title>
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
      <Promo />
      <Skillset />
      <Showcase />
      <ArticleFeed />
    </section>
  );
}

// Page font size adjuster hook
// import { useEffect, useState } from 'react';

// const [fontZoom, setFontZoom] = useState(false);

// useEffect(() => {
//   const root = document.documentElement;
//   root?.style.setProperty('--htmlFontSize', fontZoom ? '50px' : '4px');
// }, [fontZoom]);

// <button onClick={() => setFontZoom(!fontZoom)}>
//   {fontZoom ? '50px' : '4px'}
// </button>;
