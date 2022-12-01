import { MonsterService } from "../../services/MonsterService";
import { MonsterModel } from "../../types/MonsterModel";
import CreateForm from "./CreateForm";

const CreateScreen: React.FC<{}> = () => {
  const monsterService = new MonsterService(
    process.env.REACT_APP_API_HOST,
    undefined,
  );

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
      <h2>Create Form</h2>
      <CreateForm saveMonster={handleCreateMonster}></CreateForm>
    </div>
  );
};

export default CreateScreen;
