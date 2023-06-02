import { FunctionComponent } from "react";
import styles from "./SidebarLinks.module.css";

const SidebarLinks: FunctionComponent = () => {
  return (
    <div className={styles.sidebarLinksMain}>
      <div className={styles.buttonMenu_active}>
        <img className={styles.homeIcon} alt="" src="/home.svg" />
        <div className={styles.home}>Home</div>
      </div>
      <div className={styles.buttonMenu}>
        <img className={styles.homeIcon} alt="" src="/courses1.svg" />
        <div className={styles.courses}>Courses</div>
      </div>
      <div className={styles.buttonMenu}>
        <img className={styles.homeIcon} alt="" src="/libraries.svg" />
        <div className={styles.courses}>Libraries</div>
      </div>
      <div className={styles.buttonMenu}>
        <img className={styles.homeIcon} alt="" src="/statistics.svg" />
        <div className={styles.courses}>Statistics</div>
      </div>
      <div className={styles.sidebarLinksChild} />
      <div className={styles.buttonMenu}>
        <img className={styles.homeIcon} alt="" src="/users-guideline.svg" />
        <div className={styles.courses}>Users guideline</div>
      </div>
    </div>
  );
};

export default SidebarLinks;
