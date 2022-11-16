import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MonsterService } from "../../services/MonsterService";
import { MonsterModel } from "../../types/MonsterModel";
import styles from "./MonsterDetail.module.css";
import MonsterStats from "./MonsterStats";

const MonsterDetail: React.FC<{}> = () => {
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
    <div className={styles.main}>
      {monster && <div className={styles.name}>NAME: {monster.name}</div>}
      <div className={styles.box}></div>
      {monster && <MonsterStats monster={monster} />}
    </div>
  );
};

export default MonsterDetail;
