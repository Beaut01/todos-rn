import {ListsAction, ListsActionTypes, ListsState, Todo} from "../types";

const initialState: ListsState = {
    lists: [],
    loading: true,
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
        case ListsActionTypes.DELETE_LIST:{
            return {
                ...state,
                lists: state.lists.filter(list => list.id !== action.payload),
                loading: false
            }
        }
        case ListsActionTypes.PATCH_LIST:{
            return {
                ...state,
                lists: state.lists.map(list => {
                    if(list.id == action.payload.id){
                        list.title = action.payload.title
                    }
                    return list
                })
            }
        }
        case ListsActionTypes.PATCH_TODO:{
            return {
                ...state,
                lists: state.lists.map(list => {
                    if(list.id == action.payload.listId){
                        list.todos.map((todo: Todo) => {
                            if(todo.id.toString() == action.payload.todoId){
                                todo.text = action.payload.text
                            }
                            return todo
                        })
                    }
                    return list
                })
            }
        }
        case ListsActionTypes.COMPLETE_TODO:{
            return {
                ...state,
                lists: state.lists.map(list => {
                    if(list.id == action.payload.listId){
                        list.todos.map((todo: Todo) => {
                            if(todo.id.toString() ===action.payload.todoId){
                                todo.checked = action.payload.checked
                            }
                            return todo
                        })
                    }
                    return list
                })
            }
        }
        // case ListsActionTypes.DELETE_TODO:{
        //     const newLists = state.lists.map(list => {
        //         if(list.id == action.payload.listId){
        //             list.todos.filter((todo: Todo) => todo.id.toString() !== action.payload.todoId)
        //         }
        //         return list
        //     })
        //
        //     return {
        //         ...state,
        //         lists: newLists
        //     }
        // }

        default:
            return state
    }
}