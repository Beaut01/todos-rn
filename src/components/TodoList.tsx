import React from 'react'
import {View, StyleSheet, Text, CheckBox, FlatList, TouchableOpacity} from "react-native";
import { List } from 'react-native-paper'
import { Todo } from "./Todo";


interface TodosProps{
    id: number,
    text: string,
    checked: boolean,
    created_at: string
}

interface List{
    title: string,
    id: number,
    todos: TodosProps[]
}

interface ListProps{
    list: List,
    onDeleteTodo: any,
    toRefactor: any,
    onCompleteTodo: any,
    toRefactorList: any
}

export const TodoList: React.FC<ListProps> = ({ list, onDeleteTodo, toRefactor, onCompleteTodo, toRefactorList }) => {
    const [expanded, setExpanded] = React.useState(false)

    const checked = list.todos.filter(t => t.checked === true )
    const unchecked = list.todos.filter(t => t.checked === false)

    const handlePress = () => setExpanded(!expanded)

    return(
        <View style={styles.wrapp}>
            <TouchableOpacity activeOpacity={0.6} onLongPress={() => toRefactorList(list.id.toString(), list.title)}>
                <Text style={styles.title} >{list.title}</Text>
            </TouchableOpacity>
            <FlatList
                data={unchecked}
                renderItem={({item}) => <Todo {...item} listId={list.id} onDeleteTodo={onDeleteTodo} toRefactor={toRefactor} onCompleteTodo={onCompleteTodo} /> }
                keyExtractor={item => item.id.toString()}
            />
            <List.Accordion title='Завершённые'>
                <FlatList
                    data={checked}
                    keyExtractor={item => item.created_at}
                    renderItem={({item}) => <List.Item title={item.text} left={props => <List.Icon icon='check'/>}/>} />
            </List.Accordion>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10
    },
    wrapp: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        color: 'gray'
    },
    text: {
        marginLeft: '5%',
        fontSize: 20
    }
})