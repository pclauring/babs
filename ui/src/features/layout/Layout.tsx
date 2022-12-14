import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import AuthenticationButton from "../auth0/AuthenticationButton";
import styles from "./Layout.module.css";

export default function Layout() {
  const { user } = useAuth0();

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <div className={styles.main}>
        <div className={styles.nav}>
          <div className={styles.profile}>
            {user && <div className={styles.email}>{user.email}</div>}
          </div>
          <div className={styles.auth}>
            <AuthenticationButton />
          </div>
        </div>
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    </div>
  );
}
