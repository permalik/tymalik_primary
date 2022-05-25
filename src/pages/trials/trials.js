import Head from 'next/head';

import PrimarySection from '../../components/PrimarySection';
import PuzzleCard from '../../components/PuzzleCard';
import puzzleCardArray from '../../../utils/puzzleCardArray';

import styles from './Trials.module.scss';

export default function AllArticles() {
  return (
    <PrimarySection>
      <Head>
        <title>Ty Malik | Trial Archive</title>
        <meta name='description' content="Ty Malik's trial archive" />
        <meta
          name='keywords'
          content='software development, html, css, javascript, codewars'
        />
        <link rel='icon' href='/public/favicon.ico' />
      </Head>
      <h1 className={styles.headingOne}>all trials</h1>
      <ul className={styles.puzzleList}>
        {puzzleCardArray.map((trial, index) => (
          <PuzzleCard key={index} trial={trial} />
        ))}
      </ul>
    </PrimarySection>
  );
}
