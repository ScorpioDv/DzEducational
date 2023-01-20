import React from 'react'
import styles from "./Downbar.module.scss"


export default function Downbar() {

    return(
        <nav className={styles.DownbarContainer}>
            <div className={styles.Downbar}>
            <div>
            <img src="http://localhost:3000/icrn.svg" alt="" />
            </div>
            <div>
            <img src="http://localhost:3000/doc.svg" alt="" />
            </div >
            <div>
            <img src="http://localhost:3000/file.svg" alt="" />

            </div>

            </div>
            <script src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
        </nav>
    )
}