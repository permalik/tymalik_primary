/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import useSwr from 'swr';
import { sortById } from '../../utils';

import PortfolioFoundationCard from '../components/PortfolioFoundationCard';
import PortfolioRepoCard from '../components/PortfolioRepoCard';
import PortfolioTrialCard from '../components/PortfolioTrialCard';
import PrimarySection from '../components/PrimarySection';
import foundationCardArray from '../../utils/foundationCardArray';
import puzzleCardArray from '../../utils/puzzleCardArray';

import PortfolioStyles from './Portfolio.module.scss';

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
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>all projects</h1>
      <div className={PortfolioStyles.contentWrapper}>
        <section className={PortfolioStyles.githubSection}>
          <h2 className={PortfolioStyles.githubHeading}>github</h2>
          <ul className={PortfolioStyles.repoList}>
            {data
              ? data.repos.data
                  .sort(sortById)
                  .map((repo, index) => (
                    <PortfolioRepoCard key={index} repo={repo} />
                  ))
              : 'Loading...'}
          </ul>
        </section>
        <div className={PortfolioStyles.sidebarWrapper}>
          <section className={PortfolioStyles.trialSection}>
            <header className={PortfolioStyles.sectionHeader}>
              <h2 className={PortfolioStyles.trialHeading}>trials</h2>
              <div className={PortfolioStyles.viewAll}>
                <a href={`/allTrials`}>
                  <p>View All</p>
                  <img
                    alt='thin, right-pointing arrow'
                    className={PortfolioStyles.viewAllArrow}
                    src={`https://res.cloudinary.com/permalik/image/upload/v1638834651/arrow_right.svg`}
                  />
                </a>
              </div>
            </header>
            <ul className={PortfolioStyles.trialList}>
              {puzzleCardArray.map((trial, index) => (
                <PortfolioTrialCard key={index} trial={trial} />
              ))}
            </ul>
          </section>
          <section className={PortfolioStyles.foundationSection}>
            <header className={PortfolioStyles.sectionHeader}>
              <h2 className={PortfolioStyles.foundationHeading}>foundations</h2>
              <div className={PortfolioStyles.viewAll}>
                <a href={`/allFoundations`}>
                  <p>View All</p>
                  <img
                    alt='thin, right-pointing arrow'
                    className={PortfolioStyles.viewAllArrow}
                    src={`https://res.cloudinary.com/permalik/image/upload/v1638834651/arrow_right.svg`}
                  />
                </a>
              </div>
            </header>
            <ul className={PortfolioStyles.foundationList}>
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
