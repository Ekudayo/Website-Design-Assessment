import styles from "../home/home.module.css";
import What from "../../events/What.jsx";
import Know from "../know/Know.jsx";
import WhatHome from "../whatHome/WhatHome.jsx";
import Project from "../project/Project.jsx";
import Spending from "../spending/Spending.jsx";
import Contribute from "../contribute/Contribute.jsx";
import Our from "../our/Our.jsx";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.text}>
            <h1>Inclusive care for children with special needs</h1>
            <What />
          </div>
          <div className={styles.children}>
            <span>230 children under our care</span>
            <hr className={styles.line} />
            <span>58 donations collected</span>
          </div>
        </div>
      </div>
      <Know />
      <WhatHome />
      <Project />
      <Spending />
      <Contribute />
      <Our />
    </div>
  );
};

export default Home;
