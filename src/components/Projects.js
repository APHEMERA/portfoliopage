import { forwardRef } from "react";
import styles from "./Projects.module.css";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
const Projects = forwardRef((props, ref) => {
  return (
    <section className={styles.projectsSection}>
      <Project1 ref={ref.project1Ref} />
      <Project2 ref={ref.project2Ref} />
      <Project3 ref={ref.project3Ref} />
    </section>
  );
});
export default Projects;
