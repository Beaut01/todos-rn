import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import {Ionicons} from "@expo/vector-icons";

interface TodoProps{
    id: number,
    text: string,
    checked: boolean,
    listId: number,
    onDeleteTodo: any,
    toRefactor: any,
    onCompleteTodo: any
}

export const Todo: React.FC<TodoProps> = ({id, text, checked, listId, onDeleteTodo, toRefactor, onCompleteTodo}) => {

    const leftActions = () => {
      return(
          <TouchableOpacity activeOpacity={0.5} onPress={() => toRefactor(id, listId, text)} >
              <View style={styles.leftAction}>
                  <Ionicons name='pencil-outline' size={35} />
              </View>
          </TouchableOpacity>
      )
    }

    const rightActions = () => {
        return(
            <TouchableOpacity activeOpacity={0.5} onLongPress={() => onDeleteTodo(listId.toString(), id.toString())}>
                <View >
                    <Ionicons name='trash-outline' size={30} color='#B22222' />
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <Swipeable 
            renderLeftActions={leftActions}
            renderRightActions={rightActions}
        >
            <TouchableOpacity activeOpacity={0.6} onPress={() => onCompleteTodo(listId.toString(), id.toString(), text)} >
                <View style={styles.container}>
                    <RadioButton
                        value='12'
                    />
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableOpacity>
        </Swipeable>

    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10
    },
    text: {
        marginLeft: '5%',
        fontSize: 20
    },
    leftAction: {
        flex: 1,
        alignItems: 'center'
    }
})