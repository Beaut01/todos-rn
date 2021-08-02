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