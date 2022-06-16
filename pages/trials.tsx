import puzzleData from "@data/portfolio/puzzleData";
import Head from "next/head";

import MainSection from "@components/common/mainSection";
import TrialCard from "@components/content/portfolio/trialCard";


import styles from "../styles/Trials.module.scss";

const AllArticles = () => {
  return (
    <MainSection>
      <Head>
        <title>Ty Malik | Trial Archive</title>
        <meta name="description" content="Ty Malik's trial archive"/>
        <meta
          name="keywords"
          content="software development, html, css, javascript, codewars"
        />
        <link rel="icon" href="/public/favicon.ico"/>
      </Head>
      <h1 className={styles.headingOne}>all trials</h1>
      <ul className={styles.puzzleList}>
        {puzzleData.map((trial, index) => (
          <TrialCard key={index} trial={trial}/>
        ))}
      </ul>
    </MainSection>
  );
};

export default AllArticles;
