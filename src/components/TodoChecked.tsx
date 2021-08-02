import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Swipeable} from "react-native-gesture-handler";

interface TodoCheckedProps{
    id: number,
    text: string,
    listId: number,
    onDeleteTodo: any,
    unCompleteTodo: any
}

export const TodoChecked: React.FC<TodoCheckedProps> = ({id, text, listId, onDeleteTodo, unCompleteTodo}) => {

    const rightActions = () => {
        return(
            <TouchableOpacity activeOpacity={0.5} onLongPress={() => onDeleteTodo(listId.toString(), id.toString())}>
                <View >
                    <Ionicons name='trash-outline' size={30} color='#B22222' style={{marginTop: 8}} />
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <Swipeable
            renderRightActions={rightActions}
        >
            <TouchableOpacity activeOpacity={0.6} onPress={() => unCompleteTodo(listId.toString(), id.toString(), text)}>
                <View style={styles.container}>
                    <Ionicons name='checkmark' size={30} color='#1E90FF' />
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableOpacity>
        </Swipeable>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15
    },
    text: {
        color: '#000',
        fontSize: 20,
        marginLeft: '5%',
        textDecorationLine: 'line-through'
    }
})