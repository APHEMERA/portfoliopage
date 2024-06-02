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
              <li className={styles.lang_html}>HTML</li>
              <li className={styles.lang_scss}>SCSS</li>
              <li className={styles.lang_js}>JavaScript</li>
            </ul>
          </div>
          <h2>AY BEAUTY</h2>
          <p>
            Niniejsza strona jest internetowym sklepem z kosmetykami. Do danych wykorzystano API sklepu Sephora Store.
          </p>
          <p>
            Ważne: jeśli na stronie nie wyświetla się żaden produkt, oznacza to, że osiągnięto limit żądań i potrzebny
            jest kolejny klucz API.
          </p>
          <a href="ay-beauty-portfolio.vercel.app">
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
