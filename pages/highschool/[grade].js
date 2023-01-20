import { useRouter } from 'next/router';
import { Router } from 'next/router';
import { useState } from 'react';
 

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
import Division from "../../components/Division/Division"
import Line from "../../components/Line/Line";
import RandomSaying from "../../components/RandomSaying/RandomSaying";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Footer from "../../components/Footer/Footer";
import styles from "./Highschool.module.scss"
import { push } from 'firebase/database';
//sh
export default function grade({grade}) {
  const router = useRouter()
  const  pid  = Object.values(router.query)
  console.log(grade.divisions)
  let array = []
  grade.divisions.map(subject => {
    let topush = Object.values(subject)[0];
    array.push(topush)
    console.log(array)})
  return(
    <>
      <Navbar />
      <Header />
      <Themes />
      <h1 className="hero blue__txt" style={{ margin: "50px 0 0 0" }}>
        Subjects
      </h1>
      <div>
        <div>
          <h3>{grade.nameEng}</h3>
        </div>
        <div className={styles.divisionsContainer}>
          {
            array.map(division => (
              <Division 
              key={division}
              division={division} 
              Exams={""} 
              NameEng={""} 
              NameAr={""} />
           ))
          }
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
  const grade = await fetch("http://localhost:3000/api/highschoolgrades/" + id).then(res => res.json())

  return{
    props:{
      grade: grade,
    }
  }
}

export async function getStaticPaths(){
  console.log("sh")
  const grades = await fetch("http://localhost:3000/api/highschoolgrades").then(res => res.json())
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