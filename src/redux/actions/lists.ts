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
    dispatch({
        type: ListsActionTypes.DELETE_LIST,
        payload: id
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

export const deleteTodo = (listId: string, todoId: string) => async (dispatch: Dispatch<ListsAction>) => {
    await axios.delete(`http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list/${listId}/todo/${todoId}`)
    await axios.get('http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list').then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}

export const patchTodo = (listId: string, todoId: string, text: string) => async (dispatch: Dispatch<ListsAction>) => {
    await axios.patch(`http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list/${listId}/todo/${todoId}`, {text: text, checked: false})
    dispatch({
        type: ListsActionTypes.PATCH_TODO,
        payload: {
            listId: listId,
            todoId: todoId,
            text: text
        }
    })
}

export const completeTodo = (listId: string, todoId: string, text: string, checked: boolean) => async (dispatch: Dispatch<ListsAction>) => {
    await axios.patch(`http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list/${listId}/todo/${todoId}`, {text: text, checked: checked})
    dispatch({
        type: ListsActionTypes.COMPLETE_TODO,
        payload: {
            listId: listId,
            todoId: todoId,
            checked: checked
        }
    })
}

export const patchList = (listId: string, title: string) => async (dispatch: Dispatch<ListsAction>) => {
    await axios.patch(`http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list/${listId}`, {title: title})
    dispatch({
        type: ListsActionTypes.PATCH_LIST,
        payload:{
            id: listId,
            title: title
        }
    })
}

export const patchWitchCategory = (listId: string, todoId: string, text: string, initialListId: string) => async (dispatch: Dispatch<ListsAction>) => {
    await axios.delete(`http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list/${initialListId}/todo/${todoId}`)
    await axios.post(`http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list/${listId}/todo`, {"text": text, checked: false})
    await axios.get('http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list').then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}
