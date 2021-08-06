import axios from 'axios'

axios.defaults.baseURL = 'http://mobile-dev.oblakogroup.ru/candidate/EgorKorovin/list'

export const service = {
    fetch: () =>
        axios.get('/'),
    postList: (value: string) =>
        axios.post('/', {title: value}),
    deleteList: (id: number) =>
        axios.delete(`/${id}`),
    postTodo: (id: string, text: string) =>
        axios.post(`/${id}/todo`, {text: text, checked: false}),
    deleteTodo: (listId: string, todoId: string) =>
        axios.delete(`/${listId}/todo/${todoId}`),
    patchTodo: (listId: string, todoId: string, text: string) =>
        axios.patch(
        `/${listId}/todo/${todoId}`,
        {text: text, checked: false}),
    completeTodo: (listId: string, todoId: string, text: string, checked: boolean) =>
        axios.patch(
            `/${listId}/todo/${todoId}`,
            {text: text, checked: checked}),
    patchList: (listId: string, title: string) =>
        axios.patch(
            `/${listId}`,
            {title: title})
}