import React from "react"
import styles from "./HelpCards.module.scss"
export default function HelpCards() {
    return (
        <>
        <div className={styles.help__cards}>

        <h1 className="purple__txt hero">Need Help?</h1>

            <div className={styles.first__help__cards}>
            <div className={styles.help__card}>
                <div className={styles.help__card__header}>
                quis hendrerit dolor
                </div>
                <div className={styles.help__card__content}>

                <img src="/assets/icons/fav.svg" alt="" width={"38px"} />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.
                </div>
                <div className={styles.help__card__backlayer}></div>
            </div>
        <div className={styles.help__card}>
            
                <div className={styles.help__card__header}>
                quis hendrerit dolor
                </div>
                <div className={styles.help__card__content}>

                <img src="/assets/icons/Arhive_fill@3x.svg" alt="" width={"50px"} />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.
                </div>
                <div className={styles.help__card__backlayer}></div>
            </div>
            <div className={styles.help__card}>
                <div className={styles.help__card__header}>
                quis hendrerit dolor
                </div>
                <div className={styles.help__card__content}>

                <img src="/assets/icons/Book_open_duotone.svg" alt="" width={"50px"} />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.
                </div>
                <div className={styles.help__card__backlayer}></div>
            </div>
            <div className={styles.help__card}>
                <div className={styles.help__card__header}>
                quis hendrerit dolor
                </div>
                <div className={styles.help__card__content}>

                <img src="/assets/icons/Clock.svg" alt="" width={"50px"} />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.
                </div>
                <div className={styles.help__card__backlayer}></div>
            </div>
            <div className={styles.help__card}>
                <div className={styles.help__card__header}>
                quis hendrerit dolor
                </div>
                <div className={styles.help__card__content}>

                <img src="/assets/icons/Stories.svg" alt="" width={"50px"} />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.
                </div>
                <div className={styles.help__card__backlayer}></div>
            </div>
            <div className={styles.help__card}>
                <div className={styles.help__card__header}>
                quis hendrerit dolor
                </div>
                <div className={styles.help__card__content}>

                <img src="/assets/icons/InformationMark.svg" alt="" width={"35px"} />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.
                </div>
                <div className={styles.help__card__backlayer}></div>
            </div>


            </div>
        </div>

        
        </>
    )
}