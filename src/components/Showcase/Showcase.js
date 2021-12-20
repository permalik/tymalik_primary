import SectionTwo from '../SectionTwo';
import ShowcaseCard from '../ShowcaseCard';
import foundationCardArray from '../../../utils/foundationCardArray';
import puzzleCardArray from '../../../utils/puzzleCardArray';

import ShowcaseStyles from '../../styles/Showcase.module.scss';

export default function Showcase() {
  return (
    <SectionTwo heading='recent projects'>
      <div className={ShowcaseStyles.cardWrapper}>
        <ShowcaseCard
          alt={puzzleCardArray[0].alt}
          className={ShowcaseStyles.cardLink}
          imgUrl={puzzleCardArray[0].image}
          projectUrl={`https://tymalik.me${puzzleCardArray[0].link}`}
          timestamp={puzzleCardArray[0].timestamp}
          title={puzzleCardArray[0].title}
        >
          <ul className={ShowcaseStyles.cardDescription}>
            <li>Get data from a given array</li>
            <li>
              Return an interpolated string about &ldquo;liked posts&rdquo;
            </li>
            <li>A Codewars challenge written in JavaScript</li>
          </ul>
        </ShowcaseCard>
        <ShowcaseCard
          alt={`C# Caeser Cipher (code and command line program)`}
          className={ShowcaseStyles.cardLink}
          imgUrl={`/images/trials/caeser_cipher.png`}
          projectUrl={`https://github.com/permalik/csharp_caeser_cipher`}
          timestamp={`2021-12-16`}
          title={'C# Caeser Cipher'}
        >
          <ul className={ShowcaseStyles.cardDescription}>
            <li>Encrypt and Decrypt textual information</li>
            <li>Leverage the Caeser Cipher technique</li>
            <li>Accept user message and alphabet shift value</li>
            <li>Return modified text</li>
          </ul>
        </ShowcaseCard>
        <ShowcaseCard
          alt={foundationCardArray[0].alt}
          className={ShowcaseStyles.cardLink}
          imgUrl={foundationCardArray[0].image}
          projectUrl={`https://tymalik.me${foundationCardArray[0].link}`}
          timestamp={foundationCardArray[0].timestamp}
          title={foundationCardArray[0].title}
        >
          <ul className={ShowcaseStyles.cardDescription}>
            <li>Traverse selection</li>
            <li>Retain given value while shifting items</li>
            <li>Insert sorted item into proper position</li>
            <li>Continue until all items are sorted</li>
            <li>Return sorted selection</li>
            <li>Best Case: &#937;(n)</li>
            <li>Worst Case: O(n&#178;)</li>
          </ul>
        </ShowcaseCard>
      </div>
    </SectionTwo>
  );
}
