/* eslint-disable @next/next/no-img-element */
import foundationData from "@data/portfolio/foundationData";
import puzzleData from "@data/portfolio/puzzleData";
import {sortById} from "@lib/utils/sort";
import Head from "next/head";
import useSwr from "swr";

import MainSection from "@components/common/mainSection";
import FoundationCard from "@components/content/portfolio/foundationCard";
import RepoCard from "@components/content/portfolio/repoCard";
import TrialCard from "@components/content/portfolio/trialCard";

import styles from "../styles/Portfolio.module.scss";

// @ts-ignore
async function fetchData(...arg) {
  // @ts-ignore
  const res = await fetch(...arg);

  return res.json();
}

export default function Portfolio() {
  const {data} = useSwr("./api/github", fetchData);
  console.log(data);

  return (
    <MainSection>
      <Head>
        <title>Ty Malik | Portfolio Archive</title>
        <meta name="description" content="Ty Malik's portfolio archive"/>
        <meta
          name="keywords"
          content="software development, html, css, javascript, react, nextjs"
        />
        <link rel="icon" href="/public/favicon.ico"/>
      </Head>
      <h1>all projects</h1>
      <div className={styles.primaryContainer}>
        <section className={`${styles.primarySection} ${styles.repoSection}`}>
          <h2 className={styles.sectionHeading}>github</h2>
          <ul className={styles.repoList}>
            {data
              ? data.repos.data
                .sort(sortById)
                .map((item: any, index: any) => (
                  <RepoCard key={index} data={item}/>
                ))
              : "Loading..."}
          </ul>
        </section>
        <div className={styles.secondaryContainer}>
          <section
            className={`${styles.primarySection} ${styles.trialSection}`}>
            <header>
              <h2 className={styles.sectionHeading}>trials</h2>
              <div className={styles.viewAll}>
                <a href={`/trials`}>
                  <p>View All</p>
                  <img
                    alt="thin, right-pointing arrow"
                    className={styles.viewAllArrow}
                    src={`https://res.cloudinary.com/permalik/image/upload/v1638834651/arrow_right.svg`}
                  />
                </a>
              </div>
            </header>
            <ul className={styles.trialList}>
              {puzzleData.map((trial, index) => (
                <TrialCard key={index} trial={trial}/>
              ))}
            </ul>
          </section>
          <section
            className={`${styles.primarySection} ${styles.foundationSection}`}>
            <header>
              <h2 className={styles.sectionHeading}>foundations</h2>
              <div className={styles.viewAll}>
                <a href={`/foundations`}>
                  <p>View All</p>
                  <img
                    alt="thin, right-pointing arrow"
                    className={styles.viewAllArrow}
                    src={`https://res.cloudinary.com/permalik/image/upload/v1638834651/arrow_right.svg`}
                  />
                </a>
              </div>
            </header>
            <ul className={styles.foundationList}>
              {foundationData.map((foundation, index) => (
                <FoundationCard key={index} foundation={foundation}/>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </MainSection>
  );
}
