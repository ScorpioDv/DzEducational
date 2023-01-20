import styles from "./SocialMedia.module.scss"

export default function SocialMedia(){
    return(
        <>
        <div className={styles.SocialMediaContainer}>
        
            <div className={`${styles.SocialMedia} ${styles.Discord}`}>
            <img src="http://localhost:3000/telegram%201.svg" alt="" />
            <h1 className={styles.Gradiant_txt}>Discord</h1>
            </div>
            <div className={`${styles.SocialMedia} ${styles.Facebook}`}>
            <img src="http://localhost:3000/telegram%201.svg" alt="" />
            <h1 className={styles.Gradiant_txt}>Facebook</h1>
            </div>
            <div className={`${styles.SocialMedia} ${styles.Instagram}`}>
            <img src="http://localhost:3000/telegram%201.svg" alt="" />
            <h1 className={styles.Gradiant_txt}>Instagram</h1>
            </div>
            <div className={`${styles.SocialMedia} ${styles.Twitter}`}>
            <img src="http://localhost:3000/telegram%201.svg" alt="" />
            <h1 className={styles.Gradiant_txt}>Twitter</h1>
            </div>
            <div className={`${styles.SocialMedia} ${styles.Telegram}`}>
            <img src="http://localhost:3000/telegram%201.svg" alt="" />
            <h1 className={styles.Gradiant_txt}>Telegram</h1>
            </div>
            <div className={`${styles.SocialMedia} ${styles.Whatsapp}`}>
            <img src="http://localhost:3000/telegram%201.svg" alt="" />
            <h1 className={styles.Gradiant_txt}>Whatsapp</h1>
            
            </div>
        </div>
        </>
    )
}