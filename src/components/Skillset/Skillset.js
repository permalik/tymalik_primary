import SectionTwo from '../SectionTwo';

import SkillsetStyles from '../../styles/Skillset.module.scss';

const Skillset = () => {
  return (
    <SectionTwo className={SkillsetStyles.skillsetSection}>
      <h2 className={SkillsetStyles.skillsetHeading}>skillset</h2>
      <ul className={SkillsetStyles.skillsetList}>
        <li className={SkillsetStyles.skillsetCard}>html</li>
        <li className={SkillsetStyles.skillsetCard}>css</li>
        <li className={SkillsetStyles.skillsetCard}>javascript</li>
        <li className={SkillsetStyles.skillsetCard}>react</li>
      </ul>
    </SectionTwo>
  );
};

export default Skillset;

// Make content link to aggregated projects
// and articles of the same types
