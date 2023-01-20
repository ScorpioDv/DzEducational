import { useRouter } from 'next/router';
import Exams from '../../../../components/Exams/Exams';
import React, { useState } from "react";
import BankChannels from "../../../../components/BankChannels/BankChannels";
import Cards from "../../../../components/BankCards/Cards";
import HelpCards from "../../../../components/HelpCards/HelpCards";
import Navbar from "../../../../components/Navbar/Navbar";
import Themes from "../../../../components/Headers/Themes";
import Channels from "../../../../components/YoutubeChannels/Channels";
import Header from "../../../../components/Headers/Header";
import Downbar from "../../../../components/Downbar/Downbar";
import Subjects from "../../../../components/Subject/Subject";
import Line from "../../../../components/Line/Line";
import RandomSaying from "../../../../components/RandomSaying/RandomSaying";
import SocialMedia from "../../../../components/SocialMedia/SocialMedia";
import Footer from "../../../../components/Footer/Footer";
import {useEffect} from "react"
import {db} from "../../../..Firebase"
import {set} from "firebase/database"
import {ref as Ref} from "firebase/database"
import { once, onValue } from 'firebase/database';
export default function Subject({ grade, subject }) {
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
      {data &&   
      <Exams  
      data={data}
      subject={subject}
      grade={grade}
      />
  }
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
  const grade = await fetch(`/api/highschoolgrades/${id}`).then(res => res.json());
  return {
    props: {
      grade: grade,
    },
  };
}

export async function getStaticPaths() {
  const grades = await fetch('/api/highschoolgrades').then(res => res.json());
  const paths = [];
  grades.forEach(grade => {
    grade.divisions.forEach(division => {
      division.subjects.map(subject => {
        paths.push({
          params: {
            stage: "highschool",
            grade: grade.name,
            division: division.name,
            subject: subject,
          },
        });
      })
      });
    });
  return {
    paths: paths,
    fallback: false,
  };
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
    const grade = await fetch("http://localhost:3000/api/grades/" + id).then(res => res.json())
  
    return{
      props:{
        grade: grade,
      }
    }
  }
  
  export async function getStaticPaths(){
    const grades = await fetch("http://localhost:3000/api/grades").then(res => res.json())
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