import frame1 from '../../assets/new_frame1.png'
import cat1 from '../../assets/character_asleep.png'

function Timer() {

  return(
    <div className="timer">
      <img className="timer-cat" src={cat1} alt="asleep cat"></img>
      <img className="timer-frame" src={frame1} alt="timer frame"></img>
      <div className="timer-numbers">25.00</div>
    </div>

  );
}

export default Timer