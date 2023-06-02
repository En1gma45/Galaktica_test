import { HomeService } from "../../api/homeService";
import { homeSlice } from "../slices/homeSlice";
import { AppDispatch } from "../store";
import { HomeDataType } from "../types/homeSliceTypes";

export const fetchHomeData = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(homeSlice.actions.homeDataFetching());
        const response = await HomeService.fetchHomeData();
        dispatch(homeSlice.actions.homeDataFetchingSuccess( await response.json()));
    } catch (error) {
        dispatch(homeSlice.actions.homeDataFetchingError((error as Error).message))
    }

}