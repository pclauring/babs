import { useEffect, useState } from "react";
import Emulator from "../emulator";
import styles from "./MonsterDetail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { MonsterModel } from "../../types/MonsterModel";
import { MonsterService } from "../../services/MonsterService";
import MonsterStats from "../monster/MonsterStats";
import Controls from "../controls";

const MonsterDetail: React.FC<{}> = () => {
  const { id } = useParams();
  const [monster, setMonster] = useState<MonsterModel>();
  const navigate = useNavigate();

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
    console.log(event.currentTarget.id);
    switch (event.currentTarget.id) {
      case "up":
        break;
      case "down":
        break;
      case "left":
        break;
      case "right":
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
  };

  return (
    <div>
      {monster && (
        <Emulator
          headerComponent={Header(monster.name)}
          screenComponent={<MonsterStats monster={monster} />}
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
