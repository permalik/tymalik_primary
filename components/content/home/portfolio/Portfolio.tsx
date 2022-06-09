import Card from "./card";
import Section from "../common/section";
import foundationData from "../../../../utils/portfolioData/foundationData";
import puzzleData from "../../../../utils/portfolioData/puzzleData";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <Section heading="recent projects">
      <div className={styles.container}>
        <Card
          alt={puzzleData[0].alt}
          imgUrl={puzzleData[0].image}
          projectUrl={`https://tymalik.me${puzzleData[0].link}`}
          timestamp={puzzleData[0].timestamp}
          title={puzzleData[0].title}
        >
          <ul className={styles.list}>
            <li>Parse a given string</li>
            <li>Return the frequency of individual character occurrance</li>
            <li>A Codewars challenge written in JavaScript</li>
          </ul>
        </Card>
        <Card
          alt={`C# Caeser Cipher (code and command line program)`}
          imgUrl={`/images/trials/caeser_cipher.png`}
          projectUrl={`https://github.com/permalik/csharp_caeser_cipher`}
          timestamp={`2021-12-16`}
          title={"C# Caeser Cipher"}
        >
          <ul className={styles.list}>
            <li>Encrypt and Decrypt textual information</li>
            <li>Leverage the Caeser Cipher technique</li>
            <li>Accept user message and alphabet shift value</li>
            <li>Return modified text</li>
          </ul>
        </Card>
        <Card
          alt={foundationData[0].alt}
          imgUrl={foundationData[0].image}
          projectUrl={`https://tymalik.me${foundationData[0].link}`}
          timestamp={foundationData[0].timestamp}
          title={foundationData[0].title}
        >
          <ul className={styles.list}>
            <li>Traverse selection</li>
            <li>Retain given value while shifting items</li>
            <li>Insert sorted item into proper position</li>
            <li>Continue until all items are sorted</li>
            <li>Return sorted selection</li>
            <li>Best Case: &#937;(n)</li>
            <li>Worst Case: O(n&#178;)</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
};

export default Portfolio;