import styles from './SectionTwo.module.scss';

export default function SectionTwo({ children, heading }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.headingTwo}>{heading}</h2>
      {children}
    </section>
  );
}
