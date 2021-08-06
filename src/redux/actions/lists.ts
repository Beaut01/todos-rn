import { ListsAction, ListsActionTypes, LoadingPayload, SetListsPayload} from "../types";
import {Dispatch} from "redux";
import {service} from "../../service";

export const setLoading = (payload: LoadingPayload) => ({
    type: ListsActionTypes.SET_LOADING,
    payload: payload
})

export const setLists = (items: SetListsPayload) => ({
    type: ListsActionTypes.SET_LISTS,
    payload: items
})

export const fetchLists = () => async (dispatch: Dispatch<ListsAction>) => {
    await service.fetch().then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}

export const postList = (value: string) => async (dispatch: Dispatch<ListsAction>) => {
    await service.postList(value)
    await service.fetch().then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}

export const deleteList = (id: number) => async (dispatch: Dispatch<ListsAction>) => {
    await service.deleteList(id)
    dispatch({
        type: ListsActionTypes.DELETE_LIST,
        payload: id
    })
}

export const postTodo = (id: string, text: string) => async (dispatch: Dispatch<ListsAction>) => {
    await service.postTodo(id, text)
    await service.fetch().then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}

export const deleteTodo = (listId: string, todoId: string) => async (dispatch: Dispatch<ListsAction>) => {
    await service.deleteTodo(listId, todoId)
    await service.fetch().then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}

export const patchTodo = (listId: string, todoId: string, text: string) => async (dispatch: Dispatch<ListsAction>) => {
    await service.patchTodo(listId, todoId, text)
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
    await service.completeTodo(listId, todoId, text, checked)
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
    await service.patchList(listId, title)
    dispatch({
        type: ListsActionTypes.PATCH_LIST,
        payload:{
            id: listId,
            title: title
        }
    })
}

export const patchWitchCategory = (listId: string, todoId: string, text: string, initialListId: string) => async (dispatch: Dispatch<ListsAction>) => {
    await service.deleteTodo(initialListId, todoId)
    await service.postTodo(listId, text)
    await service.fetch().then(({data}) => {
        dispatch({
            type: ListsActionTypes.SET_LISTS,
            payload: data
        })
    })
}
