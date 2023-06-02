import { createSlice } from '@reduxjs/toolkit'
import type { Action, PayloadAction } from '@reduxjs/toolkit'
import { fetchHomeData } from '../actions/homeActions';
import { HomeDataType } from '../types/homeSliceTypes';

interface InitialStateType {
    data: HomeDataType;
    isLoading: boolean;
    error: null | string;
}

const initialState: InitialStateType = {
    data: {
        username: "",
        currentLevel: null,
        currentProgress: null,
        currentCourseIcon: "",
        allCourses: [],
        detailedProgressInfo: [],
        additionalResources: []
    },
    isLoading: false,
    error: null,
}

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        homeDataFetching: (state: InitialStateType) => {
            state.isLoading = true;
        },
        homeDataFetchingSuccess: (state: InitialStateType, action: PayloadAction<HomeDataType>) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        homeDataFetchingError: (state: InitialStateType, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default homeSlice.reducer