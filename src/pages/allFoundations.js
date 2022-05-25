import Head from 'next/head';

import FoundationCard from '../components/FoundationCard';
import PrimarySection from '../components/PrimarySection';
import foundationCardArray from '../../utils/foundationCardArray';

import AllFoundationStyles from './AllFoundations.module.scss';

export default function allFoundations() {
  return (
    <PrimarySection>
      <Head>
        <title>Ty Malik | Foundation Archive</title>
        <meta name='description' content="Ty Malik's foundation archive" />
        <meta
          name='keywords'
          content='software development, algorithm, data structure, javascript'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>all foundations</h1>
      <ul className={AllFoundationStyles.foundationList}>
        {foundationCardArray.map((foundation, index) => (
          <FoundationCard key={index} foundation={foundation} />
        ))}
      </ul>
    </PrimarySection>
  );
}
