export interface CourseType {
    id: number;
    courseIcon: string;
    courseProgress: number;
}

export interface DetailedProgressInfoType {
    itemLogo: string;
    completedItems: number;
    allItems: number;
    title: string;
}
export interface NewAdditionsTypes {
    coursesCount: number;
    userCount: number;
    photoCount: number;
  }

export interface HomeDataType {
    username: string;
    currentLevel: number | null;
    currentProgress: number | null;
    currentCourseIcon: string;
    allCourses: Array<CourseType>;
    detailedProgressInfo: Array<DetailedProgressInfoType>;
    additionalResources: Array<NewAdditionsTypes>;
}