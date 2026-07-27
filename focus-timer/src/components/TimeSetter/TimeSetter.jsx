import { useState } from "react";
import styles from "./TimeSetter.module.css";

function TimeSetter({ onApply }) {
  const [minutes, setMinutes] = useState("25");

  function handleApply() {
    const numericMinutes = Number(minutes);

    if (!Number.isInteger(numericMinutes) || numericMinutes < 1) {
      return;
    }

    onApply(numericMinutes);
  }

  return (
    <div className={styles.timeSetter}>
      <label className={styles.timeSetterLabel} htmlFor="minutes">Set timer</label>

      <input
        className={styles.timeSetterInput}
        id="minutes"
        type="number"
        min="1"
        value={minutes}
        onChange={(event) => {
          setMinutes(event.target.value);
        }}
      />

      <button className={styles.timeSetterButton} type="button" onClick={handleApply}>
        Apply
      </button>
    </div>
  );
}

export default TimeSetter;