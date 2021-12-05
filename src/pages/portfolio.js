import PuzzleCard from '../components/PuzzleCard';
import puzzleCardArray from '../../utils/puzzleCardArray';
import PrimarySection from '../components/PrimarySection';

import PortfolioStyles from '../styles/Portfolio.module.scss';

export default function Portfolio() {
  return (
    <PrimarySection>
      <h1>All projects</h1>
      <div className={PortfolioStyles.contentWrapper}>
        <ul className={PortfolioStyles.trialList}>
          {puzzleCardArray.map((trial, index) => (
            <PuzzleCard
              className={PortfolioStyles.trialCard}
              key={index}
              trial={trial}
            />
          ))}
        </ul>
      </div>
    </PrimarySection>
  );
}
