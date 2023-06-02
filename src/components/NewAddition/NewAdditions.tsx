import { FunctionComponent } from "react";
import styles from "./NewAdditions.module.css";

interface NewAdditionsTypes {
  coursesCount: number;
  userCount: number;
  photoCount: number;
}

const NewAdditions: FunctionComponent<NewAdditionsTypes> = ({
  coursesCount,
  userCount,
  photoCount
}) => {
  return (
    <div className={styles.newAdditions}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <img className={styles.frameChild} alt="" src="/group-4315.svg" />
          <div className={styles.newAdditions1}>New Additions</div>
        </div>
        <img className={styles.detailsIcon} alt="" src="/details.svg" />
      </div>
      <div className={styles.counters}>
        <div className={styles.coursesCounter}>
          <div className={styles.div}>{coursesCount}</div>
          <img className={styles.coursesIcon} alt="" src="/courses.svg" />
        </div>
        <div className={styles.userCounter}>
          <div className={styles.div1}>{userCount}</div>
          <img className={styles.userIcon} alt="" src={"/user.svg"} />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleWrapper}>
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-2546@2x.png"
          />
        </div>
        <div className={styles.rectangleWrapper}>
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-25461@2x.png"
          />
        </div>
        <div className={styles.rectangleWrapper}>
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-25462@2x.png"
          />
          <div className={styles.userCounter1}>
            <img className={styles.plusIcon} alt="" src={"/16-plus-icon.svg"} />
            <div className={styles.div2}>{photoCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAdditions;
