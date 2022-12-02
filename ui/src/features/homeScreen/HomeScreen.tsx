import styles from "./HomeScreen.module.css";
import { MonsterModel } from "../../types/MonsterModel";

import { ReactComponent as EggIcon } from "../../assets/egg.svg";
import { MenuItem } from "../monsterDetail/MonsterDetail";

type MonsterProps = {
  monster: MonsterModel;
  menuItems: MenuItem[];
};

export default function HomeScreen(props: MonsterProps) {
  const { monster, menuItems } = props;
  return (
    <div className={styles.screen}>
      <div className={styles.monsterArea}>
        <EggIcon className={styles.monster} title={monster.name} />
      </div>
      <div className={styles.menusArea}>
        {menuItems.map((item, index) => {
          return (
            <div
              key={index}
              className={`${styles.menuItem} ${
                !item.active ? styles.inactive : ""
              }`}
            >
              {item.active ? item.activeState : item.inactiveState}
            </div>
          );
        })}
      </div>
    </div>
  );
}
