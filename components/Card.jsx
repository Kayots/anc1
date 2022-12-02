import styles from "./Card.module.css";
import { useEffect, useState } from 'react'

export default function Card({ query }) {
    const [menus, setMenus] = useState([])
    
    useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/63863ca77966e84526cf79f9")
        .then((res) => res.json())
        .then((data) => {
          setMenus(data)
        })
      }, [])
    

    return (
        <div className= {styles.card_container}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
                {menus.record?.filter(menu => {
                    if (query === "") {
                    return menu
                    } else if (menu.title.toLowerCase().includes(query.toLowerCase())) {
                    return menu
                    } 
                }).map( menu => (  
                <div className={styles.container}>
                    <div key ={menu.title} className={styles.img_container}> 
                    <img className={styles.card_img} src={menu.image} alt="Food Image"/>
                    </div>
                    <h1 className={styles.card_title}>{menu.title}</h1>
                    <h1 className={styles.card_body}>
                    {menu.body}
                    </h1>
                    <h1 className={styles.card_price}>{menu.price}</h1>
                    <button className={styles.card_button}> Add to Order </button>
                </div>          
                ))}
        </div>
    )
}