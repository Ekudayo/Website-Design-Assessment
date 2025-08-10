import styles from "../events/join.module.css"

const Join = () => {
  const handleClick = (e) => {
    e.preventDefault;
    alert("Clicked Button");
  };
  const handleSubmit = (e) => {
    e.preventDefault;
    alert("COMING SOON");
  };

  return (
    <div className={styles.joinButton}>
      <form onSubmit={handleSubmit}>
        {/* <input onChange={handleChange} type="text" placeholder="Enter ur Name" /> */}
        <button onClick={handleClick}>Join as volunteer</button>
      </form>
    </div>
  );
};

export default Join;
