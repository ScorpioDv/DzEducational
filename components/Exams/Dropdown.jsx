import React from 'react'
import styles from "./Exams.module.scss"
import { useState } from 'react'

export  function Exams() {
    let [isOn, setIsOn] = useState(false)
    function turn(){
        setIsOn(prev => !prev)
        console.log(isOn)
    }

    return(
      <>
        <div onClick={() => turn()} style={{borderRadius: `${!isOn ? "15px" : " 15px 15px 0px 0px"}`}}>
        First Tirm
        <img src="http://localhost:3000/vector.svg" alt="" style={{transform: `${isOn ? "Rotate(0deg)" : "Rotate(90deg)"}`}}/>
        </div>
        
      </>
    )
}

export function Examsa() {
    let [isOn, setIsOn] = useState(false)
    function turn(){
        setIsOn(prev => !prev)
        console.log(isOn)
    }

    return(
      <>
        <div onClick={() => turn()} style={{borderRadius: `${!isOn ? "15px" : " 15px 15px 0px 0px"}`}}>
        First Tirm
        <img src="http://localhost:3000/vector.svg" alt="" style={{transform: `${isOn ? "Rotate(0deg)" : "Rotate(90deg)"}`}}/>
        </div>
        
      </>
    )
}

