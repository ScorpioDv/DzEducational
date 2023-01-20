import styles from "./Timer.module.scss"
/*

export default function Timer(props){
    return(
        <>
        <div className={styles.TimerContaienr}>
            <div className={styles.Timer}>
                <img className={styles.TimerLogo} src={"/Timer.svg"}/>
                <div className={styles.input}>
                <input type="text" />
                </div>
                <h6>h</h6>
                <input type="text" />
                <h6>min</h6>
                <input type="text" />
                <h6>sec</h6>
                <button>Stop</button>
                <button>Pause</button>
            </div>
        </div>
        </>
    )
}*/

import { useState, useEffect } from 'react'
export default function Timer(props) {
  const [hours, setHours] = useState(props.currentData.time.hours)
  const [minutes, setMinutes] = useState(props.currentData.time.minutes)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [displayed, setDisplayed] = useState(false)
  const totalSeconds = hours * 3600 + minutes * 60 + seconds
  useEffect(() => {
    if (displayed) {
      props.onDisplay();
    }
  }, [displayed]);
  useEffect(() => {
    let interval = null
    if (isRunning) {
      interval = setInterval(() => {
        if (elapsedTime < totalSeconds) {
          setElapsedTime((prevElapsedTime) => prevElapsedTime + 1)
        } else {
          clearInterval(interval)
          setIsRunning(false)
          setDisplayed(true)
        }
      }, 1000)
    } else if (!isRunning && elapsedTime !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isRunning, elapsedTime, totalSeconds])

  const handleStart = () => {
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setHours(0)
    setMinutes(0)
    setSeconds(0)
    setIsRunning(false)
    setElapsedTime(0)
  }

  const remainingSeconds = totalSeconds - elapsedTime
  const remainingHours = Math.floor(remainingSeconds / 3600)
  let remainingMinutes = Math.floor((remainingSeconds % 3600) / 60)
  let remainingSecondsInMinute = remainingSeconds % 60

  const handleHourInputFocus = (e) => {
    e.target.value = ''
  }

  const handleHourInputBlur = (e) => {
    if (e.target.value === '') {
      e.target.value = hours
    }
  }

  const handleMinuteInputFocus = (e) => {
    e.target.value = ''
  }

  const handleMinuteInputBlur = (e) => {
    if (e.target.value === '') {
      e.target.value = minutes
    }
  }

  const handleSecondInputFocus = (e) => {
    e.target.value = ''
  }

  const handleSecondInputBlur = (e) => {
    if (e.target.value === '') {
      e.target.value = seconds
    }
  }

  const handleMinuteInputChange = (e) => {
    const value = parseInt(e.target.value, 10)
    if (value === 60) {
      setMinutes(0)
      setHours((prevHours) => prevHours + 1)
    } else {
      setMinutes(value)
    }
  }
  
  const handleSecondInputChange = (e) => {
    const value = parseInt(e.target.value, 10)
    if (value === 60) {
      setSeconds(0)
      setMinutes((prevMinutes) => prevMinutes + 1)
    } else {
      setSeconds(value)
    }
  }
  if(hours === 0 && minutes === 0 && seconds === 0 && isRunning)  {
    console.log("yayy")
  }
  return (
    <>
    
    <div className={styles.TimerContaienr}>
    <div className={styles.Timer}>
    <img className={styles.TimerLogo} src={"/Timer.svg"}/>


          <input
            type="number"
            value={remainingHours}
            onChange={(e) => setHours(e.target.value)}
            onFocus={handleHourInputFocus}
            onBlur={handleHourInputBlur}
            max={60}
            disabled
          />
        <h4  className={`${styles.timeMeas} `}>h</h4>

          <input
            type="number"
            value={remainingMinutes}
            onChange={handleMinuteInputChange}
            onFocus={handleMinuteInputFocus}
            onBlur={handleMinuteInputBlur}
            max={60}
            disabled

          />
        <h4 className={`${styles.timeMeas} `}>mins</h4>

          <input
            type="number"
            value={remainingSecondsInMinute}
            onChange={handleSecondInputChange}
            onFocus={handleSecondInputFocus}
            onBlur={handleSecondInputBlur}
            max={60}
            disabled

          />
          <h4  className={`${styles.timeMeas} `}>secs</h4>
          <div className={styles.backLayer}></div>
    </div>
    <div className={styles.timerButtonsController}>
    <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={handleReset} disabled={!isRunning && elapsedTime === 0}>
        STOP
      </button>
      </div>
    </div>
    </>
  )
  }  /*{displayed && <div className={styles.layer}>
  </div>}*/