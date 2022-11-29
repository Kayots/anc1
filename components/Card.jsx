import styles from "./Card.module.css";
import Image from 'next/image';
import adobo from '../public/Rectangle 9-1.png';
import { useEffect, useState } from 'react'

export default function Card() {
    const [menus, setMenus] = useState([])
    
    useEffect(() => {
        fetch("https://drive.google.com/file/d/1EvaOF-oRA9-HLb_Glm94ImJ5i6VDnwFZ/view?usp=share_link")
        .then((res) => res.json())
        .then((data) => {
          setMenus(data)
        })
      }, [])
    

    return (
        <div className={styles.container}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
                {menus.results?.map( menu => (
                    <>
                    <div key ={menu.title} className={styles.img_container}> 
                    <Image className={styles.card_img} src={adobo} alt="Vercel Logo"/>
                    </div>
                    <h1 className={styles.card_title}>{menu.title}</h1>
                    <h1 className={styles.card_body}>
                        Chicken Adobo is a type of Filipino chicken stew. 
                        Chicken pieces are marinated in soy sauce and spices, pan-fried, and stewed until tender. 
                        The dish gained popularity because of its delicious taste and ease in preparation. 
                    </h1>
                    <h1 className={styles.card_price}>Price: Php 50</h1>
                    <button className={styles.card_button}> Add to Order </button>
                    </>
                ))}
        </div>
    )
}