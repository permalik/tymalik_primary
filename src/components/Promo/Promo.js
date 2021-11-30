import PromoStyles from '../../styles/Promo.module.scss';

export default function Promo() {
  return (
    <section className={PromoStyles.promoSection}>
      <div className={PromoStyles.promoWrapper}>
        <h1 className={PromoStyles.promoHeading}>Hello, I&#39;m Ty</h1>
        <p className={PromoStyles.promoDescription}>This is my work</p>
      </div>
    </section>
  );
}
