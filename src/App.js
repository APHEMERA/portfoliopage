import { Fragment, useRef } from "react";
import styles from "./App.module.css";
import BackgroundVideo from "./components/BackgroundVideo";
import Header from "./components/Header";
import Info from "./components/Info";
import Projects from "./components/Projects";
function App() {
  const refs = {
    project1Ref: useRef(null),
    project2Ref: useRef(null),
    project3Ref: useRef(null),
  };
  return (
    <Fragment>
      <BackgroundVideo />
      <div className={styles.contentTop}>
        <Header />
        <Info projectRefs={refs} />
      </div>
      <Projects ref={refs} />
    </Fragment>
  );
}

export default App;
