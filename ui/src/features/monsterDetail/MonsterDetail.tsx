import { useEffect, useState } from "react";
import Emulator from "../emulator";
import styles from "./MonsterDetail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { MonsterModel } from "../../types/MonsterModel";
import { MonsterService } from "../../services/MonsterService";
import Screen from "../monsterScreen/MonsterScreen";
import Controls from "../controls";

import { ReactComponent as SwordIcon } from "../../assets/sword.svg";
import { ReactComponent as InactiveSwordIcon } from "../../assets/sword-inactive.svg";
import { ReactComponent as StudyIcon } from "../../assets/brain.svg";
import { ReactComponent as InactiveStudyIcon } from "../../assets/brain-inactive.svg";
import { ReactComponent as ScaleIcon } from "../../assets/scale.svg";
import { ReactComponent as InactiveScaleIcon } from "../../assets/scale-inactive.svg";
import { ReactComponent as TrainingIcon } from "../../assets/glove.svg";
import { ReactComponent as InactiveTrainingIcon } from "../../assets/glove-inactive.svg";
import { ReactComponent as TrophyIcon } from "../../assets/trophy.svg";
import { ReactComponent as InactiveTrophyIcon } from "../../assets/trophy-inactive.svg";

export type MenuItem = {
  active: boolean;
  activeState: React.ReactNode;
  inactiveState: React.ReactNode;
  selected: boolean;
};

export type MonsterEmulatorState = {
  monster: MonsterModel;
  menuItems: MenuItem[];
};

const MonsterDetail: React.FC<{}> = () => {
  const { id } = useParams();
  const [monsterState, setMonsterState] = useState<MonsterEmulatorState>();

  const navigate = useNavigate();
  const screen = monsterState ? (
    <Screen monster={monsterState.monster} menuItems={monsterState.menuItems} />
  ) : undefined;

  useEffect(() => {
    const monsterService = new MonsterService(
      process.env.REACT_APP_API_HOST,
      undefined,
    );
    if (id !== undefined)
      monsterService.getMonsterById(parseInt(id)).then(({ data }) => {
        setMonsterState({
          monster: data,
          menuItems: [
            {
              active: true,
              activeState: <TrainingIcon />,
              inactiveState: <InactiveTrainingIcon />,
              selected: false,
            },
            {
              active: false,
              activeState: <SwordIcon />,
              inactiveState: <InactiveSwordIcon />,
              selected: false,
            },
            {
              active: false,
              activeState: <StudyIcon />,
              inactiveState: <InactiveStudyIcon />,
              selected: false,
            },
            {
              active: false,
              activeState: <ScaleIcon />,
              inactiveState: <InactiveScaleIcon />,
              selected: false,
            },
            {
              active: false,
              activeState: <TrophyIcon />,
              inactiveState: <InactiveTrophyIcon />,
              selected: false,
            },
          ],
        });
      });
  }, [id]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (monsterState !== undefined) {
      let activeIndex = monsterState.menuItems.findIndex(
        (item) => item.active === true,
      );

      let selectedIndex = monsterState.menuItems.findIndex(
        (item) => item.selected === true,
      );

      let isItemSelected = selectedIndex !== -1;

      console.log(event.currentTarget.id);
      let newMenus: MenuItem[] = monsterState.menuItems;
      switch (event.currentTarget.id) {
        case "up":
          break;
        case "down":
          break;
        case "left":
          if (activeIndex > 0 && !isItemSelected) {
            activeIndex--;
            newMenus = monsterState.menuItems.map((item, index) => {
              return { ...item, active: index === activeIndex };
            });
          }
          break;
        case "right":
          if (
            activeIndex < monsterState.menuItems.length - 1 &&
            !isItemSelected
          ) {
            activeIndex++;
            newMenus = monsterState.menuItems.map((item, index) => {
              return { ...item, active: index === activeIndex };
            });
          }
          break;
        case "start":
          break;
        case "back":
          navigate("/");
          break;
        case "primary":
          newMenus = monsterState.menuItems.map((item, index) => {
            return { ...item, selected: index === activeIndex };
          });
          break;
        case "secondary":
          newMenus = monsterState.menuItems.map((item, index) => {
            return { ...item, selected: false };
          });
          break;
        default:
          break;
      }

      setMonsterState({
        monster: monsterState.monster,
        menuItems: newMenus,
      });
    }
  };

  return (
    <div>
      {monsterState && (
        <Emulator
          headerComponent={Header(monsterState.monster.name)}
          screenComponent={screen}
          footerComponent={<Controls handleClick={handleClick} />}
        />
      )}
    </div>
  );
};

function Header(name: string) {
  return <div className={styles.header}>{name}</div>;
}

export default MonsterDetail;
