import SectionTwoStyles from '../../styles/SectionTwo.module.scss';

const SectionTwo = ({ children }) => {
  return <section className={SectionTwoStyles.section}>{children}</section>;
};

export default SectionTwo;
