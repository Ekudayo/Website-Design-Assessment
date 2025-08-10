import styles from "../events/what.module.css";
const What = () => {
  const handleClick = (e) => {
    e.preventDefault;
    alert("Clicked Button");
  };
  const handleSubmit = (e) => {
    e.preventDefault;
    alert("COMING SOON");
  };

  return (
    <div className={styles.whatButton}>
      <form onSubmit={handleSubmit}>
        <button onClick={handleClick}>What We Do</button>
      </form>
    </div>
  );
};

export default What;
