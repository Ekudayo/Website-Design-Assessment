import styles from "../contribute/contribute.module.css";
import React from "react";
import Donate from "../../events/Donate";
import Join from "../../events/Join";
const Contribute = () => {
  return (
    <div className={styles.contribute}>
      <img src="./src/assets/BG.png" alt="BG pix" />
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
