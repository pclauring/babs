import styles from "./Controls.module.css";

export default function Controls() {
  return (
    <div className={styles.controlPanel}>
      <div className={styles.controls}>
        <div className={styles.upArea}>
          <button className={styles.up} />
        </div>
        <div className={styles.rightArea}>
          <button className={styles.right} />
        </div>
        <div className={styles.leftArea}>
          <button className={styles.left} />
        </div>
        <div className={styles.downArea}>
          <button className={styles.down} />
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.secondaryArea}>
          <button className={styles.secondary} />
        </div>
        <div className={styles.primaryArea}>
          <button className={styles.primary} />
        </div>
      </div>
    </div>
  );
}
