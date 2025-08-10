import styles from "../navbar/navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { navbarData } from "../../utils/data";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import Donate from "../../events/Donate";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleBar = () => {
    setOpen((prev) => !prev);
  };
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setOpen((prev) => !prev);
  }, [location]);

  return (
    <div>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img src="./src/assets/ngo.png" alt="NGO Logo" />
            {/* <h2>Trafalgar</h2> */}
          </div>
          <ul className={`${styles.navLists} ${open ? styles.show : ""}`}>
            {navbarData.map((item) => (
              <li key={item.id} className={styles.navList}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeNavItem : ""
                  }
                  to={item.path}
                >
                  {item.navItem}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.icon}>
            {open ? (
              <VscChromeClose onClick={toggleBar} />
            ) : (
              <FaBars onClick={toggleBar} />
            )}
          </div>
          <Donate/>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
