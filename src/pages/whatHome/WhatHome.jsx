import styles from "../whatHome/whatHome.module.css";


const WhatHome = () => {
  return (
    <div className={styles.what}>
      <div className={styles.leftContent}>
        <hr className={styles.line} />
        <div className={styles.leftCont}>
          <span>What We Do</span>
          <h1>Some services we provide for our children</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className={styles.icons}>
            <img src="./src/assets/icon.png" alt="icon" />
            <div className={styles.iconText}>
              <h3>Family support</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className={styles.icons}>
            <img src="./src/assets/iconOne.png" alt="icon" />
            <div>
              <h3>Health benefits</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className={styles.icons}>
            <img src="./src/assets/iconTwo.png" alt="icon" />
            <div>
              <h3>Scholarships</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className={styles.icons}>
            <img src="./src/assets/iconThree.png" alt="icon" />
            <div>
              <h3>Therapy</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src="./src/assets/samllboy.png" alt="" />
    </div>
  );
};

export default WhatHome;
