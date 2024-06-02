import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.list}>
        <li>
          <button
            className={styles.mailto}
            onClick={() => {
              window.location.href = "mailto:romann.romanchuk@gmail.com";
            }}
          >
            romann.romanchuk@gmail.com
          </button>
        </li>
        <li>
          <a href="https://github.com/APHEMERA">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/roman-romanchuk-005404216/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
