import Head from "next/head";

import foundationData from "@data/portfolio/foundationData";

import MainSection from "@components/common/mainSection";
import FoundationCard from "@components/content/portfolio/foundationCard";

import styles from "../styles/Foundations.module.scss";

const Foundations = () => {
  return (
    <MainSection>
      <Head>
        <title>Ty Malik | Foundation Archive</title>
        <meta name="description" content="Ty Malik's foundation archive"/>
        <meta
          name="keywords"
          content="software development, algorithm, data structure, javascript"
        />
        <link rel="icon" href="/public/favicon.ico"/>
      </Head>
      <h1>all foundations</h1>
      <ul className={styles.foundationList}>
        {foundationData.map((foundation, index) => (
          <FoundationCard key={index} foundation={foundation}/>
        ))}
      </ul>
    </MainSection>
  );
};

export default Foundations;