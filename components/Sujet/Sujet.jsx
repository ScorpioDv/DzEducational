import styles from "./Sujet.module.scss"
import { useRouter } from "next/router"
import { useState,useEffect } from "react";
export default function Sujet(props){
    const router = useRouter();
    const path = router.asPath;
    const [src, setSrc] = useState(props.currentData.sujet);

    const refreshIFrame = () => {
      setSrc("sh");
      setSrc(src);
    };

    



    let matchingSujets = Object.values(props.data).filter(item => item.subject.toLowerCase() === router.query.subject.toLowerCase() && item.type === props.currentData.type)
    let matchingAfterSujet = matchingSujets.filter(item => (item.id === props.currentData.id + 1) && (item.tirm === props.currentData.tirm))
    let matchingBeforeSujet = matchingSujets.filter(item => (item.id === props.currentData.id - 1) && (item.tirm === props.currentData.tirm))
    //let vali = [props.data].map((data) => Object.values(data).filter((item => (item.stage === props.currentData.stage && item.subject === props.currentData.subject)  &&  (item.year === props.currentData.year && item.tirm === props.currentData.tirm))))
   // let shha = vali.map((data,index) => data.map((data,index) => [[data].filter(item => item.uuid === props.currentData.uuid), index]))
   // console.log(shha.filter(item => item.filter(item => console.log(item))))//data.filter(item => item.uuid === props.currentData.uuid)
   // let ooo = shha.filter(item => item)
    console.log("hi")
    function handleNextClick(page) {
       matchingAfterSujet && router.push(path.replace(props.currentData.uuid, matchingAfterSujet[0].uuid))
       setSrc(matchingAfterSujet[0].sujet)
      }
      function handleBeforeClick(page) {
        router.push(path.replace(props.currentData.uuid, matchingBeforeSujet[0].uuid))
        setSrc(matchingBeforeSujet[0].sujet)
      }
      //console.log(matchingAfterSujet)

     //console.log(ooo.filter(item => item.filter(item => item.length)[1]))



      let obj = {
        shit:"shit",
        ass:"ahhh",

      }
      obj["key3"] = "value3";

      console.log(obj)
    return(
        <>
        <div className={styles.sujetContainer}>
        <div className={styles.sujetHeader}>
            <button className={styles.prevButton} onClick={handleBeforeClick} disabled={matchingBeforeSujet[0] ? false : true}><img src="http://localhost:3000/prev.svg" width={"40px"}/></button>
            <p className={styles.sujetTitle}>Lorem ipsum dolor, siT amet consectetur adipisicing elit</p>
            <button className={styles.nextButton} onClick={ handleNextClick} disabled={matchingAfterSujet[0] ? false : true}><img src="http://localhost:3000/prev.svg" width={"40px"} style={{rotate:"180deg"}}/></button>

        </div>
        <iframe
            src={src.split("/view?usp=drivesdk")[0] + "/preview"}
            type={"application/pdf"} 
            height="700" 
            width="80%" 
            className={styles.sujet}
            >

        </iframe>
        <div className={styles.sujetButtons}>
            <a href={props.currentData.downloadUrl} className={styles.tag}><button className={styles.button}> <img className={styles.buttonIcon} src="http://localhost:3000/Download.svg" alt="" /> </button></a>
            <button className={styles.button}> <img className={styles.buttonIcon} src="http://localhost:3000/Upscale.svg" alt="" /> </button>
            <button className={styles.button} onClick={refreshIFrame}> <img className={styles.buttonIcon} src="http://localhost:3000/Refresh.svg" alt="" /> </button>
        </div>
        </div>
        </>
    )
}//<a target={"_blank"} href={props.currentData.sujet} className={styles.tag}> </a>