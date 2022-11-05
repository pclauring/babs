import useGetAllMonsters from "./hooks/fetchMonster";

export default function Monster() {
  const service = useGetAllMonsters();
  console.log(service);
  return (
    <div>
      <h2>Monster Page</h2>
    </div>
  );
}
