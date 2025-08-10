import styles from "../events/donate.module.css";
const Donate = () => {
  const handleClick = (e) => {
    e.preventDefault;
    alert("Clicked Button");
  };
  const handleSubmit = (e) => {
    e.preventDefault;
    alert("COMING SOON");
  };

  return (
    <div className={styles.donateButton}>
      <form onSubmit={handleSubmit}>
        {/* <input onChange={handleChange} type="text" placeholder="Enter ur Name" /> */}
        <button onClick={handleClick}>Donate</button>
      </form>
    </div>
  );
};

export default Donate;
