import PrimarySectionStyles from './PrimarySection.module.scss';

export default function PrimarySection({ children }) {
  return (
    <section className={PrimarySectionStyles.primarySection}>
      {children}
    </section>
  );
}
