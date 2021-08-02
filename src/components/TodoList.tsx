import React from 'react'
import {View, StyleSheet, Text, CheckBox, FlatList} from "react-native";
import { List } from 'react-native-paper'
import { Todo } from "./Todo";

interface TodosProps{
    id: number,
    text: string,
    checked: boolean
}

interface List{
    title: string,
    id: number,
    todos: TodosProps[]
}

interface ListProps{
    list: List,
    onDelete: any
}

export const TodoList: React.FC<ListProps> = ({ list, onDelete }) => {

    const [expanded, setExpanded] = React.useState(false)

    const checked = list.todos.filter(t => t.checked === true )
    const unchecked = list.todos.filter(t => t.checked === false)

    const handlePress = () => setExpanded(!expanded)

    return(
        <View style={styles.wrapp}>
            <Text style={styles.title} onPress={() => onDelete(list.id.toString())}>{list.title}</Text>
            <FlatList data={unchecked} renderItem={({item}) => <Todo {...item}  /> } />
            <List.Accordion title='Завершённые'>
                <FlatList data={checked} renderItem={({item}) => <List.Item title={item.text} left={props => <List.Icon icon='check'/>}/>} />
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
        marginRight: 80,
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