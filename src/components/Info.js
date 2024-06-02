import styles from "./Info.module.css";
const Info = ({ projectRefs }) => {
  const project1ClickHandler = () => {
    projectRefs.project1Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const project2ClickHandler = () => {
    projectRefs.project2Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const project3ClickHandler = () => {
    projectRefs.project3Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={styles.mainSection}>
      <div className={styles.parent}>
        <div className={styles.textsInfo}>
          <h1>Welcome</h1>
          <p>
            Jestem początkującym Front-End Developerem, zainteresowanym przede wszystkim w JavaScript, React. Biegle
            posługuje się HTML i CSS (SASS). Mam bardzo duży zapał do pracy, pasję i umiejętność szybkiego uczenia się.
            Jestem gotowy na nowe wyzwania, przede wszystkim do podejmowania skomplikowanych zadań. Jestem w trakcie
            nauki JavaScript Biblioteki React
          </p>
        </div>
        <div className={styles.projectsInfo}>
          <h2>Projects</h2>
          <ul>
            <li>
              <div className={styles.verticalLine}></div>
              <button className={styles.slide} onClick={project1ClickHandler}>
                AVA SKINS
              </button>
            </li>
            <li>
              <div className={styles.verticalLine}></div>
              <button className={styles.slide} onClick={project2ClickHandler}>
                AY BEAUTY
              </button>
            </li>
            <li>
              <div className={styles.verticalLine}></div>
              <button className={styles.slide} onClick={project3ClickHandler}>
                CLOUD PIXEL
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Info;
