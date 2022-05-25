import Head from 'next/head';

import FoundationCard from '../../components/FoundationCard';
import PrimarySection from '../../components/PrimarySection';
import foundationCardArray from '../../../utils/foundationCardArray';

import styles from './Foundations.module.scss';

export default function Foundations() {
  return (
    <PrimarySection>
      <Head>
        <title>Ty Malik | Foundation Archive</title>
        <meta name='description' content="Ty Malik's foundation archive" />
        <meta
          name='keywords'
          content='software development, algorithm, data structure, javascript'
        />
        <link rel='icon' href='/public/favicon.ico' />
      </Head>
      <h1>all foundations</h1>
      <ul className={styles.foundationList}>
        {foundationCardArray.map((foundation, index) => (
          <FoundationCard key={index} foundation={foundation} />
        ))}
      </ul>
    </PrimarySection>
  );
}
