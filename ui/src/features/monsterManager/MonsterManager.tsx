import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { UserService } from "../../services/UserService";
import { UserModel } from "../../types/UserModel";
import Emulator from "../emulator";
import styles from "./MonsterManager.module.css";
import { MonsterModel } from "../../types/MonsterModel";
import Controls from "../controls";
import ScreenHeader from "../screenHeader";
import { ReactComponent as AddIcon } from "../../assets/add.svg";

const MonsterManager: React.FC<{}> = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const [userModel, setUserModel] = useState<UserModel>();
  const [tiles, setTiles] = useState<Tile[]>([]);

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

  useEffect(() => {
    const initialTiles = [];
    for (let index = 0; index < 9; index++) {
      if (userModel && userModel?.monsters[index]) {
        initialTiles.push({
          monster: userModel.monsters[index],
          active: false,
          index: index,
        });
      } else {
        initialTiles.push({ active: false, index: index });
      }
    }
    initialTiles[0].active = true;
    console.log(initialTiles);
    setTiles(initialTiles);
  }, [userModel]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const activeTile = tiles?.filter((tile) => {
      return tile.active === true;
    });

    let activeIndex: number = activeTile ? activeTile[0].index : 0;
    switch (event.currentTarget.id) {
      case "up":
        if (activeIndex - 3 >= 0) activeIndex -= 3;
        break;
      case "down":
        if (activeIndex + 3 <= 8) activeIndex += 3;
        break;
      case "left":
        if (activeIndex - 1 >= 0) activeIndex--;
        break;
      case "right":
        if (activeIndex + 1 <= 8) activeIndex++;
        break;
      case "primary":
        if (activeTile[0].monster) {
          navigate(`/monster/${activeTile[0].monster?.id}`);
        }
        break;
      default:
        break;
    }

    if (tiles && activeTile) {
      const newTiles = tiles.map((tile) => {
        return { ...tile, active: tile.index === activeIndex };
      });
      setTiles(newTiles);
    }
  };

  return (
    <div>
      {userModel && (
        <Emulator
          headerComponent={ScreenHeader("Monster Manager")}
          screenComponent={tiles && List(tiles)}
          footerComponent={<Controls handleClick={handleClick} />}
        />
      )}
    </div>
  );
};

interface Tile {
  monster?: MonsterModel;
  active: boolean;
  index: number;
}

function List(tiles: Tile[]) {
  return (
    <div>
      <div className={styles.tiles}>
        {tiles.map((tile, index) => {
          if (tile?.monster) {
            return (
              <div key={index} className={tile.active ? styles.active : ""}>
                {tile.monster.name}
              </div>
            );
          } else {
            return (
              <div key={index} className={tile.active ? styles.active : ""}>
                <AddIcon key={index} style={{ height: "32px" }} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default MonsterManager;
