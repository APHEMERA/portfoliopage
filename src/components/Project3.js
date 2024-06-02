import { forwardRef } from "react";
import styles from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const Project2 = forwardRef((props, ref) => {
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div ref={ref} className={styles.projectParent}>
      <div className={styles.project}>
        <div className={styles.projectLeftSide}>
          <video autoPlay loop muted className={styles.video}>
            <source
              src={require("../assets/project_videos/aybeauty-overview.mp4")}
              type="video/mp4"
              className={styles.source}
            ></source>
          </video>
        </div>
        <div className={styles.projectRightSide}>
          <div className={styles.languages}>
            <ul>
              <li className={styles.lang_react}>React</li>
              <li className={styles.lang_css}>CSS</li>
            </ul>
          </div>
          <h2>CLOUD PIXEL</h2>
          <p>Niniejsza strona jest galerią zdjęć i wideo. Do danych wykorzystano Pexels API.</p>
          <p>
            Na stronie można wyszukiwać dowolne zdjęcia i wideo, filtrować, dodawać do ulubionych, tworzyć kolekcje a
            także pobierać w dowolnej rozdzielczości.
          </p>
          <a href="https://cloud-pixel-portfolio.vercel.app">
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
export default Project2;
