import { useEffect, useState } from "react";
import Emulator from "../emulator";
import styles from "./MonsterDetail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { MonsterModel } from "../../types/MonsterModel";
import { MonsterService } from "../../services/MonsterService";
import StatsScreen from "../statsScreen/StatsScreen";
import HomeScreen from "../homeScreen/HomeScreen";
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
};

const MonsterDetail: React.FC<{}> = () => {
  const { id } = useParams();
  const [monster, setMonster] = useState<MonsterModel>();
  const [menus, setMenus] = useState<MenuItem[]>([
    {
      active: true,
      activeState: <TrainingIcon />,
      inactiveState: <InactiveTrainingIcon />,
    },
    {
      active: false,
      activeState: <SwordIcon />,
      inactiveState: <InactiveSwordIcon />,
    },
    {
      active: false,
      activeState: <StudyIcon />,
      inactiveState: <InactiveStudyIcon />,
    },
    {
      active: false,
      activeState: <ScaleIcon />,
      inactiveState: <InactiveScaleIcon />,
    },
    {
      active: false,
      activeState: <TrophyIcon />,
      inactiveState: <InactiveTrophyIcon />,
    },
  ]);
  const navigate = useNavigate();
  const screen = monster ? (
    <HomeScreen monster={monster} menuItems={menus} />
  ) : undefined;

  useEffect(() => {
    const monsterService = new MonsterService(
      process.env.REACT_APP_API_HOST,
      undefined,
    );
    if (id !== undefined)
      monsterService.getMonsterById(parseInt(id)).then(({ data }) => {
        console.log(data);
        setMonster(data);
      });
  }, [id]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    let activeIndex = menus?.findIndex((item) => item.active === true);

    console.log(event.currentTarget.id);
    switch (event.currentTarget.id) {
      case "up":
        break;
      case "down":
        break;
      case "left":
        if (activeIndex > 0) activeIndex--;
        break;
      case "right":
        if (activeIndex < menus.length - 1) activeIndex++;
        break;
      case "start":
        break;
      case "back":
        navigate("/");
        break;
      case "primary":
        break;
      default:
        break;
    }

    const newMenus = menus.map((item, index) => {
      return { ...item, active: index === activeIndex };
    });
    setMenus(newMenus);
  };

  return (
    <div>
      {monster && (
        <Emulator
          headerComponent={Header(monster.name)}
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
