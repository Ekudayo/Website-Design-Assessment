import styles from "../../pages/Know/know.module.css";
import Learn from "../../events/Learn.jsx";
const Know = () => {
  return (
    <section>
      <div className={styles.know}>
        <div className={styles.leftContent}>
          <hr className={styles.line} />
          <div className={styles.leftCont}>
            <span>Know About Us</span>
            <h1>We provide a place for children with special needs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <p>
              ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
              ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
              tristique posuere.
            </p>
            <Learn />
          </div>
        </div>

        <img src="./src/assets/children.jpg" alt="picture" />
      </div>
      <div>
        <div className={styles.support}>
          <span> Our Supporter</span> <hr className={styles.lineTwo} />
        </div>
        <div className={styles.logos}>
          <img src="./src/assets/LogoThree.png" alt="Logos" />
          <img src="./src/assets/LogoOne.png" alt="Logos" />
          <img src="./src/assets/LogoThree.png" alt="Logos" />
          <img src="./src/assets/LogoSix.png" alt="Logos" />
          <img src="./src/assets/LogoFour.png" alt="Logos" />
          <img src="./src/assets/LogoSix.png" alt="Logos" />
        </div>
      </div>
    </section>
  );
};

export default Know;
