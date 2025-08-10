import React from "react";

import styles from "../events/subscribe.module.css";
const Subscribe = () => {
  const handleClick = (e) => {
    e.preventDefault;
    alert("Clicked Button");
  };
  const handleSubmit = (e) => {
    e.preventDefault;
    alert("COMING SOON");
  };

  return (
    <div className={styles.subscribeButton}>
      <form onSubmit={handleSubmit}>
        {/* <input onChange={handleChange} type="text" placeholder="Enter ur Name" /> */}
        <button onClick={handleClick}>Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
