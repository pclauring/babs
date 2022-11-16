import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserService } from "../../services/UserService";
import { UserModel } from "../../types/UserModel";
import styles from "./MonsterList.module.css";

const MonsterList: React.FC<{}> = () => {
  const { user } = useAuth0();
  const [userModel, setUserModel] = useState<UserModel>();
  useEffect(() => {
    const userService = new UserService(
      process.env.REACT_APP_API_HOST,
      undefined,
    );
    if (user?.email !== undefined) {
      userService.getUsersByEmail(user.email).then(({ data }) => {
        console.log(data);
        setUserModel(data[0]);
      });
    }
  }, [user?.email]);

  return (
    <div className={styles.main}>
      {userModel && <h1>{userModel.name}</h1>}
      {userModel &&
        userModel.monsters.map((monster) => {
          return <div key={monster.id}>{monster.name}</div>;
        })}
      <div className={styles.box}></div>
    </div>
  );
};

export default MonsterList;
