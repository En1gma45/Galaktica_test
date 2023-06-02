import { FunctionComponent, useMemo } from "react";
import styles from "./DetailedProgress.module.css";
import ProgressBar from "../ReusableComponents/ProgressBar/ProgressBar";

type DetailedProgressType = {
  itemLogo: string;
  completedItems: number;
  allItems: number;
  title: string;
};

const DetailedProgress: FunctionComponent<DetailedProgressType> = ({
  itemLogo,
  completedItems,
  allItems,
  title,
}) => {


  return (
    <div className={styles.itemProgressContainer}>
      <div className={styles.progressBarContainer}>
        <img className={styles.itemProgressIcon} alt="logo" src={itemLogo} />
        <div className={styles.progressBar}>
          <ProgressBar circleWidth={64} percentage={completedItems / allItems *100} radius={32} pointer={false}/>
        </div>
      </div>
      <div className={styles.itemProgressInfo}>
        <div className={styles.itemProgressCounter}>
          <div className={styles.completedItems}>{completedItems}</div>
          <div className={styles.allItems}>{`/ ${allItems}`}</div>
        </div>
        <div className={styles.itemsType}>{title}</div>
      </div>
    </div>
  );
};

export default DetailedProgress;
