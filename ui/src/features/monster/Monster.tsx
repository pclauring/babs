import useGetAllMonsters from "./hooks/fetchMonster";

const Monster: React.FC<{}> = () => {
  const service = useGetAllMonsters();
  console.log(service);
  return (
    <div>
      <h2>Monster Page</h2>
      <div>
        {service &&
          service?.map((monster) => {
            return <div key={monster.id}>{monster.name}</div>;
          })}
      </div>
    </div>
  );
};

export default Monster;
