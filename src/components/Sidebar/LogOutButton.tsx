import { FunctionComponent } from "react";
import styles from "./LogOutButton.module.css";
const LogOutButton: FunctionComponent = () => {
  return (
    <div className={styles.buttonMenu}>
      <img className={styles.exitIcon} alt="" src="/exit.svg" />
      <div className={styles.signOut}>Sign Out</div>
    </div>
  );
};

export default LogOutButton;
