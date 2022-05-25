import styles from './PrimarySection.module.scss';

export default function PrimarySection({ children }) {
  return (
    <section className={styles.primarySection}>
      {children}
    </section>
  );
}
