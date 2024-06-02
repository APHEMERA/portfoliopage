import { forwardRef } from "react";
import styles from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const Project1 = forwardRef((props, ref) => {
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div ref={ref} className={styles.projectParent}>
      <div className={styles.project}>
        <div className={styles.projectLeftSide}>
          <video autoPlay loop muted className={styles.video}>
            <source
              src={require("../assets/project_videos/avaskins-overview.mp4")}
              type="video/mp4"
              className={styles.source}
            ></source>
          </video>
        </div>
        <div className={styles.projectRightSide}>
          <div className={styles.languages}>
            <ul>
              <li className={styles.lang_html}>HTML</li>
              <li className={styles.lang_css}>CSS</li>
              <li className={styles.lang_js}>JavaScript</li>
            </ul>
          </div>
          <h2>AVA SKINS</h2>
          <p>
            Ta strona jest rynkiem gry Counter Strike: Global Offensive, gdzie możesz kupić dowolne skiny. Wyszukiwaj,
            sortuj, dodawaj do koszyka - wszystko będzie się wyświetlać.
          </p>
          <p>Do danych wykorzystano pliki JSON.</p>
          <a href="https://avaskins-portfolio.vercel.app">
            <button className={styles.slide}>Otwórz</button>
          </a>
          <button className={styles.scrollToTop} onClick={scrollToTopHandler}>
            <FontAwesomeIcon icon={faArrowUp} size="2xl" style={{ color: "#fff" }} />
          </button>
        </div>
      </div>
    </div>
  );
});
export default Project1;
