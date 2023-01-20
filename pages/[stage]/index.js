import { useRouter } from 'next/router';
import { Router } from 'next/router';
import { useState } from 'react';
 
/*
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
import styles from "./PrimarySub.module.scss";*/
//sh
export default function hi({grade}) {
  const router = useRouter()
  const  pid  = Object.values(router.query)
  return(
    <>
    hi
  
      </>
  )

}

export async function getStaticProps(context){
  const id = context.params.grade;
  console.log(id + " hey")  
  const grade = await fetch("http://localhost:3000/api/grades").then(res => res.json())

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
      return{
        params:{
          stage: grade.type,
        }
      }
    }),  
    fallback: false,
  }
}