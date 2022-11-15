import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MonsterService } from "../../services/MonsterService";
import { MonsterModel } from "../../types/MonsterModel";
import styles from "./MonsterDetail.module.css";
import MonsterStats from "./MonsterStats";

const MonsterDetail: React.FC<{}> = () => {
  const monsterService = new MonsterService(
    process.env.REACT_APP_API_HOST,
    undefined,
  );
  const { id } = useParams();
  const [monster, setMonster] = useState<MonsterModel>();
  useEffect(() => {
    if (id !== undefined)
      monsterService.getMonsterById(parseInt(id)).then(({ data }) => {
        setMonster(data);
      });
  });

  return (
    <div className={styles.main}>
      {monster && <div className={styles.name}>NAME: {monster.name}</div>}
      {monster && <MonsterStats monster={monster} />}
    </div>
  );
};

export default MonsterDetail;
