import video from "../assets/black-background.mp4";
import styles from "./BackgroundVideo.module.css";
const Background = () => {
  return (
    <div className={styles.videoParent}>
      <video autoPlay loop muted className={styles.video}>
        <source src={video} type="video/mp4" className={styles.source}></source>
      </video>
    </div>
  );
};
export default Background;
