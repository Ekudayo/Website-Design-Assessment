import styles from "../whatHome/whatHome.module.css";
import Icon from "../../assets/icon.png";
import IconOne from "../../assets/iconOne.png";
import IconTwo from "../../assets/iconTwo.png";
import IconThree from "../../assets/iconThree.png";
import smallBoy from "../../assets/samllboy.png";

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
            <img src={Icon} alt="icon" />
            <div className={styles.iconText}>
              <h3>Family support</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className={styles.icons}>
            <img src={IconOne} alt="icon" />
            <div>
              <h3>Health benefits</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className={styles.icons}>
            <img src={IconTwo} alt="icon" />
            <div>
              <h3>Scholarships</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
          </div>
          <div className={styles.icons}>
            <img src={IconThree} alt="icon" />
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
      <img src={smallBoy} alt="boy" />
    </div>
  );
};

export default WhatHome;
