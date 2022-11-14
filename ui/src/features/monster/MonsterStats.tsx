import styles from "./MonsterStats.module.css";
import { MonsterModel } from "../../types/MonsterModel";

type MonsterProps = {
  monster: MonsterModel;
};
export default function MonsterStats(props: MonsterProps) {
  const { monster } = props;
  return (
    <div className={styles.monsterInfoPanel}>
      <h2>Monster stats</h2>
      <div>
        HP: {monster.health} / {monster.maxHealth}
      </div>
      <div>
        PP: {monster.energy} / {monster.maxEnergy}
      </div>
    </div>
  );
}
