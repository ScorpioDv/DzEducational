import styles from "./Footer.module.scss"

export default function Footer(){
    return(
       <>
       <footer className={styles.Footer}>

        <div className={styles.upperFooter}>
            <div className={styles.leftFooter}>
            <h1>Sections</h1>
                <div>   
                <h3>Section 1</h3>
                <h3>Section 2</h3>
                <h3>Section 3</h3>
                <h3>Section 4</h3>
                </div>
             
            </div>
            <div className={styles.middleFooter}>
                <img src="/RealLogo.svg" alt="" />
            </div>
            <div className={styles.rightFooter}>
                <h1>About Us</h1>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s .</h3>
            </div>
        </div>
        <div className={styles.bottomFooter}>
            <h1>Our Social Media</h1>
            <div className={styles.Socials}>
            <div>
            <img src="/TiktokSocial.svg" alt="" />
            </div>
            <div>
            <img src="/FacebookSocial.svg" alt="" />
            </div>
            <div>
            <img src="/TwitterSocial.svg" alt="" />
            </div>
            <div>
            <img src="/InstaSocial.svg" alt="" />
            </div>
            <div>
            <img src="/DiscordSocial.svg" alt="" />
            </div>
            <div>
            <img src="/YoutubeSocial.svg" alt="" />
            </div>
            </div>
          
        </div>
        <img className={styles.algeriaFlag} src="/AlgeriaFlag.svg" alt="" width={45}/>
       </footer>
       </> 
    )
}