import arrow from "../../../public/AHHHH.svg"
import styles from "./navDropDown.module.scss";
import { useState } from "react";
import Router from 'next/router'


export default function NavDropDown(props) {
  const grades = props.first;
  let [isHovered, setIsHovered] = useState(false)
  let orange = ""
  let green = ""
  let purple = ""
 function HoverHandle(){
  setIsHovered(prev => !prev)
  console.log(isHovered)
 }
 
 function handleClick(page) {
  Router.push("http://localhost:3000/" + page)
}//${props.color === "purple" ? "#EB79FE"}
 const list = grades.map((grade)  => (
  
  <li className={`${styles.dropDown} ${props.color === "purple" ? styles.purpleBackground : props.color === "orange" ? styles.orangeBackground : props.color === "green" && styles.greenBackground}`} onClick={() => handleClick(grade.link)}>{grade.grade}
  <div className={styles.dropdown_Right}>

  <img className={styles.gradeImg} src={grade.logo} alt="" width={"20"} />
  </div>
   
  </li>

 ))
 console.log(props)
  return (
    <>

    <div
      className={`${styles.dropdown}`}
      style={{ dispaly: `${isHovered ? "block" : "none"}` }}
    >
                 <div className={styles.line} style={{backgroundColor: `${props.color === "purple" ? "#ea79fec5" : props.color === "orange" ? "#FEC179c5" : props.color === "green" && "#79FEBEc5"}`}}></div>
 
      <li
        className={`${styles.grades}`}
        onClick={() => HoverHandle()}
        style={{ cursor: "pointer" }}
      >
        <div className={`${styles.gradename}`}>
          one Lorem{" "}
          <img src="http://localhost:3000/AHHHH.svg" width={"10px"} height={"20px"} style={{transform: `rotate(${isHovered ? "180deg" : "0deg"})`, transition:"all .2s ease-in-out"}} />

          <div className={`${styles.subject__number}`}>
            {" "}
           <p className={`${styles.number_sub} ${props.color === "purple" ? styles.purple : props.color === "orange" ? styles.orange : props.color === "green" && styles.green}`} > {props.numberOfSujets}+</p>{" "}
          </div>
        </div>
        <div
          className={`${styles.hypes} ${isHovered ? styles.on : styles.off}`}
        >
            <ul>
          {list}
          </ul>

        </div>
      </li>
    </div>
    </>
  );
}


/*import arrow from "../../../public/AHHHH.svg"
import styles from "./navDropDown.module.scss";
import { useState } from "react";
export default function NavDropDown(props) {

  let [isHovered, setIsHovered] = useState(false)
 function HoverHandle(){
  setIsHovered(prev => !prev)
  console.log(isHovered)
 }
 
  return (
    <div
      className={`${styles.dropdown}`}
      style={{ dispaly: `${isHovered ? "block" : "none"}` }}
    >
                 <div className={styles.line}></div>
 
      <li
        className={`${styles.grades}`}
        onClick={() => HoverHandle()}
        style={{ cursor: "pointer" }}
      >
        <div className={`${styles.gradename}`}>
          one Lorem{" "}
          <img src="http://localhost:3000/AHHHH.svg" width={"10px"} height={"20px"} style={{transform: `rotate(${isHovered ? "180deg" : "0deg"})`, transition:"all .2s ease-in-out"}} />

          <div className={`${styles.subject__number}`}>
            {" "}
            <p className={`${styles.number_sub}`}> 1534+</p>{" "}
          </div>
        </div>
        <div
          className={`${styles.hypes} ${isHovered ? styles.on : styles.off}`}
        >
          <ul>
            <li className={`${styles.hypesa}`}>heyaaaaaaaaaaaaaaaa</li>
            <li className={`${styles.hypesa}`}>hey</li>
            <li className={`${styles.hypesa}`}>hey</li>
          </ul>
        </div>
      </li>
    </div>
  );
}
*/