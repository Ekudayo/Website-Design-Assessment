import styles from "../spending/spending.module.css";
import React from "react";
import DoughNut from "../doughnutChart/DoughNut.jsx";
const Spending = () => {
  return (
    <div className={styles.spending}>
      <div className={styles.spend}>
        <h1>How we spend your donations and where it goes</h1>
        <p>
          We understand that when you make a  donation, you want to know exactly
          where your money is going and we pledge to be transparent.
        </p>
        <ol>
          <li>40% child care home</li>
          <li>35% cleanliness program</li>
          <li>10% helping people</li>
          <li>10% excursions</li>
          <li>5% feeding the poor</li>
        </ol>
      </div>

      <DoughNut  />
    </div>
  );
};

export default Spending;
