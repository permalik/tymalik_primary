import styles from "./Section.module.scss";

interface SectionProps {
  children?: JSX.Element;
  heading: string;
}

const Section = (
  {
    children, heading
  }: SectionProps
) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.headingTwo}>{heading}</h2>
      {children}
    </section>
  );
};

export default Section;
