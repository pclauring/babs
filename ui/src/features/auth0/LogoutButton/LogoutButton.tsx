import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className={styles.signout}
      onClick={() => logout({ returnTo: window.location.origin })}
    ></button>
  );
};

export default LogoutButton;
