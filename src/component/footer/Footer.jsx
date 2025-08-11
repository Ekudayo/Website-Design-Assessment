import styles from "../footer/footer.module.css";
import Subscribe from "../../events/Subscribe";
import ngoLogo from "../../assets/ngo.png";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={ngoLogo} alt="NGO Logo" />

      <ul className={styles.nav}>
        <li>Home</li>
        <li>About US</li>
        <li>What we do</li>
        <li>Media</li>
        <li>Contact</li>
      </ul>
      <ul className={styles.nav}>
        <li>More</li>
        <li>Projects</li>
        <li>Events</li>
        <li>Donate</li>
        <li>Blog</li>
      </ul>
      <ul className={styles.nav}>
        <li>Connect</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Linkdin</li>
      </ul>

      <div className={styles.formFilling}>
        <h1>Subscribe to get latest updates</h1>
        <div className={styles.for}>
          <form className={styles.form} id="message" action="search">
            <input type="text" placeholder="Your email" />
          </form>
          <Subscribe className={styles.Subscribe} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
