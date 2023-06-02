import { FunctionComponent } from "react";
import LogoContainer from "./LogoContainer";
import styles from "./Sidebar.module.css";
import LogOutButton from "./LogOutButton";
import SidebarLinks from "./SidebarLinks";
const Sidebar: FunctionComponent = () => {
  return (
    <div className={styles.sidebar}>
      <LogoContainer />
      <div className={styles.sidebarMenu}>
        <SidebarLinks />
        <LogOutButton />
      </div>
    </div>
  );
};

export default Sidebar;
