import { useEffect, useState } from "react";
import { MonsterService } from "../../../services/MonsterService";
import { MonsterModel } from "../../../types/MonsterModel";

const useGetAllMonsters = () => {
  const [monsters, setMonsters] = useState<MonsterModel[]>();

  useEffect(() => {
    const service = new MonsterService(
      process.env.REACT_APP_API_HOST,
      undefined,
    );
    // fetch(process.env.REACT_APP_API_HOST + "/monsters/all")
    //   .then((response) => response.json())
    //   .then((response) => setMonsters(response.data))
    //   .catch((error) => setMonsters([]));
    service.getAllMonsters().then((response) => {
      setMonsters(response.data.data);
    });
  }, []);

  return monsters;
};

export default useGetAllMonsters;
