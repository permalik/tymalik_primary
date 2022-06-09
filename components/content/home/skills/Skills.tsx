import Section from "../common/section";

import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <Section heading="skills">
      <ul className={styles.list}>
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
        <li>react</li>
      </ul>
    </Section>
  );
};

export default Skills;