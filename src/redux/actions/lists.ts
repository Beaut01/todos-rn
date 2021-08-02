import axios from "axios";
import {DeleteListProps, ListsAction, ListsActionTypes, LoadingPayload, PostListProps, SetListsPayload} from "../types";
import {Dispatch} from "redux";

export const setLoading = (payload: LoadingPayload) => ({
    type: ListsActionTypes.SET_LOADING,
    payload: payload
})

export const setLists = (items: SetListsPayload) => ({
    type: ListsActionTypes.SET_LISTS,
    payload: items
})

export const fetchLists = () => (dispatch: Dispatch<ListsAction>) => {
    axios.get('http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list').then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}

export const postList = (value: PostListProps) => (dispatch: Dispatch<ListsAction>) => {
    axios.post('http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list', {title: value}).then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}

export const deleteList = (id: DeleteListProps) => (dispatch: Dispatch<ListsAction>) => {
    axios.delete(`http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list/${id}`).then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}