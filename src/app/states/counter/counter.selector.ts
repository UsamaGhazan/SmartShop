import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectCounterState=(state:AppState)=>state.counter

export const selectCount=createSelector(
    // specify the selector
    selectCounterState,
    // get the value from selector
    (state)=>state.count
)