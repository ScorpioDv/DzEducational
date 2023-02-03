import { useRouter } from 'next/router';
import { Router } from 'next/router';
import { useState,useEffect } from 'react';
 

//sh
import React from "react";
import BankChannels from "../../components/BankChannels/BankChannels";
import Cards from "../../components/BankCards/Cards";
import HelpCards from "../../components/HelpCards/HelpCards";
import Navbar from "../../components/Navbar/Navbar";
import Themes from "../../components/Headers/Themes";
import Channels from "../../components/YoutubeChannels/Channels";
import Header from "../../components/Headers/Header";
import Downbar from "../../components/Downbar/Downbar";
import Subjects from "../../components/Subject/Subject";
import Line from "../../components/Line/Line";
import RandomSaying from "../../components/RandomSaying/RandomSaying";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Footer from "../../components/Footer/Footer";
import styles from "./PrimarySub.module.scss";
import { onValue } from 'firebase/database';
import {db} from '../../firebase'
import { ref as Ref } from 'firebase/database';
import {grades} from "../../data/grades"
import {server} from '../../config'
//sh
export default function Grade({grade}) {
  const router = useRouter()
  const  pid  = Object.values(router.query)
  let [data, setNewData] = useState()
  useEffect(() => {
    onValue(Ref(db), snapshot => {
      const data = snapshot.val();
      if (data !== null) {
        setNewData(data);
      }
    });
  }, []);
// data && console.log(data.sujets["1ap"])
  //data && console.log(Object.values(data.sujets["1ap"]).filter(item => item.SubjectYear === "2002").length)




  return(
    <>
      <Navbar />
      <Header />
      <Themes />


      <div className={styles.subjectHeaders}>
        <div className={styles.subjectHeader}>Bank of Exams and Tests Algerian</div>
        <div className={styles.subjectHeader}>{grade.nameAR}</div>
      </div>
      <h1 className="hero blue__txt" style={{ margin: "50px 0 0 0" }}>
        Subjects
      </h1>
      <div className={styles.wrapper}>
        <div className={styles.subjectContainer}>
          {data && grade.subjects.map(subject => (
             <Subjects 
             key={subject}
             Subject={subject} 
             data={data}
             grade={grade.name}
             Exams={""} 
             NameEng={""} 
             NameAr={""} />
          
          ))}         
        </div>
      </div>
      <Line />
      <HelpCards />
      <Channels />
      <RandomSaying />
      <h1 className="blue__txt hero" style={{ margin: "100px" }}>
        Share With your Friends!
      </h1>
      <SocialMedia />
      <Footer />
      </>
  )

}

export async function getStaticProps(context){
  const id = context.params.grade;
  console.log(id + " hey")  
  const grade = await fetch(server+"/api/grades/" + id).then(res => res.json())

  return{
    props:{
      grade: grade,
    }
  }
}

export async function getStaticPaths(){
  const grades = await fetch(server+"/api/grades").then(res => res.json())
  return{
    paths: grades.map(grade => {
      return{
        params:{
          stage: grade.type,
          grade: grade.name,

        }
      }
    }),  
    fallback: false,
  }
}
