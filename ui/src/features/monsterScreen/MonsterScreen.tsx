import styles from "./MonsterScreen.module.css";
import { MonsterModel } from "../../types/MonsterModel";

import { ReactComponent as EggIcon } from "../../assets/egg.svg";
import { MenuItem } from "../monsterDetail/MonsterDetail";
import StatsScreen from "../statsScreen/StatsScreen";

type MonsterProps = {
  monster: MonsterModel;
  menuItems: MenuItem[];
};

export default function MonsterScreen(props: MonsterProps) {
  const { monster, menuItems } = props;
  const screenComponents = [
    <TrainingScreen monster={monster} menuItems={menuItems} />,
    <BattleScreen monster={monster} menuItems={menuItems} />,
    <PuzzleScreen monster={monster} menuItems={menuItems} />,
    <StatsScreen monster={monster} />,
    <AchievementsScreen monster={monster} menuItems={menuItems} />,
  ];
  let activeIndex = menuItems.findIndex((item) => item.selected === true);
  let screen =
    activeIndex === -1 ? (
      <DefaultScreen monster={monster} menuItems={menuItems} />
    ) : (
      screenComponents[activeIndex]
    );
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

function TrainingScreen(screenProps: MonsterProps) {
  return <div>Training Screen</div>;
}

function BattleScreen(screenProps: MonsterProps) {
  return <div>Battle Screen</div>;
}

function PuzzleScreen(screenProps: MonsterProps) {
  return <div>Puzzle Screen</div>;
}

function AchievementsScreen(screenProps: MonsterProps) {
  return <div>Achievements Screen</div>;
}
