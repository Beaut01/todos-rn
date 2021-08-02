export interface ListsState{
    lists: any[],
    loading: boolean
}

export enum ListsActionTypes{
    SET_LISTS = 'SET_LISTS',
    SET_LOADING = 'SET_LOADING'
}

export interface SetLists{
    type: ListsActionTypes.SET_LISTS,
    payload: any[]
}

export interface SetLoading{
    type: ListsActionTypes.SET_LOADING,
    payload: boolean
}

export type ListsAction = SetLists | SetLoading

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

export interface PostTodoProps{
    id: string,
    text: string
}

export interface DeleteTodoProps{
    listId: string,
    todoId: string
}