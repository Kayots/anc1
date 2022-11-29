import Card from "./Card";
import styles from "./Card_Container.module.css";

export default function Card_Container() {
    return (
        <div className={styles.container}>
        <Card />
        </div>
    )
}