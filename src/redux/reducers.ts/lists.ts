import {ListsAction, ListsState, ListsActionTypes} from "../types";

const initialState: ListsState = {
    lists: [],
    loading: true
}

export const listsReducer = ( state = initialState, action: ListsAction): ListsState => {
    switch (action.type){
        case ListsActionTypes.SET_LISTS:{
            return {
                ...state,
                lists: action.payload,
                loading: false
            }
        }

        default:
            return state
    }
}