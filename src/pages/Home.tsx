import { FunctionComponent, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./Home.module.css";
import NewAdditions from "../components/NewAddition/NewAdditions";
import Header from "../components/Header/Header";
import LevelOverview from "../components/LevelOverview/LevelOverview";
import DetailedProgress from "../components/ProgressOverview/DetailedProgress";
import Carousel from "../components/CoursesCarousel/Carousel";
import { RootState } from "../store/store";
import { fetchHomeData } from "../store/actions/homeActions";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";


const Home: FunctionComponent = () => {

  const { data } = useAppSelector((state: RootState) => state.home)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchHomeData());
    return () => {
    }
  }, [])

  return (
    <div className={styles.home}>
      <Sidebar />
      <Header />
      <div className={styles.dashboard}>
        <div className={styles.generalProgress}>
          <LevelOverview
            username={data.username}
            lvl={data.currentLevel || 0}
            currentProgress={data.currentProgress || 0}
            currentCourse={data.currentCourseIcon} />
          <div className={styles.coursesProgress}>
            <Carousel
              coursesList={data.allCourses}
              currentCourse={data.currentLevel || 1}
              currentProgress={data.currentProgress || 0}
              />
            <div className={styles.detailedProgressContainer}>
              {data.detailedProgressInfo.map((item) => {
                return (
                  <DetailedProgress
                    itemLogo={item.itemLogo}
                    completedItems={item.completedItems}
                    allItems={item.allItems}
                    title={item.title}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className={styles.newAdditionsWrapper}>
          {data.additionalResources.map((item) => {
            return (
              <NewAdditions
                coursesCount={item.coursesCount}
                userCount={item.userCount}
                photoCount={item.photoCount}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;


