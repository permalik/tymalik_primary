import SectionTwo from '../SectionTwo';

import styles from './Skillset.module.scss';

export default function Skillset() {
  return (
    <SectionTwo className={styles.skillsetSection} heading='skillset'>
      <ul className={styles.skillsetList}>
        <li className={styles.skillsetCard}>html</li>
        <li className={styles.skillsetCard}>css</li>
        <li className={styles.skillsetCard}>javascript</li>
        <li className={styles.skillsetCard}>react</li>
      </ul>
    </SectionTwo>
  );
}
