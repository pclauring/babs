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

function List(monsters: MonsterModel[]) {
  return (
    <div>
      <ul>
        {monsters.map((monster) => {
          return (
            <li>
              <Link to={`/monster/${monster.id}`} key={monster.id}>
                {monster.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Header(name: string) {
  return <h1>{name}</h1>;
}

function Options() {
  return (
    <ul>
      <li>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
    </ul>
  );
}

function CSSButton() {
  return <button className={styles.cssButton}>BUTTON</button>;
}

function Buttons() {
  return (
    <div>
      <CSSButton />
    </div>
  );
}
export default MonsterList;
