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
          footerComponent={<Controls />}
        />
      )}
    </div>
  );
};

function Header(name: string) {
  return <div className={styles.header}>{name}</div>;
}

function Controls() {
  return (
    <div className={styles.controlPanel}>
      <div className={styles.controls}>
        <div className={styles.upArea}>
          <button className={styles.up} />
        </div>
        <div className={styles.rightArea}>
          <button className={styles.right} />
        </div>
        <div className={styles.leftArea}>
          <button className={styles.left} />
        </div>
        <div className={styles.downArea}>
          <button className={styles.down} />
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.secondaryArea}>
          <button className={styles.secondary} />
        </div>
        <div className={styles.primaryArea}>
          <button className={styles.primary} />
        </div>
      </div>
    </div>
  );
}
export default MonsterList;
