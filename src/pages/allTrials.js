import Head from 'next/head';

import PrimarySection from '../components/PrimarySection';
import PuzzleCard from '../components/PuzzleCard';
import puzzleCardArray from '../../utils/puzzleCardArray';

import AllTrialStyles from '../styles/AllTrials.module.scss';

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
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className={AllTrialStyles.headingOne}>all trials</h1>
      <ul className={AllTrialStyles.puzzleList}>
        {puzzleCardArray.map((trial, index) => (
          <PuzzleCard key={index} trial={trial} />
        ))}
      </ul>
    </PrimarySection>
  );
}
