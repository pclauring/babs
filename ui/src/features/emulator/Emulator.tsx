import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MonsterService } from "../../services/MonsterService";
import { MonsterModel } from "../../types/MonsterModel";
import styles from "./Emulator.module.css";
import MonsterStats from "../monster/MonsterStats";

const Emulator: React.FC<{}> = () => {
  const { id } = useParams();
  const [monster, setMonster] = useState<MonsterModel>();
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

  return (
    <div className={styles.emulator}>
      <div className={styles.header}>
        {monster && <div className={styles.name}>NAME: {monster.name}</div>}
      </div>
      <div className={styles.screen}></div>
      <div className={styles.footer}>
        {monster && <MonsterStats monster={monster} />}
      </div>
    </div>
  );
};

export default Emulator;
