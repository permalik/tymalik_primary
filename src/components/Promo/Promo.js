import styles from './Promo.module.scss';

export default function Promo() {
  return (
    <section className={styles.promoSection}>
      <div className={styles.promoWrapper}>
        <h1 className={styles.promoHeading}>Hello, I&#39;m Ty</h1>
        <p className={styles.promoDescription}>and this is my work.</p>
      </div>
    </section>
  );
}
