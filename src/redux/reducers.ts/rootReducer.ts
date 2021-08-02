import {combineReducers} from "redux";
import { listsReducer } from "./lists";

export const rootReducer = combineReducers({
    lists: listsReducer
})

export type RootState = ReturnType<typeof rootReducer>