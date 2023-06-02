import { FunctionComponent } from "react";
import styles from "./Carousel.module.css";
import ProgressBar from "../ReusableComponents/ProgressBar/ProgressBar";

interface CarouselType {
  coursesList?: Array<{
    id: number;
    courseIcon: string;
    courseProgress: number;
  }>
  currentCourse?: number;
  currentProgress?: number;
}

const TEMP: Array<{
  id: number;
  courseIcon: string;
  courseProgress: number;
}> = [
    {
      id: 1,
      courseIcon: "/planet-m-10.svg",
      courseProgress: 100,
    },
    {
      id: 2,
      courseIcon: "/planet-m-10.svg",
      courseProgress: 100,
    },
    {
      id: 3,
      courseIcon: "/planet-m-10.svg",
      courseProgress: 100,
    },
    {
      id: 4,
      courseIcon: "/planet-m-10.svg",
      courseProgress: 37,
    },
    {
      id: 5,
      courseIcon: "/planet-m-10.svg",
      courseProgress: 0,
    }
  ];


const Carousel: FunctionComponent<CarouselType> = ({ coursesList = TEMP, currentCourse = 4, currentProgress = 37 }) => {
  return (
    <div className={styles.carouselContainer}>
      <>
        {coursesList.map((item) => {
          return (
            item.id === currentCourse ?
              <div className={styles.courseItemContainer} key={item.id}>
                <img className={styles.astronautIcon} alt="" src="/austronaut.svg" />
                <img src={item.courseIcon} alt="planet" className={styles.courseItem} style={{"position": "relative", "top": "-4rem"}} />
                <div className={styles.progressBarContainer}>
                  <ProgressBar radius={105 / 2} circleWidth={105} percentage={currentProgress} pointer={true} />
                </div>
              </div>
              :
              <div className={styles.courseItemContainer} key={item.id}>
                <img src={item.courseIcon} alt="planet" className={styles.courseItem} />
              </div>
          )
        })}
      </>
      <div className={styles.completedContainer}>
        <b className={styles.completedTitle}>{currentProgress}% Completed</b>
      </div>
    </div>
  );
};

export default Carousel;
