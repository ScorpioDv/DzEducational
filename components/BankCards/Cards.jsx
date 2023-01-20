import Link from "next/link";
import React from "react";
import styles from "./Cards.module.scss";
import Router from 'next/router'

export default function Cards(props) {

  function handleClick(page) {
    Router.push(page)
  }
  return (
    <>
    <div className={styles.container}>
      <h1 className={`blue__txt hero`}>Bank</h1>
      <div className={`bank collumn`}>
    
        <div className={styles.card__container}>
          <div className={` ${styles.card}`}>
            
            <img
              src={`http://localhost:3000/Rectangle 18.svg`}
              alt=""
              className={`${styles.gradeImg}`}
            />
            <button className={`${styles.grade} button`} onClick={() => handleClick("/primaryschool/1ap")}> 1st Grades </button>
            <button className={`${styles.grade} button`} onClick={() => handleClick("/primaryschool/2ap")}>2nd Grade</button>
            <button className={`${styles.grade} button`} onClick={() => handleClick("/primaryschool/3ap")}>3th Grade</button>
            <button className={`${styles.grade} button`} onClick={() => handleClick("/primaryschool/4ap")}>4th Grade</button>
            <button className={`${styles.grade} button`} onClick={() => handleClick("/primaryschool/5ap")}>5th Grade</button>
            <div className={`${styles.lineContainer} `}><div className={`${styles.line} ${styles.green_line}`}></div></div>
            <div className={styles.helps}>            
            <button className={`${styles.green} button `}>PrimarySchool books</button>
            </div>
            <button className={`button green ${styles.examn}`}  onClick={() => handleClick("/primaryschool/sec")}>SEC</button>
            <div className={`green backgroundcard`}></div>
      
          </div>
          <div className={` ${styles.card}`}>
            
            <img
              src={`http://localhost:3000/Rectangle 18.svg`}
              alt=""
              className={`${styles.gradeImg}`}
            />
            <button className={`${styles.grade} button`} onClick={() => handleClick("/middleschool/1am")}> 1st Grades </button>
            <button className={`${styles.grade} button`} onClick={() => handleClick("/middleschool/2am")}>2nd Grade</button>
            <button className={`${styles.grade} button`} onClick={() => handleClick("/middleschool/3am")}>3th Grade</button>
            <button className={`${styles.grade} button`} onClick={() => handleClick("/middleschool/4am")}>4th Grade</button>
            <div className={`${styles.lineContainer} `}><div className={`${styles.line} ${styles.purple_line}`}></div></div>
            <div className={styles.helps}>            
            <button className={`button ${styles.purple}`} onClick={() => handleClick("/middleschool/channels")}>Helpful Youtube channels</button>
            <button className={`button ${styles.purple}`} onClick={() => handleClick("/middleschool/books")}>MiddleSchool books</button>
            </div>

            <button className={`button ${styles.purple_exams} ${styles.examn}`} onClick={() => handleClick("/middle/bem")}>BEM</button>
            <div className={`green backgroundcard`}></div>
       
          </div>
          <div className={` ${styles.card}`}>
            
            <img
              src={`http://localhost:3000/Rectangle 18.svg`}
              alt=""
              className={`${styles.gradeImg}`}
            />
            <button className={`${styles.grade} button`} onClick={() => handleClick("/primary/1ap")}>1st Grades </button>
            <button className={`${styles.grade} button`} onClick={() => handleClick("/primary/2ap")}>2nd Grade</button>
            <button className={`${styles.grade} button`} onClick={() => handleClick("/primary/3ap")}>3th Grade</button>
            
            <div className={`${styles.lineContainer} `}><div className={`${styles.line} ${styles.orange_line}`}></div></div>

            <div className={styles.helps}>            
            <button className={`${styles.grade} button ${styles.orange}` } onClick={() => handleClick("/primary/4ap")}>4th Grade</button>
            <button className={`${styles.grade} button ${styles.orange}`} onClick={() => handleClick("/primary/5ap")}>5th Grade</button>
            <button className={` button ${styles.orange}`}>1st Grade</button>
            </div>


            <button className={`button ${styles.orange_exams} ${styles.examn}`}>BAC</button>
            <div className={`green backgroundcard`}></div>
      
          </div>
          <div className={` ${styles.card}`}>
            
            <img
              src={`http://localhost:3000/Rectangle 18.svg`}
              alt=""
              className={`${styles.gradeImg}`}
            />
            <button className={`${styles.grade} button`} onClick={() => handleClick("/primary/1ap")}>1st Grades </button>
            <button className={`${styles.grade} button`} onClick={() => handleClick("/primary/2ap")}>2nd Grade</button>
            <button className={`${styles.grade} button`} onClick={() => handleClick("/primary/3ap")}>3th Grade</button>
            
            <div className={`${styles.lineContainer} `}><div className={`${styles.line} ${styles.blue_line}`}></div></div>

            <div className={styles.helps}>            
            <button className={` button ${styles.blue}` } onClick={() => handleClick("/primary/4ap")}>4th Grade</button>
            <button className={` button ${styles.blue}`} onClick={() => handleClick("/primary/5ap")}>5th Grade</button>
            <button className={` button ${styles.blue}` } onClick={() => handleClick("/primary/4ap")}>4th Grade</button>
            </div>


            <button className={` button ${styles.blue} ${styles.examn}`}>BAC</button>
            <div className={`green backgroundcard`}></div>
      
          </div>

        </div>
      </div>
    </div>
    <div>
    </div>
   
    </>
  );
}
/*     <img
              src={`http://localhost:3000/Rectangle%2017.svg`}
              alt=""
              className={`${styles.backimg}`}
            />*/