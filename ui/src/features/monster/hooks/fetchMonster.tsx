import { useEffect, useState } from "react";
import { Monster } from "../../../types/Monster";

const useGetAllMonsters = () => {
  const [monsters, setMonsters] = useState<Monster[]>();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_HOST + "/monsters/all")
      .then((response) => response.json())
      .then((response) => setMonsters(response))
      .catch((error) => setMonsters([]));
  }, []);

  return monsters;
};

export default useGetAllMonsters;
