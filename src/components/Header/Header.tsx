import { FunctionComponent } from "react";
import styles from "./Header.module.css";
const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <img
          className={styles.iconLightSearch}
          alt=""
          src="/iconlylightsearch.svg"
        />
        <input type="text" placeholder="Search" className={styles.searchInput} />
      </div>
      <div className={styles.settingsWrapper}>
        <div className={styles.langSelector}>
          <div className={styles.en}>EN</div>
          <img
            className={styles.iconLightArrowDown}
            alt=""
            src="/iconlylightarrow--down-2.svg"
          />
        </div>
        <img
          className={styles.notificationIcon}
          alt=""
          src="/notification.svg"
        />
        <div className={styles.profile}>
          <div className={styles.userInfo}>
            <div className={styles.userWrapper}>
              <div className={styles.user}>Peter</div>
            </div>
            <div className={styles.roleWrapper}>
              <div className={styles.role}>Admin</div>
            </div>
          </div>
          <img
            className={styles.avatarIcon}
            alt=""
            src="/avatar-40px.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
