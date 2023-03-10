import { useRouter } from 'next/router';
import Exams from '../../../../../components/Exams/Exams';
import React, { useState, useRef } from "react";
import BankChannels from "../../../../../components/BankChannels/BankChannels";
import Cards from "../../../../../components/BankCards/Cards";
import HelpCards from "../../../../../components/HelpCards/HelpCards";
import Navbar from "../../../../../components/Navbar/Navbar";
import Themes from "../../../../../components/Headers/Themes";
import Channels from "../../../../../components/YoutubeChannels/Channels";
import Header from "../../../../../components/Headers/Header";
import Downbar from "../../../../../components/Downbar/Downbar";
import Subjects from "../../../../../components/Subject/Subject";
import Line from "../../../../../components/Line/Line";
import RandomSaying from "../../../../../components/RandomSaying/RandomSaying";
import SocialMedia from "../../../../../components/SocialMedia/SocialMedia";
import Footer from "../../../../../components/Footer/Footer";
import {useEffect} from "react"
import {db} from "../../../../../firebase"
import {set} from "firebase/database"
import {ref} from "firebase/database" 
import { once, onValue } from 'firebase/database';
import { Router } from 'next/router';
import 'firebase/database';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { Document, Page } from 'react-pdf';
import pdfjs from 'pdfjs-dist';
import Timer from '../../../../../components/Timer/Timer'
import Sujet from '../../../../../components/Sujet/Sujet';
import { server } from '../../../../../config';

export default function Subject({ grade, subject }) {
  let [data, setNewData] = useState()
useEffect(() => {
  onValue(ref(db), snapshot => {
    const data = snapshot.val();
    if (data !== null) {
      setNewData(data);
    }
  });
}, []);
let router = useRouter()
data && console.log()
let CurrentSujet = data && data.sujets[grade.name][router.query.sujet];

return (
  <>
    <Navbar />
    <Header />
    <Themes />
   {data && <Timer
          currentData={CurrentSujet}
          />}
   {data && <Sujet
    currentData={CurrentSujet}
    data={data.sujets[grade.name]}
    />}
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
  const grade = await fetch(`${server}/api/highschoolgrades/${id}`).then(res => res.json());

  return {
    props: {
      grade: grade, 
    },
  };
}
export async function getStaticPaths(context) {
    // Get the previous route params
  
  const grades = await fetch(server+'/api/highschoolgrades').then(res => res.json());
  const data = await fetch(server+'/api/sujets').then(res => res.json());
  const paths = [];
 // console.log(data.sujets)


  grades.forEach(grade => {
    grade.divisions.forEach(division => {
      division.subjects.map(subject => {
        Object.values(data).map(data => {
          let gradename = Object.keys(data)
          Object.values(data).map(data => {
            let uuids = Object.keys(data)
            uuids.map(uuid => {
              paths.push({
                params: {
                  stage: "highschool",
                  grade: grade.name,
                  division: division.name,
                  subject: subject,
                  sujet: uuid
                },
              });            
            })})})

      })
      });
    });
  return {
    paths: paths,
    fallback: false,
  };
}



/*export async function getStaticPaths(context) {
    // Get the previous route params
    const { params } = context;
    console.log(params);
    const paths = []; //
    
    const grades = await fetch('/api/grades').then(res => res.json());
    const Ref = firebase.database().ref(`https://dzeducation-c2cb1-default-rtdb.europe-west1.firebasedatabase.app`);
    Ref.onValue((snapshot) => {
        const data = snapshot.val();
        console.log
    })
    // Fetch data from Firebase
    // https://dzeducation-c2cb1-default-rtdb.europe-west1.firebasedatabase.app
            grades.forEach(grade => {
            grade.subjects.forEach(subject => {
           
           paths.push(
            {
                params: {
                    grade: grade.name,
                    subject: subject,
                    sujet: "hi",
                  },
            }
        )
        })
       });
        return{
          paths,
          fallback: false, // enable fallback if the paths cannot be generated at build time
        }
      
  }

/*import { useRouter } from "next/router";

export default function Subject() {
    return(
        <>
        hi
        </>
    )
}

export async function getStaticProps(context){
    const router = useRouter();
    const path = router.asPath.split('/')
    path.pop();
    const id = path[path.length - 1];
    const grade = await fetch("/api/grades/" + id).then(res => res.json())
  
    return{
      props:{
        grade: grade,
      }
    }
  }
  
  export async function getStaticPaths(){
    const grades = await fetch("/api/grades").then(res => res.json())
    return{
      paths: grades.map(grade => {
        grade.subjects.map(subject => {
          return{
            params:{
              subject: subject,
            }
          }
        })
      }),  
      fallback: false,
    }
  }*/
