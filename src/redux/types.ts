export interface List{
    title: string,
    id: number,
    todos: todo[]
}

export interface ListsState{
    lists: List[],
    loading: boolean,
    test: any
}

export enum ListsActionTypes{
    SET_LISTS = 'SET_LISTS',
    SET_LOADING = 'SET_LOADING',
    DELETE_LIST = 'DELETE_LIST',
    PATCH_LIST = 'PATCH_LIST',
    DELETE_TODO = 'DELETE_TODO',
    PATCH_TODO = 'PATCH_TODO',
    COMPLETE_TODO = 'COMPLETE_TODO',
    POST_LIST = 'POST_LIST',
    POST_TODO = 'POST_TODO',
    PATCH_CAT_TODO = 'PATCH_CAT_TODO'
}

export interface deleteList{
    type: ListsActionTypes.DELETE_LIST,
    payload: number
}

export interface patchTodoCat{
    type: ListsActionTypes.PATCH_CAT_TODO,
    payload: {
        checked: boolean,
        created_at: string,
        id: number,
        list_id: number,
        text: string,
        updated_at: string
    }
}

export interface postTodo{
    type: ListsActionTypes.POST_TODO,
    payload: any
}

export interface postList{
    type: ListsActionTypes.POST_LIST,
    payload: List
}

export interface patchTodo{
    type: ListsActionTypes.PATCH_TODO,
    payload: {
        list_id: number,
        id: number,
        text: string,
        checked: boolean,
        created_at: string,
        updated_at: string
    }
}

export interface patchList{
    type: ListsActionTypes.PATCH_LIST,
    payload: {
        title: string,
        id: number,
        todos: todo[],
        updated_at: string,
        candidate_id: number,
        created_at: string
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
        list_id: number,
        id: number,
        text: string,
        checked: boolean,
        created_at: string,
        updated_at: string
    }
}

export type ListsAction = setLists | setLoading | deleteList | patchList | deleteTodo | patchTodo | completeTodo | postList | postTodo | patchTodoCat

export interface LoadingPayload{
    payload: boolean
}

export interface SetListsPayload{
    items: todo[]
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

export interface todo{
    checked: boolean,
    created_at: string,
    id: number,
    list_id: number,
    text: string,
    updated_at: string
}
