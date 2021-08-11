import React from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, TouchableNativeFeedback} from "react-native";
import { List } from 'react-native-paper'
import { Todo } from "./Todo";
import {Ionicons} from "@expo/vector-icons";
import {todo} from '../redux/types'
import {ListProps} from "../types";

export const TodoList: React.FC<ListProps> = ({ list, onDeleteTodo, toRefactor, onCompleteTodo, toRefactorList }) => {
    const [visible, setVisible] = React.useState(false)

    const checked = list?.todos.filter(t => t.checked )
    const unchecked = list?.todos.filter(t => !t.checked)

    const iconName = visible ? 'chevron-up-outline' : 'chevron-down-outline'

    return(
        <View style={styles.wrapp}>
            <TouchableOpacity activeOpacity={0.6} onLongPress={() => toRefactorList(list.id.toString(), list.title)}>
                <Text style={styles.title} >{list.title}</Text>
            </TouchableOpacity>
            <FlatList
                data={unchecked}
                renderItem={({item}) => <Todo
                    {...item}
                    listId={list.id}
                    onDeleteTodo={onDeleteTodo}
                    toRefactor={toRefactor}
                    onCompleteTodo={onCompleteTodo} /> }
                keyExtractor={item => item.id.toString()}
            />
            <TouchableNativeFeedback onPress={() => setVisible(!visible)}>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name={iconName} size={25} />
                        <Text style={styles.complete}>Завершенные</Text>
                    </View>
                    <View>
                        { visible && <FlatList
                            data={checked}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item}) => <Todo
                                {...item}
                                listId={list.id}
                                onDeleteTodo={onDeleteTodo}
                                toRefactor={toRefactor}
                                onCompleteTodo={onCompleteTodo}
                            />}
                        />}
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingVertical: 10,
        marginLeft: 5
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
    },
    complete: {
        fontSize: 20,
        color: '#000',
        marginLeft: '5%'
    }
})