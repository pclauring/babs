import styles from "./MonsterStats.module.css";
import { MonsterModel } from "../../types/MonsterModel";
import { ReactComponent as SwordIcon } from "../../assets/sword.svg";
import { ReactComponent as TypeIcon } from "../../assets/type.svg";
import { ReactComponent as HealthIcon } from "../../assets/heart-anitomical.svg";
import { ReactComponent as ShieldIcon } from "../../assets/shield-round.svg";
import { ReactComponent as MoodIcon } from "../../assets/brain.svg";
import { ReactComponent as EnergyIcon } from "../../assets/energy.svg";

type MonsterProps = {
  monster: MonsterModel;
};
export default function MonsterStats(props: MonsterProps) {
  const { monster } = props;
  return (
    <div>
      <div className={styles.vitals}>
        <div className={styles.vitalHeader}>CURRENT VITALS</div>
      </div>
      <div className={styles.attributes}>
        <div className={styles.attribute}>
          <HealthIcon style={{ height: "32px" }} />
          {monster.health}/{monster.maxHealth}
        </div>
        <div className={styles.attribute}>
          <EnergyIcon style={{ height: "32px" }} />
          {monster.energy}/{monster.maxEnergy}
        </div>
        <div className={styles.attribute}>
          <SwordIcon style={{ height: "32px" }} />
          {monster.offense}
        </div>
        <div className={styles.attribute}>
          <ShieldIcon style={{ height: "32px" }} />
          {monster.defense}
        </div>
        <div className={styles.attribute}>
          <TypeIcon style={{ height: "32px" }} />
          {monster.type}
        </div>
        <div className={styles.attribute}>
          <MoodIcon style={{ height: "32px" }} />
          {monster.mood}
        </div>
      </div>
    </div>
  );
}
