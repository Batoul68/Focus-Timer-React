import styles from './TimerControls.module.css';
import startButton from '../../assets/startButton.svg';
import pauseButton from '../../assets/pauseButton.svg';
import resetButton from '../../assets/resetButton.svg';

function TimerControls({onStart}) {
  return(
    <div className={styles.timerControls}>
      <button 
        className={styles.buttonWrapper}
        onClick={onStart}
        aria-label="Start timer"
      >
        <img className={styles.startButton} src={startButton} alt="start button"></img>
      </button>

      <button className={styles.buttonWrapper}>
        <img className={styles.pauseButton} src={pauseButton} alt="pause button"></img>
      </button>

      <button className={styles.buttonWrapper}>
        <img className={styles.resetButton} src={resetButton} alt="reset button"></img>
      </button>
      
      
    </div>
  );
}

export default TimerControls