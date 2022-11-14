import { useEffect, useState } from "react";
import { MonsterService } from "../../services/MonsterService";
import { MonsterModel } from "../../types/MonsterModel";
import CreateMonster from "./CreateMonster";
import MonsterStats from "./MonsterStats";

const Monster: React.FC<{}> = () => {
  const monsterService = new MonsterService(
    process.env.REACT_APP_API_HOST,
    undefined,
  );
  const [monsters, setMonsters] = useState<MonsterModel[]>();
  useEffect(() => {
    monsterService.getAllMonsters().then(({ data }) => {
      setMonsters(data.data);
    });
  });

  const handleCreateMonster = (
    e: React.FormEvent,
    formData: MonsterModel,
  ): void => {
    e.preventDefault();
    monsterService.createMonster(formData).then((result) => {
      console.log(result);
    });
  };

  return (
    <div>
      <h2>Monster Page</h2>
      <MonsterStats />
      <CreateMonster saveMonster={handleCreateMonster}></CreateMonster>
      <div>
        {monsters &&
          monsters?.map((monster) => {
            return <div key={monster.id}>{monster.name}</div>;
          })}
      </div>
    </div>
  );
};

export default Monster;
