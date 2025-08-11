import styles from "../know/know.module.css";
import Learn from "../../events/Learn.jsx";
import childrenImage from "../../assets/children.jpg";
import logoOne from "../../assets/LogoOne.png";
import logoThree from "../../assets/LogoThree.png";
import logoFour from "../../assets/LogoFour.png";
import logoSix from "../../assets/LogoSix.png";
import logoFive from "../../assets/LogoFive.png";     
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

        <img src={childrenImage} alt="Children" />
      </div>
      <div>
        <div className={styles.support}>
          <span> Our Supporter</span> <hr className={styles.lineTwo} />
        </div>
        <div className={styles.logos}>
          <img src={logoOne} alt="Logos" />
          <img src={logoThree} alt="Logos" />
          <img src={logoSix} alt="Logos" />
          <img src={logoFour} alt="Logos" />
          <img src={logoFive} alt="Logos" />
          <img src={logoSix} alt="Logos" />
        </div>
      </div>
    </section>
  );
};

export default Know;
