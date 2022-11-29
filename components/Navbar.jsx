import styles from "./Navbar.module.css";
import Weblogo1 from "./Weblogo1";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.webname}>
        <Weblogo1 />
      </div>
      <div className={styles.ref_buttons}>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">MENU</a>
        </li>
        <li>
          <a href="#">ABOUT US</a>
        </li>
      </div>
    </div>
  );
}
