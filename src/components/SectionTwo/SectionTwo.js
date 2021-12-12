import SectionTwoStyles from '../../styles/SectionTwo.module.scss';

export default function SectionTwo({ children, heading }) {
  return (
    <section className={SectionTwoStyles.section}>
      <h2 className={SectionTwoStyles.headingTwo}>{heading}</h2>
      {children}
    </section>
  );
}
