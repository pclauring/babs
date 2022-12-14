import styles from "./MonsterScreen.module.css";
import { MonsterModel } from "../../types/MonsterModel";

import { ReactComponent as EggIcon } from "../../assets/egg.svg";
import { MenuItem } from "../monsterDetail/MonsterDetail";

type MonsterProps = {
  monster: MonsterModel;
  menuItems: MenuItem[];
};

export default function MonsterScreen(props: MonsterProps) {
  const { monster, menuItems } = props;
  let screen = <DefaultScreen monster={monster} menuItems={menuItems} />;
  return <div className={styles.screen}>{screen}</div>;
}

function DefaultScreen(screenProps: MonsterProps) {
  const { monster, menuItems } = screenProps;
  return (
    <div className={styles.screen}>
      <div className={styles.monsterArea}>
        <img
          className={styles.monster}
          src={require(`../../assets/${monster.sprite}`)}
          alt={monster.sprite ? monster.sprite : ""}
        />
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
