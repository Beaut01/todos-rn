export interface ListsState{
    lists: any[],
    loading: boolean,
}

export enum ListsActionTypes{
    SET_LISTS = 'SET_LISTS',
    SET_LOADING = 'SET_LOADING',
    DELETE_LIST = 'DELETE_LIST',
    PATCH_LIST = 'PATCH_LIST',
    DELETE_TODO = 'DELETE_TODO',
    PATCH_TODO = 'PATCH_TODO',
    COMPLETE_TODO = 'COMPLETE_TODO'
}

export interface deleteList{
    type: ListsActionTypes.DELETE_LIST,
    payload: number
}

export interface patchTodo{
    type: ListsActionTypes.PATCH_TODO,
    payload: {
        listId: string,
        todoId: string,
        text: string
    }
}

export interface patchList{
    type: ListsActionTypes.PATCH_LIST,
    payload: {
        id: string,
        title: string
    }
}

export interface setLists{
    type: ListsActionTypes.SET_LISTS,
    payload: any[]
}

export interface deleteTodo{
    type: ListsActionTypes.DELETE_TODO,
    payload:{
        listId: string,
        todoId: string,
    }
}

export interface setLoading{
    type: ListsActionTypes.SET_LOADING,
    payload: boolean
}

export interface completeTodo{
    type: ListsActionTypes.COMPLETE_TODO,
    payload: {
        listId: string,
        todoId: string,
        checked: boolean
    }
}

export type ListsAction = setLists | setLoading | deleteList | patchList | deleteTodo | patchTodo | completeTodo

export interface LoadingPayload{
    payload: boolean
}

export interface SetListsPayload{
    items: any[]
}

export interface PostListProps{
    title: string
}

export interface DeleteListProps{
    id: number
}

export interface DeleteTodoProps{
    listId: string,
    todoId: string
}

export interface Todo{
    checked: boolean,
    created_at: string,
    id: number,
    list_id: number,
    text: string,
    updated_at: string
}
