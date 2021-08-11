import axios from 'axios'
// @ts-ignore
import {API_URL} from '@env'
import {List} from './redux/types'

axios.defaults.baseURL = API_URL


export const service = {
    fetch: () =>
        axios.get('/list'),
    postList: (value: string) =>
        axios.post('/list', {title: value}),
    deleteList: (id: number) =>
        axios.delete(`/list/${id}`),
    postTodo: (id: string, text: string) =>
        axios.post(`/list/${id}/todo`, {text: text, checked: false}),
    deleteTodo: (listId: string, todoId: string) =>
        axios.delete(`/list/${listId}/todo/${todoId}`),
    patchTodo: (listId: string, todoId: string, text: string) =>
        axios.patch(
        `/list/${listId}/todo/${todoId}`,
        {text: text, checked: false}),
    completeTodo: (listId: string, todoId: string, text: string, checked: boolean) =>
        axios.patch(
            `/list/${listId}/todo/${todoId}`,
            {text: text, checked: checked}),
    patchList: (listId: string, title: string) =>
        axios.patch(
            `/list/${listId}`,
            {title: title})
}