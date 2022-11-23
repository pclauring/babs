import styles from "./ScreenHeader.module.css";
export default function ScreenHeader(header: string) {
  return <div className={styles.header}>{header}</div>;
}
