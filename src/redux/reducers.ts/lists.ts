import {ListsAction, ListsActionTypes, ListsState, todo} from "../types";

const initialState: ListsState = {
    lists: [],
    loading: true,
    test: []
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
                    if( list.id.toString() === action.payload.id ){
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
                    if(list.id.toString() == action.payload.listId){
                        list.todos.map((todo: todo) => {
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
        // case ListsActionTypes.COMPLETE_TODO:{
        //     return {
        //         ...state,
        //         lists: state.lists.map(list => {
        //             if(list.id.toString() == action.payload.listId){
        //                 list.todos.map((todo: todo) => {
        //                     if(todo.id.toString() ===action.payload.todoId){
        //                         todo.checked = action.payload.checked
        //                     }
        //                     return todo
        //                 })
        //             }
        //             return list
        //         })
        //     }
        // }
        // case ListsActionTypes.DELETE_TODO:{
        //     const list = state.lists.find(list => list.id.toString() === action.payload.listId)
        //     // @ts-ignore
        //     const todos = list.todos;
        //     const newTodos = todos.filter(todo => todo.id.toString() !== action.payload.todoId)
        //     const newLists = state.lists.map(list => list.id.toString() === action.payload.listId ? {...list, todos: newTodos} : list)
        //     return {
        //         ...state,
        //         lists: newLists
        //     }
        // }
        case ListsActionTypes.POST_LIST: {
            return {
                ...state,
                lists: [...state.lists, {...action.payload, todos: []}]
            }
        }
        case ListsActionTypes.POST_TODO:{
            const list = state.lists.find(list => list.id === action.payload.list_id)
            const todos = list?.todos

            // @ts-ignore
            const newTodos = [...todos, action.payload]
            const newLists = state.lists.map(list => list.id === action.payload.list_id ? {...list, todos: newTodos} : list)

            return {
                ...state,
                lists: newLists
            }
        }
        default:
            return state
    }
}