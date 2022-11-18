import styles from "./MonsterStats.module.css";
import { MonsterModel } from "../../types/MonsterModel";
import { ReactComponent as SwordIcon } from "../../assets/sword.svg";

type MonsterProps = {
  monster: MonsterModel;
};
export default function MonsterStats(props: MonsterProps) {
  const { monster } = props;
  return (
    <div>
      <div className={styles.vitals}>
        <div className={styles.vitalHeader}>CURRENT VITALS</div>
        <div className={styles.health}>
          HP: {monster.health} / {monster.maxHealth}
        </div>
        <div className={styles.energy}>
          PP: {monster.energy} / {monster.maxEnergy}
        </div>
      </div>
      <div className={styles.attributes}>
        <div>
          <SwordIcon style={{ height: "32px" }} />
          OFFENSE: {monster.offense}
        </div>
        <div>DEFENSE: {monster.defense}</div>
        <div>TYPE: {monster.type}</div>
        <div>MOOD: {monster.mood}</div>
      </div>
    </div>
  );
}
