import axios from "axios";
import {
    DeleteListProps,
    DeleteTodoProps,
    ListsAction,
    ListsActionTypes,
    LoadingPayload,
    PostListProps,
    SetListsPayload
} from "../types";
import {Dispatch} from "redux";

export const setLoading = (payload: LoadingPayload) => ({
    type: ListsActionTypes.SET_LOADING,
    payload: payload
})

export const setLists = (items: SetListsPayload) => ({
    type: ListsActionTypes.SET_LISTS,
    payload: items
})

export const fetchLists = () => async (dispatch: Dispatch<ListsAction>) => {
    await axios.get('http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list').then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}

export const postList = (value: PostListProps) => async (dispatch: Dispatch<ListsAction>) => {
    await axios.post('http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list', {title: value})
    await axios.get('http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list').then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}

export const deleteList = (id: DeleteListProps) => async (dispatch: Dispatch<ListsAction>) => {
    await axios.delete(`http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list/${id}`)
    await axios.get('http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list').then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}

export const postTodo = (id: string, text: string) => async (dispatch: Dispatch<ListsAction>) => {
    await axios.post(`http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list/${id}/todo`, {"text": text, checked: false})
    await axios.get('http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list').then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}

export const deleteTodo = (listId: DeleteTodoProps, todoId: DeleteTodoProps) => async (dispatch: Dispatch<ListsAction>) => {
    await axios.delete(`http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list/${listId}/todo/${todoId}`)
    await axios.get('http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list').then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}