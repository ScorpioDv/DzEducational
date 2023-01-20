import { useState } from "react";
import styles from "./NavButtons.module.scss";
export default function NavButtons(){
    return(
        <>
        <div className={styles.navLeft}>
        <div className={styles.navIcons}>
            <img src="http://localhost:3000/Youtube.svg" alt="" />
            <img src="http://localhost:3000/Lightbolb.svg" alt="" />
        </div>
        <div className={styles.languageButtonContainer}>
            <button className={styles.languageButton}>Arabic</button>
            <img src="http://localhost:3001/AlgFlag.svg" alt=""/>
        </div>
    
        </div>
      
        </>
    )
}