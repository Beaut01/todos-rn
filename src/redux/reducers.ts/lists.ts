import {ListsAction, ListsState} from "../types";

const initialState: ListsState = {
    lists: [],
    loading: true
}

export const listsReducer = ( state = initialState, action: ListsAction): ListsState => {
    switch (action.type){
        default:
            return state
    }
}