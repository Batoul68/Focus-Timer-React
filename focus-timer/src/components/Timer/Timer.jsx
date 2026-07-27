import { useEffect, useState } from 'react';
import frame1 from '../../assets/frame.svg';
import catAsleep from '../../assets/cat_asleep.gif';
import catAwake from '../../assets/cat_awake.gif';
import styles from './Timer.module.css';
import TimerControls from "../TimerControls/TimerControls.jsx";
const STARTING_TIME = 25*60;

function Timer() {

  const [timeLeft, setTimeLeft] = useState(STARTING_TIME);
  
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
    setTimeLeft(STARTING_TIME);
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
    <div className={styles.timer}>
      <img className={styles.timerCat} src={isRunning ? catAwake : catAsleep} alt="asleep cat"></img>
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

  );
}

export default Timer