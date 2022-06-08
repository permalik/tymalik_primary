import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Hello, I&#39;m Ty</h1>
        <p>and this is my work.</p>
      </div>
    </section>
  );
};

export default Hero;