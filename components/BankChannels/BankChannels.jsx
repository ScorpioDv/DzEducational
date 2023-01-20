import React from "react"
import styles from "./BankChannels.module.scss";

export default function BankChannels() {
    function test(){
        console.log("hovered!")
    }
    return (
   
            <div className={styles.bank__channels}>

                <div className={styles.channel}>
                    <img src="http://localhost:3000/YoutubeCircle.png"  alt="" />
                    <div className={styles.channel__text}>
                    <h1 className={`hero green_txt`}>Hero</h1>
                    <h3 className={styles.channel__description}> Learn with fatima</h3>
                    <h6 className={styles.channel__subject__type}> French Teacher</h6>
                    </div>

                    <div className={styles.channel__backlayer} onMouseOver={()=> test()} ></div>
                </div>
                <div className={styles.channel}>
                    <img src="http://localhost:3000/YoutubeCircle.png"  alt="" />
                    <div className={styles.channel__text}>
                    <h1 className={`hero purple_txt`}>Hero</h1>
                    <h3 className={styles.channel__description}> Learn with fatima</h3>
                    <h6 className={styles.channel__subject__type}> French Teacher</h6>
                    </div>

                    <div className={styles.channel__backlayer} onMouseOver={()=> test()} ></div>
                </div>
                <div className={styles.channel}>
                    <img src="http://localhost:3000/YoutubeCircle.png"  alt="" />
                    <div className={styles.channel__text}>
                    <h1 className={`hero orange_txt`}>Hero</h1>
                    <h3 className={styles.channel__description}> Learn with fatima</h3>
                    <h6 className={styles.channel__subject__type}> French Teacher</h6>
                    </div>

                    <div className={styles.channel__backlayer} onMouseOver={()=> test()} ></div>
                </div>
            </div>
    )
}