/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import useSwr from 'swr';
import { sortById } from '../../../utils';

import PortfolioFoundationCard from '../../components/PortfolioFoundationCard';
import PortfolioRepoCard from '../../components/PortfolioRepoCard';
import PortfolioTrialCard from '../../components/PortfolioTrialCard';
import PrimarySection from '../../components/PrimarySection';
import foundationCardArray from '../../../utils/foundationCardArray';
import puzzleCardArray from '../../../utils/puzzleCardArray';

import styles from './Portfolio.module.scss';

async function fetchData(...arg) {
  const res = await fetch(...arg);

  return res.json();
}

export default function Portfolio() {
  const { data } = useSwr('/api/github', fetchData);

  return (
    <PrimarySection>
      <Head>
        <title>Ty Malik | Portfolio Archive</title>
        <meta name='description' content="Ty Malik's portfolio archive" />
        <meta
          name='keywords'
          content='software development, html, css, javascript, react, nextjs'
        />
        <link rel='icon' href='/public/favicon.ico' />
      </Head>
      <h1>all projects</h1>
      <div className={styles.contentWrapper}>
        <section className={styles.githubSection}>
          <h2 className={styles.githubHeading}>github</h2>
          <ul className={styles.repoList}>
            {data
              ? data.repos.data
                  .sort(sortById)
                  .map((repo, index) => (
                    <PortfolioRepoCard key={index} repo={repo} />
                  ))
              : 'Loading...'}
          </ul>
        </section>
        <div className={styles.sidebarWrapper}>
          <section className={styles.trialSection}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.trialHeading}>trials</h2>
              <div className={styles.viewAll}>
                <a href={`/allTrials`}>
                  <p>View All</p>
                  <img
                    alt='thin, right-pointing arrow'
                    className={styles.viewAllArrow}
                    src={`https://res.cloudinary.com/permalik/image/upload/v1638834651/arrow_right.svg`}
                  />
                </a>
              </div>
            </header>
            <ul className={styles.trialList}>
              {puzzleCardArray.map((trial, index) => (
                <PortfolioTrialCard key={index} trial={trial} />
              ))}
            </ul>
          </section>
          <section className={styles.foundationSection}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.foundationHeading}>foundations</h2>
              <div className={styles.viewAll}>
                <a href={`/allFoundations`}>
                  <p>View All</p>
                  <img
                    alt='thin, right-pointing arrow'
                    className={styles.viewAllArrow}
                    src={`https://res.cloudinary.com/permalik/image/upload/v1638834651/arrow_right.svg`}
                  />
                </a>
              </div>
            </header>
            <ul className={styles.foundationList}>
              {foundationCardArray.map((foundation, index) => (
                <PortfolioFoundationCard key={index} foundation={foundation} />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </PrimarySection>
  );
}
