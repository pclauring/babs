import { useEffect, useState } from "react";
import Emulator from "../emulator";
import styles from "./MonsterDetail.module.css";
import { Link, useParams } from "react-router-dom";
import { MonsterModel } from "../../types/MonsterModel";
import { MonsterService } from "../../services/MonsterService";
import MonsterStats from "../monster/MonsterStats";

const MonsterList: React.FC<{}> = () => {
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
    <div>
      {monster && (
        <Emulator
          headerComponent={Header(monster.name)}
          screenComponent={<Buttons />}
          footerComponent={<MonsterStats monster={monster} />}
        />
      )}
    </div>
  );
};

function Header(name: string) {
  return <h1>{name}</h1>;
}

function Buttons() {
  return (
    <div>
      <button className={styles.primary} />
      <button className={styles.destructive} />
    </div>
  );
}
export default MonsterList;
