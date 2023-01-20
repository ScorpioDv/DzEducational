import Router, { useRouter } from "next/router"
import React, { useState } from "react"
import styles from "./Subject.module.scss"

export default function Subject({Subject, stage, grade, data}) {
    let [isOn, setIsOn] = useState(false)
    function turn(){
        setIsOn(prev => !prev)
        console.log(isOn)
    }
    let router = useRouter()
    const  id  = Object.values(router.query).toString();
    console.log( id.replace("," ,"/")  )
    function handleClick(page) {
        router.push( router.query.grade + "/" + page )
      }

      console.log(Subject)
      console.log(grade)
      let NumberOfSujets = data.sujets[grade] && Object.values(data.sujets[grade]).filter(item => (item.subject.toLowerCase() === Subject.toLowerCase()) && (item.year.toLowerCase() === grade.toLowerCase())).length
      console.log(NumberOfSujets)
    return(
        <>
        <a className={styles.ancher} href={router.query.division ? router.query.division + "/" + Subject : router.query.grade + "/" + Subject}><div className={styles.dropdown}>
            <div className={styles.dropdown_content} onMouseDown={turn}>
                <h1>{Subject}</h1>
                <div className={styles.wrapper}>
                <h4>Number of Exams : {NumberOfSujets ? NumberOfSujets : 0}</h4>
                </div>
                <img className={styles.logosub} src={Subject === "maths" ? "/svg/Maths.svg" : 
                Subject === "science" ? "/svg/Science.svg" : 
                Subject === "history" ? "/svg/history.svg" : 
                Subject === "informatique" ? "/svg/informatique.svg" : 
                Subject === "madania" ? "/svg/Madania.svg" : 
                Subject === "music" ? "/svg/Music.svg" : 
                Subject === "islamic" ? "/svg/islamic.svg" : 
                Subject === "french" ? "/svg/french.svg" : 
                Subject === "arabic" ? "/svg/Arabic.svg" : 
                Subject === "english" ? "/svg/English.svg" :
                Subject === "physics" ? "/svg/physics.svg" :
                Subject === "art" ? "/svg/Art.svg" :
                Subject === "amazigh" ? "/svg/amazighs.svg" :
                Subject === "philosophy" ? "/svg/philosophy.svg" :
                console.log("error")} alt=""  width={"40px"}/>
                 <div className={styles.channel__backlayer} onMouseOver={()=> test()} ></div>
                </div>

              
        </div>
        </a>
        </>
    )

}
//                <img className={styles.arrow} src={"/vector.svg"} alt="" style={{transform: `rotate(${!isOn ? -90 : 0}deg)`}} width={"8px"}/> 


/* <div className={`dropdown_ ${isOn ? "unhide" : "hide"}`}>
                {props.content}
            </div>
           *//*                <img src={vector} alt="" style={{transform: `rotate(${!isOn ? -90 : 0}deg)`}} width={"8px"}/> 
*/