import React, { use, useState, useEffect} from "react";
import styles from "./Nav.module.scss";
import NavDropDown from "./navDropDown/navDropDown";
import NavButtons from "./NavButtons/navButtons"
import NavLogo from "./Logo/NavLogo";
import {db} from "../../firebase"
import {set} from "firebase/database"
import {ref as Ref} from "firebase/database"
import { once, onValue } from 'firebase/database';

export default function Navbar() {
  let [data, setNewData] = useState()
  useEffect(() => {
    onValue(Ref(db), snapshot => {
      const data = snapshot.val();
      if (data !== null) {
        setNewData(data);
      }
    });
  }, []);
  let NumberOfSujetsAP = data && Object.values(data.sujets).map(sujet => Object.values(sujet).filter(item => item.stage === "Primary_school")).flat(Infinity).length
  console.log(NumberOfSujetsAP)
  return (
    <nav className={`${styles.nav}`}>
                 <NavButtons className={styles.navLeft}/>

      <div className={styles.NavDropDowns}>
      <NavDropDown
      numberOfSujets={NumberOfSujetsAP}
   first={[
    {
    link: "primaryschool/1ap",
    grade:"AP",
    logo:"http://localhost:3000/OMLLL.svg",
    numberOfSujets:"69+",
    color: "green"
  },
    {
      link: "primaryschool/2ap",
      grade:"2AP",
      logo:"http://localhost:3000/OMLLL.svg",
      numberOfSujets:"69+",
      color: "green"

    },
    {
      link: "primaryschool/3ap",
      grade:"3AP",
      logo:"http://localhost:3000/OMLLL.svg",
      numberOfSujets:"69+",
      color: "green"

    },
    {
      link: "primaryschool/4ap",
      grade:"4AP",
      logo:"http://localhost:3000/OMLLL.svg",
      numberOfSujets:"69+",
      color: "green"

    },
    {
      link: "primaryschool/5ap",
      grade:"5AP",
      logo:"http://localhost:3000/OMLLL.svg",
      numberOfSujets:"69+",
      color: "green"

    },
    {
      link: "primaryschool/bem",
      grade:"SEC",
      logo:"http://localhost:3000/nowayyy.svg",
      numberOfSujets:"69+",
      color: "green"

    },
    ]}     
    color={"green"}      />

      <NavDropDown
   first={[
    {
    link: "middleschool/1am",
    grade:"1AM",
    logo:"http://localhost:3000/OMLLL.svg",
    numberOfSujets:"69+",
    color: "purple"

  },
    {
      link: "middleschool/2am",
      grade:"2AM",
      logo:"http://localhost:3000/OMLLL.svg",
      numberOfSujets:"69+",
      color: "purple"


    },
    {
      link: "middleschool/3am",
      grade:"3AM",
      logo:"http://localhost:3000/OMLLL.svg",
      numberOfSujets:"69+",


    },
  
    {
      link: "middleschool/4am",
      grade:"4AM",
      logo:"http://localhost:3000/OMLLL.svg",
      numberOfSujets:"69+",
      color: "purple"

    },
    {
      link: "middleschool/bem",
      grade:"BEM",
      logo:"http://localhost:3000/nowayyy.svg",
      numberOfSujets:"69+",
      color: "purple"

    },
    ]}      color={"purple"}

      />
      <NavDropDown
      first={[
        {
        link: "highschool/1as",
        grade:"1AS",
        logo:"http://localhost:3000/OMLLL.svg",
        numberOfSujets:"69+",
        color: "orange"

      },
        {
          link: "highschool/2as",
          grade:"2AS",
          logo:"http://localhost:3000/OMLLL.svg",
          numberOfSujets:"69+",
          color: "orange"


        },
        {
          link: "highschool/3as",
          grade:"3AS",
          logo:"http://localhost:3000/OMLLL.svg",
          numberOfSujets:"69+",
          color: "orange"

        },
 
        {
          link: "highschool/bem",
          grade:"BAC",
          logo:"http://localhost:3000/nowayyy.svg",
          numberOfSujets:"69+",
          color: "orange"


        },
        ]}
        color={"orange"}      />
      </div>
       <NavLogo/>

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

            <h1>hhh</h1>

        </nav>
       
    </nav>
  );
} //<div className="line"></div>
/* <div className={`${styles.gradecontainer}`}>
          <li className={`grades row ${styles.grades}`}>
          one Lorem
            <div className={`${styles.subject__number}`}>
              {" "}
           <p className={`${styles.number_sub}`}> 1250+</p>{" "}
            </div>
          </li>
        </div>
        <div className={`${styles.gradecontainer}`}>
          <li className={`grades row ${styles.grades}`}>
            one Lorem{" "}
            <div className={`${styles.subject__number}`}>
              {" "}
             <p className={`${styles.number_sub}`}> 879+</p>{" "}
            </div>
          </li>
        </div>*/