import { useEffect, useState } from 'react';
import frame1 from '../../assets/frame.svg';
import cat1 from '../../assets/cat_asleep.gif';
import cat2 from '../../assets/cat_awake.gif';
import styles from './Timer.module.css';
import TimerControls from "../TimerControls/TimerControls.jsx";

function Timer() {

  const [timeLeft, setTimeLeft] = useState(25*60);
  
  const minutes = Math.floor(timeLeft/60);
  const seconds = timeLeft % 60;

  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    setIsRunning(true);
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
      <img className={styles.timerCat} src={cat1} alt="asleep cat"></img>
      <img className={styles.timerFrame} src={frame1} alt="timer frame"></img>
      <div className={styles.timerNumber}>
        <p>
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </p>
      </div>
      <TimerControls onStart={handleStart}/>
    </div>

  );
}

export default Timer