import {todo} from "./redux/types";

export interface List{
    title: string,
    id: number,
    todos: todo[]
}

export interface ListProps{
    list: List,
    onDeleteTodo: (listId: string, todoId: string) => void,
    toRefactor: (todoId: string, listId: string, text: string) => void,
    onCompleteTodo: (listId: string, todoId: string, text: string, checked: boolean) => void,
    toRefactorList: (listId: string, title: string) => void,
}

export interface TodoProps{
    id: number,
    text: string,
    checked: boolean,
    listId: number,
    onDeleteTodo: (listId: string, todoId: string) => void,
    toRefactor: (todoId: string, listId: string, text: string) => void,
    onCompleteTodo: (listId: string, todoId: string, text: string, checked: boolean) => void
}

export interface FabProps{
    toAddScreen: () => void
}

export interface ModalListProps{
    visible: boolean,
    onDismiss: () => void,
    onAddList: (value: string) => void,
    lists: List[],
    onDeleteList: (id: number) => void
}

export interface ModalListItemProps{
    list: List,
    onDeleteList: (id: number) => void
}

export interface ModalInputProps{
    onDismiss: () => void,
    onAddList: (value: string) => void
}

export interface categoryAddProps{
    checked: string,
    setChecked: (id: string) => void,
    list: List
}