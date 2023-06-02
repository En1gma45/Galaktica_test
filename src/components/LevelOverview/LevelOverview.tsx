import { FunctionComponent } from "react";
import styles from "./LevelOverview.module.css";
import ProgressBar from "../ReusableComponents/ProgressBar/ProgressBar";

interface LevelOverviewType {
  username: string;
  lvl: number;
  currentProgress: number;
  currentCourse: string;
}


const LevelOverview: FunctionComponent<LevelOverviewType> = ({username, lvl, currentProgress, currentCourse}) => {
  return (
    <div className={styles.progressCard}>
      <div className={styles.titleContainer}>
        <div className={styles.cardTitle}>Hey, {username}!</div>
        <div className={styles.wavingHand}>
          <img
            className={styles.wavingHandIcon}
            alt=""
            src="/waving-hand@2x.png"
          />
        </div>
      </div>
      <div className={styles.cardSubTitle}>
        Here’s complex overview of your progress
      </div>
      <div className={styles.levelProgress}>
        <img className={styles.planetM10} alt="" src={currentCourse} />
        <div className={styles.progressBar}>
          <ProgressBar circleWidth={200} percentage={currentProgress} radius={100} pointer={true}/>
        </div>
        <div className={styles.levelContainer}>
          <b className={styles.levelTitle}>{lvl}</b>
          <div className={styles.levelSubTitleContainer}>
            <div className={styles.levelSubTitle}>level</div>
          </div>
        </div>
        <div className={styles.progressBar}></div>
      </div>
      <div className={styles.cardSubTitle}>{100-currentProgress}% to reach next level</div>
    </div>
  );
};

export default LevelOverview;
