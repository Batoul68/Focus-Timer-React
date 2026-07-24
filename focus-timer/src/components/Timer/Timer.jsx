import frame1 from '../../assets/frame.svg'
import cat1 from '../../assets/cat_asleep.gif'
import cat2 from '../../assets/cat_awake.gif'
import styles from './Timer.module.css'
import TimerControls from "../TimerControls/TimerControls.jsx"

function Timer() {

  return(
    <div className={styles.timer}>
      <img className={styles.timerCat} src={cat1} alt="asleep cat"></img>
      <img className={styles.timerFrame} src={frame1} alt="timer frame"></img>
      <div className={styles.timerNumber}>25:00</div>
      <TimerControls />
    </div>

  );
}/*
      
      */
export default Timer