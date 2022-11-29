import styles from "./Search.module.css";

export default function Search() {
    return (
        <div className={styles.container}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
            
            <form className={styles.search_bar} action="">
            <input type="text" placeholder="e.g. Adobo" />
            <button><i className="material-icons">search</i></button>
            </form>
      </div>
    )
}