import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

interface LinkItem {
  active: boolean;
  label: string;
  to: string;
}

export default function Layout() {
  const [layoutItems, setLayoutItems] = useState<LinkItem[]>([
    { active: true, label: "Home", to: "/" },
    { active: false, label: "Monster", to: "/monster" },
    { active: false, label: "Profile", to: "/" },
  ]);

  function handleLinkClick(e: React.MouseEvent<HTMLElement>) {
    const newLayoutItems = layoutItems.map((item) => {
      return { ...item, active: e.currentTarget.innerHTML === item.label };
    });
    setLayoutItems(newLayoutItems);
  }
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav>
        <ul className={styles.ul}>
          {layoutItems &&
            layoutItems?.map((item) => {
              return (
                <li className={styles.li} key={item.label}>
                  <Link
                    onClick={handleLinkClick}
                    className={
                      styles.link + `${item.active ? " " + styles.active : ""}`
                    }
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          {/* <li className={styles.li}>
            <Link onClick={handleLinkClick} className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} to="/monster">
              Monster
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} to="/Profile">
              Profile
            </Link>
          </li> */}
        </ul>
      </nav>
      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
