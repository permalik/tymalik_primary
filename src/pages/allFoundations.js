import FoundationCard from '../components/FoundationCard';
import foundationCardArray from '../../utils/foundationCardArray';
import PrimarySection from '../components/PrimarySection';

import AllFoundationStyles from '../styles/AllFoundations.module.scss';

export default function allFoundations() {
  return (
    <PrimarySection>
      <h1>all foundations</h1>
      <ul className={AllFoundationStyles.foundationList}>
        {foundationCardArray.map((foundation, index) => (
          <FoundationCard key={index} foundation={foundation} />
        ))}
      </ul>
    </PrimarySection>
  );
}
