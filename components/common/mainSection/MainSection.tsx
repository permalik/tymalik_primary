import styles from "./MainSection.module.scss";

const MainSection = ({children}: any) => {
  return (
    <section className={styles.container}>
      {children}
    </section>
  );
};

export default MainSection;