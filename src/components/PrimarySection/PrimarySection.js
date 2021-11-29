import PrimarySectionStyles from '../../styles/PrimarySection.module.scss';

const PrimarySection = ({ children }) => {
  return (
    <section className={PrimarySectionStyles.primarySection}>
      {children}
    </section>
  );
};

export default PrimarySection;
