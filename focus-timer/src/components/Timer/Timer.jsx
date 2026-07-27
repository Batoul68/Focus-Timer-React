import { useEffect, useState } from 'react';
import frame1 from '../../assets/frame.svg';
import catAsleep from '../../assets/cat_asleep.gif';
import catAwake from '../../assets/cat_awake.gif';
import styles from './Timer.module.css';
import TimerControls from "../TimerControls/TimerControls.jsx";
import TimeSetter from '../TimeSetter/TimeSetter.jsx';
const DEFAULT_TIME = 25*60;

function Timer() {
  
  const [startingTime, setStartingTime] = useState(DEFAULT_TIME);
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME);

  const [selectedMinutes, setSelectedMinutes] = useState("25");
  
  const minutes = Math.floor(timeLeft/60);
  const seconds = timeLeft % 60;

  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    setIsRunning(true);
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setTimeLeft(startingTime);
  }

  function handleSetTime(minutes) {
    const newTimeInSeconds = minutes * 60;

    setIsRunning(false);
    setStartingTime(newTimeInSeconds);
    setTimeLeft(newTimeInSeconds);

  }

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((currentTime) => {
        if (currentTime <= 1) {
          setIsRunning(false);
          return 0;
        }
        
        return currentTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };

  }, [isRunning]);

  return(
    <div className={styles.timerLayout}>
      <TimeSetter onApply={handleSetTime} />

      <div className={styles.timer}>
        <img className={styles.timerCat} src={isRunning ? catAwake : catAsleep} alt={isRunning ? "awake cat" : "asslep cat"}></img>
        <img className={styles.timerFrame} src={frame1} alt="timer frame"></img>
        <div className={styles.timerNumber}>
          <p>
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </p>
        </div>
        <TimerControls 
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
        />
    </div>
  </div>
  );
}

export default Timer