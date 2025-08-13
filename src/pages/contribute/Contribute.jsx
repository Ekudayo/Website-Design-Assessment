import styles from "../contribute/contribute.module.css";
import Donate from "../../events/Donate";
import Join from "../../events/Join";
import BG from "../../assets/bgPix.png"
const Contribute = () => {
  return (
    <div className={styles.contribute}>
      <img src={BG} alt="BG pix" />
      <div className={styles.text}>
        <h3>
          You can contribute to provide a place for children with special needs!
        </h3>
        <div className={styles.button}>
          <Join />
          <Donate />
        </div>
      </div>
    </div>
  );
};

export default Contribute;
