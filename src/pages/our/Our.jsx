import styles from "../our/our.module.css";
import Arrow from "../../assets/arrow.png";

const Our = () => {
  return (
    <div className={styles.our}>
      <div className={styles.top}>
        <h1>Our Events</h1>
        <hr className={styles.line} />
      </div>

      <div className={styles.card}>
        <div className={styles.down}>
          <div className={styles.num}>
            <h1>13</h1>
            <span>APR</span>
          </div>
          <div className={styles.next}>
            <div className={styles.downDown}>
              <span>NEXT EVENTS</span>
              <hr />
            </div>
            <h3>A day with our wonderful children </h3>
          </div>
          <div className={styles.arrow}>
            <img src="./src/assets/Arrow.png" alt="Arrow" />
          </div>
        </div>
        <div className={styles.down}>
          <div className={styles.num}>
            <h1>25</h1>
            <span>APR</span>
          </div>
          <div className={styles.next}>
            <div className={styles.downDown}>
              <span>NEXT EVENTS</span>
              <hr />
            </div>
            <h3>Seminar: Caring for children with autism </h3>
          </div>
          <div className={styles.arrow}>
            <img src={Arrow} alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our;
