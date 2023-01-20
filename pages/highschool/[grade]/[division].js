import { useRouter } from 'next/router';
import Exams from '../../../components/Exams/Exams';
import React, { useState } from "react";
import BankChannels from "../../../components/BankChannels/BankChannels";
import Cards from "../../../components/BankCards/Cards";
import HelpCards from "../../../components/HelpCards/HelpCards";
import Navbar from "../../../components/Navbar/Navbar";
import Themes from "../../../components/Headers/Themes";
import Channels from "../../../components/YoutubeChannels/Channels";
import Header from "../../../components/Headers/Header";
import Downbar from "../../../components/Downbar/Downbar";
import Subjects from "../../../components/Subject/Subject";
import Line from "../../../components/Line/Line";
import RandomSaying from "../../../components/RandomSaying/RandomSaying";
import SocialMedia from "../../../components/SocialMedia/SocialMedia";
import Footer from "../../../components/Footer/Footer";
import {useEffect} from "react"
import {db} from "../../../Firebase"
import {set} from "firebase/database"
import {ref as Ref} from "firebase/database"
import { once, onValue } from 'firebase/database';
import styles from "../Highschool.module.scss"
export default function Subject({ grade, divisions , subjects}) {
  let [data, setNewData] = useState()
  useEffect(() => {
    onValue(Ref(db), snapshot => {
      const data = snapshot.val();
      if (data !== null) {
        setNewData(data);
      }
    });
  }, []);
  
  return (
    <>
     <Navbar />
      <Header />
      <Themes />
      <div className={styles.wrapper}>
        <div className={styles.subjectContainer}>
          {subjects.map(subject => (
             <Subjects 
             key={subject}
             Subject={subject} 
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
      <h1 className="blue__txt hero" style={{ margin: "100px" }}>Share With your Friends!</h1>
      <SocialMedia />
      <Footer />
    </>
  );
}
export async function getStaticProps(context) {
  const id = context.params.grade;
  const divisions = context.params.division;
  const grade = await fetch(`/api/highschoolgrades/${id}`).then(res => res.json());
  const division = grade.divisions.find(item => item.name === divisions)
  return {
    props: {
        grade,
        division,
        subjects: division.subjects,
    },
  };
}/*      <div className={styles.wrapper}>
        <div className={styles.subjectContainer}>
          {grade.subjects.map(subject => (
             <Subjects 
             key={subject}
             Subject={subject} 
             Exams={""} 
             NameEng={""} 
             NameAr={""} />
          
          ))}         
          </div>*/

export async function getStaticPaths() {
  const grades = await fetch('/api/highschoolgrades').then(res => res.json());
  const paths = [];

  grades.forEach(grade => {
  grade.divisions.forEach(subject => {
      paths.push({
        params: {
          stage: "highschool",
          grade: grade.name,
          division: subject.name,
        },
      });
    });
  });
  return {
    paths: paths,
    fallback: false,
  };
}