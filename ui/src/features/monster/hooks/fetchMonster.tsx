import { useEffect, useState } from "react";
import { MonsterModel } from "../../../types/MonsterModel";

const useGetAllMonsters = () => {
  const [monsters, setMonsters] = useState<MonsterModel[]>();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_HOST + "/monsters/all")
      .then((response) => response.json())
      .then((response) => setMonsters(response.data))
      .catch((error) => setMonsters([]));
  }, []);

  return monsters;
};

export default useGetAllMonsters;
