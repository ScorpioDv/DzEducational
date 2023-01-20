import React from 'react'
import styles from "./Downbar.module.scss"


export default function Downbar() {

    return(
        <nav className={styles.DownbarContainer}>
            <div className={styles.Downbar}>
            <div>
            <img src="/icrn.svg" alt="" />
            </div>
            <div>
            <img src="/doc.svg" alt="" />
            </div >
            <div>
            <img src="/file.svg" alt="" />

            </div>

            </div>
        </nav>
    )
}