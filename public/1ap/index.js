import React from "react";
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
import styles from "../PrimarySub.module.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Themes />
      <h1 className="hero blue__txt" style={{ margin: "50px 0 0 0" }}>
        Subjects
      </h1>
      <div className={styles.wrapper}>
        <div className={styles.subjectContainer}>
          <Subjects 
          Subject={"science"} 
          Exams={""} 
          NameEng={""} 
          NameAr={""} />
          <Subjects 
          Subject={"arabic"} 
          Exams={""} 
          NameEng={""} 
          NameAr={""} />

          <Subjects 
          Subject={"french"} 
          Exams={""} 
          NameEng={""} 
          NameAr={""} />

          <Subjects 
          Subject={"english"} 
          Exams={""} 
          NameEng={""} 
          NameAr={""} />

          <Subjects 
          Subject={"history"} 
          Exams={""} 
          NameEng={""} 
          NameAr={""} />

          <Subjects
            Subject={"informatique"}
            Exams={""}
            NameEng={""}
            NameAr={""}
          />

          <Subjects 
          Subject={"islamic"} 
          Exams={""} 
          NameEng={""} 
          NameAr={""} />

          <Subjects 
          Subject={"madania"} 
          Exams={""} 
          NameEng={""} 
          NameAr={""} />

          <Subjects 
          Subject={"maths"} 
          Exams={""} 
          NameEng={""} 
          NameAr={""} />

          <Subjects 
          Subject={"music"} 
          Exams={""} 
          NameEng={""} 
          NameAr={""} />

          <Subjects 
          Subject={"physics"} 
          Exams={""} 
          NameEng={""} 
          NameAr={""} />
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
  );
}
/*    <div className='test'>
      <div className='blurs'></div>
      <p className='number'>6969</p>

    </div>*/
