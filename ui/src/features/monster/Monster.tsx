import useGetAllMonsters from "./hooks/fetchMonster";

const Monster: React.FC<{}> = () => {
  const monsters = useGetAllMonsters();
  console.log(monsters);
  return (
    <div>
      <h2>Monster Page</h2>
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
