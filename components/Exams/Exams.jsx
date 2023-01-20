import React from "react";
import styles from "./Exams.module.scss";
import { useState,useEffect } from "react";
import { useRouter } from 'next/router';

export default function Exams({data}) {
  const router = useRouter();
  const [prevParam, setPrevParam] = useState(null);
  let type = router.query.stage;
  let Ishighschool = router.route.split("/[grade]/[division]/[subject]")[0].toString().split("/")[1];
  let grade = router.query.grade;
  let division = router.query.division;
  let subject = router.query.subject;
  console.log(grade)
  let [isOn, setIsOn] = useState({
    tirm1: {
      tirm: false,
      exam: false,
      test: false,
    },
    tirm2: {
      tirm: false,
      exam: false,
      test: false,
    },
    tirm3: {
      tirm: false,
      exam: false,
      test: false,
    },
  });
  let filiteredData = Object.values(data).map(data => Object.values(data).map(data => Object.values(data).map(data =>  [data].filter(item => item.year === grade))))
const filteredObject = Object.fromEntries(
  Object.entries(data.sujets).filter(([key, value]) => {
    if (typeof value === 'object') {
      return Object.values(value).some((v) => v.year === grade);
    }
    return false;
  })
);

const filiteredObjectByDivision = (Ishighschool ===  "highschool") && Object.values(filteredObject).map(data =>   Object.values(data).filter(item => item.division.toLowerCase() === division))
const filteredObjectBySubjects = Object.values((Ishighschool ===  "highschool") ? filiteredObjectByDivision : filteredObject).map(data =>   Object.values(data).filter(item => item.subject.toLowerCase() === subject))
const exams = filteredObjectBySubjects.map(data => Object.values(data).filter(item => item.type.toLowerCase() === "exam"))
const tests = filteredObjectBySubjects.map(data => Object.values(data).filter(item => item.type.toLowerCase() === "test"))
const firstTirmTests = tests.map(data => Object.values(data).filter(item => item.tirm.toLowerCase() === "first"))
const firstTirmExams = exams.map(data => Object.values(data).filter(item => item.tirm.toLowerCase() === "first"))
const secondTirmExams = exams.map(data => Object.values(data).filter(item => item.tirm.toLowerCase() === "second"))
const secondTirmTests = tests.map(data => Object.values(data).filter(item => item.tirm.toLowerCase() === "second"))
const thirdTirmExams =  exams.map(data => Object.values(data).filter(item => item.tirm.toLowerCase() === "third"))
const thirdTirmTests =  tests.map(data => Object.values(data).filter(item => item.tirm.toLowerCase() === "third"))
console.log(data)


console.log(tests.map(array => array.length)[0])

console.log(subject)
  //let exams =  Object.values(data).map(data => Object.values(data).map(data => Object.values(data).map(data => [data].filter(item => item.type === "exams"))))
  /*
let filteredData0 = Object.values(data).map(data => data).filter(item => item)
let filteredData1 = filteredData0[0]
let filiteredData = Object.values.map(data => Object.entries(data).map(data => data))*/
//let exams = Object.values(filteredData).map(data => console.log(data + "hey"))
//let tests = data.filter(item => item.type.toLowerCase() === "test")


const path = router.asPath;

function handleClick(page) {
    router.push(path+page)
  }
  function turn(tirmName, key) {
    setIsOn((prev) => ({
      ...prev,
      [tirmName]: {
        ...prev[tirmName],
        [key]: !prev[tirmName][key],
      },
    }));
    console.log(isOn[tirmName]["exam"]);
  }
  const employees = [
    {id: 1, name: 'Alice', salary: 100},
    {id: 2, name: 'Bobby hadz', salary: 75},
    {id: 3, name: 'Carl', salary: 125},
  ];
  console.log(firstTirmExams)
  console.log(firstTirmExams.map((data, index) => data.map((data, index) => console.log(index))))


  
  return (
    <>
      <div className={`${styles.tirmsContainer}`}>
      






























      <div className={`${styles.tirmContainer} noSelect`}>



          <div
            className={styles.tirm}
            onClick={() => turn("tirm1", "tirm")}
            style={{
              borderRadius: `${
                !isOn.tirm1.tirm ? "15px" : " 15px 15px 0px 0px"
              }`,
            }}
          >
            First Tirm
            <div className={styles.numArrowContainer}>
              <h2 className={styles.numberOfSujets}>158 +</h2>
              <img
                src="http://localhost:3000/vector.svg"
                alt=""
                style={{
                  transform: `${
                    isOn.tirm1.tirm ? "Rotate(0deg)" : "Rotate(90deg)"
                  }`,
                }}
              />
            </div>
          </div>
          <div
            className={`${
              !isOn.tirm1.tirm ? "hide" : styles.dropdownContainer
            } noSelect`}
          >
            <div
              className={styles.examstirmContainer}
              onClick={() => turn("tirm1", "exam")}
            >
              <div className={`${styles.exams}`}      style={{
              borderRadius: `${
                (!isOn.tirm1.exam && type === "primaryschool") ? " 0px 0px 15px 15px" : "0px"
              }`,
            }}>
                {type === "primaryschool" ? "Exams and Tests" : "Exams"}
                <div className={styles.numArrowContainer}>
                  <h2 className={styles.numberOfSujets}>158 +</h2>
                  <img
                    src="http://localhost:3000/vector.svg"
                    alt=""
                    style={{
                      transform: `${
                        isOn.tirm1.exam ? "Rotate(0deg)" : "Rotate(90deg)"
                      }`,
                    }}
                  />
                </div>
              </div>

              <div
                className={`${
                  !isOn.tirm1.exam ? "hide" : styles.examsDropdownContainer
                } noSelect`}
              >
              {
                firstTirmExams.map(data =>          data.map((data, index) => (
                  <div className={`${ styles.exam} ${type === "primaryschool" && styles.lastChildBorder }`} onClick={() => handleClick("/"+ data.uuid)} key={data.uuid}>
                  <div className={styles.examDesc}>
                    <div className={styles.solution}>
                      <h2>Solution: </h2>
                      <img src={data.solution ? "http://localhost:3000/assets/icons/checkmark.svg" : "http://localhost:3000/assets/icons/unCheckedMark.svg"} alt="" />
                    </div>
                    <div className={styles.dificility}>
                      <h2>{data.division}</h2>
                      <h2 className={styles.dificilityPrefix}>dificility: </h2>
                      <h2 className={styles.dificilityLevel}>{data.dificility}</h2>
                    </div>
                  </div>
                  <h1>Exam n {index+1}</h1>
               </div>
                )))
              }
              </div>
            </div>
        { (type === "middleschool" || Ishighschool === "highschool") && <div
              className={styles.teststirmContainer}
              onClick={() => turn("tirm1", "test")}
            >
              <div
                className={styles.tests}
                style={{
                  borderRadius: `${
                    !isOn.tirm1.test ? "0px 0px 15px 15px" : " 0px 0px 0px 0px"
                  }`,
                }}
              >
                Tests
                <div className={styles.numArrowContainer}>
                  <h2 className={styles.numberOfSujets}>158 +</h2>
                  <img
                    src="http://localhost:3000/vector.svg"
                    alt=""
                    style={{
                      transform: `${
                        isOn.tirm1.test ? "Rotate(0deg)" : "Rotate(90deg)"    
                      }`,
                    }}
                  />
                </div>
              </div>
              <div
                className={`${
                  !isOn.tirm1.test ? "hide" : styles.testsDropdownContainer
                } noSelect`}
              >{
                firstTirmTests.map(data =>          data.map((data, index) => (
                  <div className={`${ styles.exam} ${type === "primaryschool" && styles.lastChildBorder }`} onClick={() => handleClick("/"+ data.uuid)} key={data.uuid}>
                  <div className={styles.examDesc}>
                    <div className={styles.solution}>
                      <h2>Solution: </h2>
                      <img src={data.solution ? "http://localhost:3000/assets/icons/checkmark.svg" : "http://localhost:3000/assets/icons/unCheckedMark.svg"} alt="" />
                    </div>
                    <div className={styles.dificility}>
                      <h2>{data.division}</h2>
                      <h2 className={styles.dificilityPrefix}>dificility: </h2>
                      <h2 className={styles.dificilityLevel}>{data.dificility}</h2>
                    </div>
                  </div>
                  <h1>Exam n {index+1}</h1>
              </div>
                )))
              }
    
              </div>
            </div>}
          </div>
        </div>
              
















































        <div className={`${styles.tirmContainer} noSelect`}>
          <div
            className={styles.tirm}
            onClick={() => turn("tirm2", "tirm")}
            style={{
              borderRadius: `${
                !isOn.tirm2.tirm ? "15px" : " 15px 15px 0px 0px"
              }`,
            }}
          >
            Third Tirm
            <div className={styles.numArrowContainer}>
              <h2 className={styles.numberOfSujets}>158 +</h2>
              <img
                src="http://localhost:3000/vector.svg"
                alt=""
                style={{
                  transform: `${
                    isOn.tirm2.tirm ? "Rotate(0deg)" : "Rotate(90deg)"
                  }`,
                }}
              />
            </div>
          </div>
          <div
            className={`${
              !isOn.tirm2.tirm ? "hide" : styles.dropdownContainer
            } noSelect`}
          >
            <div
              className={styles.examstirmContainer}
              onClick={() => turn("tirm2", "exam")}
            >
                <div className={`${styles.exams}`}      style={{
              borderRadius: `${
                (!isOn.tirm2.exam && type === "primaryschool") ? " 0px 0px 15px 15px" : "0px"
              }`,
            }}>
                {type === "primaryschool" ? "Exams and Tests" : "Exams"}
                <div className={styles.numArrowContainer}>
                  <h2 className={styles.numberOfSujets}>158 +</h2>
                  <img
                    src="http://localhost:3000/vector.svg"
                    alt=""
                    style={{
                      transform: `${
                        isOn.tirm2.exam ? "Rotate(0deg)" : "Rotate(90deg)"
                      }`,
                    }}
                  />
                </div>
              </div>

              <div
                className={`${
                  !isOn.tirm2.exam ? "hide" : styles.examsDropdownContainer
                } noSelect`}
              >
              {
                secondTirmExams.map(data =>          data.map((data, index) => (
                  <div className={`${ styles.exam} ${type === "primaryschool" && styles.lastChildBorder }`} onClick={() => handleClick("/"+ data.uuid)} key={data.uuid}>
                  <div className={styles.examDesc}>
                    <div className={styles.solution}>
                      <h2>Solution: </h2>
                      <img src={data.solution ? "http://localhost:3000/assets/icons/checkmark.svg" : "http://localhost:3000/assets/icons/unCheckedMark.svg"} alt="" />
                    </div>
                    <div className={styles.dificility}>
                      <h2>{data.division}</h2>
                      <h2 className={styles.dificilityPrefix}>dificility: </h2>
                      <h2 className={styles.dificilityLevel}>{data.dificility}</h2>
                    </div>
                  </div>
                  <h1>Exam n {index+1}</h1>
               </div>
                )))
              }
              </div>
            </div>
            { (type === "middleschool" || Ishighschool === "highschool") &&    <div
              className={styles.teststirmContainer}
              onClick={() => turn("tirm2", "test")}
            >
              <div
                className={styles.tests}
                style={{
                  borderRadius: `${
                    !isOn.tirm2.test ? "0px 0px 15px 15px" : " 0px 0px 0px 0px"
                  }`,
                }}
              >
                Tests
                <div className={styles.numArrowContainer}>
                  <h2 className={styles.numberOfSujets}>158 +</h2>
                  <img
                    src="http://localhost:3000/vector.svg"
                    alt=""
                    style={{
                      transform: `${
                        isOn.tirm2.test ? "Rotate(0deg)" : "Rotate(90deg)"
                      }`,
                    }}
                  />
                </div>
              </div>
              <div
                className={`${
                  !isOn.tirm2.test ? "hide" : styles.testsDropdownContainer
                } noSelect`}
              >{
                secondTirmTests.map(data =>          data.map((data, index) => (
                  <div className={`${ styles.exam} ${type === "primaryschool" && styles.lastChildBorder }`} onClick={() => handleClick("/"+ data.uuid)} key={data.uuid}>
                  <div className={styles.examDesc}>
                    <div className={styles.solution}>
                      <h2>Solution: </h2>
                      <img src={data.solution ? "http://localhost:3000/assets/icons/checkmark.svg" : "http://localhost:3000/assets/icons/unCheckedMark.svg"} alt="" />
                    </div>
                    <div className={styles.dificility}>
                      <h2>{data.division}</h2>
                      <h2 className={styles.dificilityPrefix}>dificility: </h2>
                      <h2 className={styles.dificilityLevel}>{data.dificility}</h2>
                    </div>
                  </div>
                  <h1>Exam n {index+1}</h1> </div>
                )))
              }
    
              </div>
            </div>}
          </div>
          





















          
        </div>
        

        <div className={`${styles.tirmContainer} noSelect`}>
          <div
            className={styles.tirm}
            onClick={() => turn("tirm3", "tirm")}
            style={{
              borderRadius: `${
                !isOn.tirm3.tirm ? "15px" : " 15px 15px 0px 0px"
              }`,
            }}
          >
            Third Tirm
            <div className={styles.numArrowContainer}>
              <h2 className={styles.numberOfSujets}>158 +</h2>
              <img
                src="http://localhost:3000/vector.svg"
                alt=""
                style={{
                  transform: `${
                    isOn.tirm3.tirm ? "Rotate(0deg)" : "Rotate(90deg)"
                  }`,
                }}
              />
            </div>
          </div>
          <div
            className={`${
              !isOn.tirm3.tirm ? "hide" : styles.dropdownContainer
            } noSelect`}
          >
            <div
              className={styles.examstirmContainer}
              onClick={() => turn("tirm3", "exam")}
            >
                <div className={`${styles.exams}`}      style={{
              borderRadius: `${
                (!isOn.tirm3.exam && type === "primaryschool") ? " 0px 0px 15px 15px" : "0px"
              }`,
            }}>
                {type === "primaryschool" ? "Exams and Tests" : "Exams"}
                <div className={styles.numArrowContainer}>
                  <h2 className={styles.numberOfSujets}>158 +</h2>
                  <img
                    src="http://localhost:3000/vector.svg"
                    alt=""
                    style={{
                      transform: `${
                        isOn.tirm3.exam ? "Rotate(0deg)" : "Rotate(90deg)"
                      }`,
                    }}
                  />
                </div>
              </div>

              <div
                className={`${
                  !isOn.tirm3.exam ? "hide" : styles.examsDropdownContainer
                } noSelect`}
              >
              {
                thirdTirmExams.map(data =>          data.map((data, index) => (
                  <div className={`${ styles.exam} ${type === "primaryschool" && styles.lastChildBorder }`} onClick={() => handleClick("/"+ data.uuid)} key={data.uuid}>
                  <div className={styles.examDesc}>
                    <div className={styles.solution}>
                      <h2>Solution: </h2>
                      <img src={data.solution ? "http://localhost:3000/assets/icons/checkmark.svg" : "http://localhost:3000/assets/icons/unCheckedMark.svg"} alt="" />
                    </div>
                    <div className={styles.dificility}>
                      <h2>{data.division}</h2>
                      <h2 className={styles.dificilityPrefix}>dificility: </h2>
                      <h2 className={styles.dificilityLevel}>{data.dificility}</h2>
                    </div>
                  </div>
                  <h1>Exam n {index+1}</h1>
               </div>
                )))
              }
              </div>
            </div>
            { (type === "middleschool" || Ishighschool === "highschool") &&  <div
              className={styles.teststirmContainer}
              onClick={() => turn("tirm3", "test")}
            >
              <div
                className={styles.tests}
                style={{
                  borderRadius: `${
                    !isOn.tirm3.test ? "0px 0px 15px 15px" : " 0px 0px 0px 0px"
                  }`,
                }}
              >
                Tests
                <div className={styles.numArrowContainer}>
                  <h2 className={styles.numberOfSujets}>158 +</h2>
                  <img
                    src="http://localhost:3000/vector.svg"
                    alt=""
                    style={{
                      transform: `${
                        isOn.tirm3.test ? "Rotate(0deg)" : "Rotate(90deg)"
                      }`,
                    }}
                  />
                </div>
              </div>
              <div
                className={`${
                  !isOn.tirm3.test ? "hide" : styles.testsDropdownContainer
                } noSelect`}
              >{
                thirdTirmTests.map(data =>        data.map((data, index) => (
                  <div className={`${ styles.exam} ${type === "primaryschool" && styles.lastChildBorder }`} onClick={() => handleClick("/"+ data.uuid)} key={data.uuid}>
                  <div className={styles.examDesc}>
                    <div className={styles.solution}>
                      <h2>Solution: </h2>
                      <img src={data.solution ? "http://localhost:3000/assets/icons/checkmark.svg" : "http://localhost:3000/assets/icons/unCheckedMark.svg"} alt="" />
                    </div>
                    <div className={styles.dificility}>
                      <h2>{data.division}</h2>
                      <h2 className={styles.dificilityPrefix}>dificility: </h2>
                      <h2 className={styles.dificilityLevel}>{data.dificility}</h2>
                    </div>
                  </div>
                  <h1>Exam n {index+1}</h1>
              </div>
                )))
              }
    
              </div>
            </div>}
          </div>
        </div>
      </div>
    </>
  );
}
/* (
              <div className={styles.exam} onClick={() => handleClick("/"+data.sujet)} key={data.sujet}>
                  <div className={styles.examDesc}>
                    <div className={styles.solution}>
                      <h2>Solution: </h2>
                      <img src="http://localhost:3000/checkmark.svg" alt="" />
                    </div>
                    <div className={styles.dificility}>
                      <h2 className={styles.dificilityPrefix}>dificility: </h2>
                      <h2 className={styles.dificilityLevel}>{data.dificility}</h2>
                    </div>
                  </div>
                  <h1>Exam n*1</h1>
               </div>)*//*Object.values(filteredObject).map(data =>   Object.values(data).map(data => (
                
         
                  <div className={styles.exam} onClick={() => handleClick("/"+ data.uuid)} key={data.uuid}>
                  <div className={styles.examDesc}>
                    <div className={styles.solution}>
                      <h2>Solution: </h2>
                      <img src="http://localhost:3000/checkmark.svg" alt="" />
                    </div>
                    <div className={styles.dificility}>
                      <h2 className={styles.dificilityPrefix}>dificility: </h2>
                      <h2 className={styles.dificilityLevel}>{data.dificility}</h2>
                    </div>
                  </div>
                  <h1>Exam n*1</h1>
               </div>
                
              )))*/