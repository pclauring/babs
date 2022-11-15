import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LoginButton.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className={styles.submit} onClick={() => loginWithRedirect()}>
      LOGIN
    </button>
  );
};

export default LoginButton;
