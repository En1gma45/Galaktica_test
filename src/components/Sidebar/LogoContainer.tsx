import { FunctionComponent } from "react";
import styles from "./LogoContainer.module.css";
const LogoContainer: FunctionComponent = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        <img className={styles.dove1Icon} alt="" src="/dove-1.svg" />
        <img className={styles.logotypeIcon} alt="" src="/logotype.svg" />
      </div>
    </div>
  );
};

export default LogoContainer;
