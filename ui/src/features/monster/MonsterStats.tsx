import styles from "./MonsterStats.module.css";
import { MonsterModel } from "../../types/MonsterModel";
import { ReactComponent as SwordIcon } from "../../assets/sword-color.svg";
import { ReactComponent as ShieldIcon } from "../../assets/shield-brown.svg";
import { ReactComponent as HealthIcon } from "../../assets/health.svg";
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
        <div className={styles.health}>
          <HealthIcon style={{ height: "1em" }} /> HEALTH: {monster.health}/
          {monster.maxHealth}
        </div>
        <div className={styles.energy}>
          <EnergyIcon style={{ height: "1em" }} /> ENERGY: {monster.energy}/
          {monster.maxEnergy}
        </div>
      </div>
      <div className={styles.attributes}>
        <div>
          <SwordIcon style={{ height: "1em" }} />
          OFFENSE: {monster.offense}
        </div>
        <div>
          <ShieldIcon style={{ height: "1em" }} />
          DEFENSE: {monster.defense}
        </div>
        <div>TYPE: {monster.type}</div>
        <div>MOOD: {monster.mood}</div>
      </div>
    </div>
  );
}
