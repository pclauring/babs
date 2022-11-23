import React from "react";
import styles from "./Controls.module.css";

type ControlProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function Controls({ handleClick }: ControlProps) {
  return (
    <div className={styles.controlPanel}>
      <div className={styles.controls}>
        <div className={styles.upArea}>
          <button id="up" onClick={handleClick} className={styles.up} />
        </div>
        <div className={styles.rightArea}>
          <button id="right" onClick={handleClick} className={styles.right} />
        </div>
        <div className={styles.leftArea}>
          <button id="left" onClick={handleClick} className={styles.left} />
        </div>
        <div className={styles.downArea}>
          <button id="down" onClick={handleClick} className={styles.down} />
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.secondaryArea}>
          <button
            id="secondary"
            onClick={handleClick}
            className={styles.secondary}
          />
        </div>
        <div className={styles.primaryArea}>
          <button
            id="primary"
            onClick={handleClick}
            className={styles.primary}
          />
        </div>
      </div>
    </div>
  );
}
