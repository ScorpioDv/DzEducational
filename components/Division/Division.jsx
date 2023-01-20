import Router, { useRouter } from "next/router"
import React, { useState } from "react"
import styles from "./Division.module.scss"

export default function Division({division, stage, grade}) {
    let [isOn, setIsOn] = useState(false)
    function turn(){
        setIsOn(prev => !prev)
        console.log(isOn)
    }
    let router = useRouter()
    const  id  = Object.values(router.query).toString();
    console.log( "localhost:3000/" + id.replace("," ,"/") + division )
    function handleClick(page) {
        router.push( router.query.grade + "/" + page )
      }
    return(
        <>
        <a className={styles.ancher} href={router.query.grade + "/" + division}><div className={styles.dropdown} >
            <div className={styles.dropdown_content} onMouseDown={turn}>
                <h1>{division}</h1>
                <div className={styles.wrapper}>
                <h6>Number of Exams : 100</h6>
                </div>
                <img className={styles.logosub} src={division === "managementandeconomy" ? "http://localhost:3000/svg/managementAndEconomy.svg" : 
                division === "practicalscience" ? "http://localhost:3000/svg/praticalScience.svg" : 
                division === "mathematicsdivision" ? "http://localhost:3000/svg/mathematicsDivision.svg" : 
                division === "technicalmathematics" ? "http://localhost:3000/svg/technicalAthlete.svg" : 
                division === "offoreignlanguages" ? "http://localhost:3000/svg/offOreignLanguages.svg" : 
                division === "literatureandphilosophy" ? "http://localhost:3000/svg/literature.svg" : 
               
                console.log("error")} alt=""  width={"40px"}/>
                 <div className={styles.channel__backlayer} onMouseOver={()=> test()} ></div>
                </div>

              
        </div>
        </a>
        </>
    )

}
//                <img className={styles.arrow} src={"http://localhost:3000/vector.svg"} alt="" style={{transform: `rotate(${!isOn ? -90 : 0}deg)`}} width={"8px"}/> 


/* <div className={`dropdown_ ${isOn ? "unhide" : "hide"}`}>
                {props.content}
            </div>
           *//*                <img src={vector} alt="" style={{transform: `rotate(${!isOn ? -90 : 0}deg)`}} width={"8px"}/> 
*/