import SectionTwo from '../SectionTwo';

import SkillsetStyles from '../../styles/Skillset.module.scss';

export default function Skillset() {
  return (
    <SectionTwo className={SkillsetStyles.skillsetSection} heading='skillset'>
      <ul className={SkillsetStyles.skillsetList}>
        <li className={SkillsetStyles.skillsetCard}>html</li>
        <li className={SkillsetStyles.skillsetCard}>css</li>
        <li className={SkillsetStyles.skillsetCard}>javascript</li>
        <li className={SkillsetStyles.skillsetCard}>react</li>
      </ul>
    </SectionTwo>
  );
}
