import { useState } from "react";
import styles from "./NavButtons.module.scss";
export default function NavButtons(){
    return(
        <>
        <div className={styles.navLeft}>
        <div className={styles.navIcons}>
            <img src="/Youtube.svg" alt="" />
            <img src="/Lightbolb.svg" alt="" />
        </div>
        <div className={styles.languageButtonContainer}>
            <button className={styles.languageButton}>Arabic</button>
            <img src="http://localhost:3001/AlgFlag.svg" alt=""/>
        </div>
    
        </div>
      
        </>
    )
}