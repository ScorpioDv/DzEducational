import React from "react"
import { useState } from "react"
import styles from "./Headers.module.scss"

export default function Themes() {
    let {theme, setTheme} = useState("1")
    function selectTheme(){
        setTheme(prevTheme => {
            
        })
    }
    return (
   
            <div className={`${styles.themes} row`}>
                <div className={`${styles.theme} red circle `}></div>
                <div className={`${styles.theme} purple circle `}></div>
                <div className={`${styles.theme} green circle `}></div>
                <div className={`${styles.theme} blue circle `}></div>
            </div>
    )
}