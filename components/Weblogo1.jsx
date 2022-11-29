import styles from "./Weblogo1.module.css";
import weblogo from "../public/anclogo.png";
import Image from "next/image";

export default function Weblogo1() {
  return (
    <div className={styles.container}>
      <div className={styles.weblogo}>
        <Image src={weblogo} alt="weblogo" />

        <div className={styles.name}>
          <h1>
            <b>A</b>dobo <b>N</b>i <b>C</b>hing
          </h1>
          <p>Mary Chris Complex Phase 4, General Trias City, Cavite</p>
        </div>
      </div>
    </div>
  );
}
