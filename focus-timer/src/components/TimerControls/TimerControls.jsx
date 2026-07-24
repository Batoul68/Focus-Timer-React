import styles from './TimerControls.module.css'
import startButton from '../../assets/startButton.svg'
import pauseButton from '../../assets/pauseButton.svg'
import resetButton from '../../assets/resetButton.svg'

function TimerControls() {

  return(
    <div className={styles.timerControls}>
      <img className={styles.startButton} src={startButton} alt="start button"></img>
      <img className={styles.pauseButton} src={pauseButton} alt="pause button"></img>
      <img className={styles.resetButton} src={resetButton} alt="reset button"></img>

    </div>
  );
}

export default TimerControls