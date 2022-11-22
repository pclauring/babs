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
          screenComponent={<MonsterStats monster={monster} />}
          footerComponent={<Buttons />}
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
    <div className={styles.buttons}>
      <div>
        <button style={{ padding: "10px" }} className={styles.primary} />
      </div>
      <div>
        <button style={{ padding: "10px" }} className={styles.destructive} />
      </div>
    </div>
  );
}
export default MonsterList;
