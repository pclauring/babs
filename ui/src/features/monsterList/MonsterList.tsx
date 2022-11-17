import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";
import { UserService } from "../../services/UserService";
import { UserModel } from "../../types/UserModel";
import Emulator from "../emulator";
// import styles from "./MonsterList.module.css";
import { Link } from "react-router-dom";
import { MonsterModel } from "../../types/MonsterModel";

const MonsterList: React.FC<{}> = () => {
  const { user } = useAuth0();
  // const navigate = useNavigate();
  const [userModel, setUserModel] = useState<UserModel>();
  useEffect(() => {
    const userService = new UserService(
      process.env.REACT_APP_API_HOST,
      undefined,
    );
    if (user?.email !== undefined) {
      userService.getUsersByEmail(user.email).then(({ data }) => {
        // if (data[0].monsters.length === 1) {
        //   navigate(`/monster/${data[0].monsters[0].id}`);
        // }
        console.log(data);
        setUserModel(data[0]);
      });
    }
  }, [user?.email]);

  return (
    <div>
      {userModel && (
        <Emulator
          headerComponent={Header(userModel.name)}
          screenComponent={List(userModel.monsters)}
          footerComponent={Options()}
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
            <li key={monster.id}>
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
export default MonsterList;
