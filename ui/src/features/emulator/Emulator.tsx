import styles from "./Emulator.module.css";
interface EmulatorProps {
  headerComponent: React.ReactNode;
  screenComponent: React.ReactNode;
  footerComponent: React.ReactNode;
}

const Emulator: React.FC<EmulatorProps> = ({
  headerComponent,
  screenComponent,
  footerComponent,
}) => {
  return (
    <div className={styles.emulator}>
      <div className={styles.header}>{headerComponent}</div>
      <div className={styles.screen}>{screenComponent}</div>
      <div className={styles.footer}>{footerComponent}</div>
    </div>
  );
};

export default Emulator;
