import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Animated} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import {Ionicons} from "@expo/vector-icons";
import {TodoProps} from "../types";


export const Todo: React.FC<TodoProps> = ({id, text, checked, listId, onDeleteTodo, toRefactor, onCompleteTodo}) => {
    const [checkedValue, setCheckedValue] = React.useState(checked)

    const leftActions = (progress: any, dragX: any) => {
        const scale = dragX.interpolate({
            inputRange: [1, 40],
            outputRange: [0, 1.1],
            extrapolate: 'clamp'
        })

      return(
          <TouchableOpacity activeOpacity={0.5} onPress={() => toRefactor(id.toString(), listId.toString(), text)} >
              <Animated.View style={[styles.leftAction, {transform: [{scale}]}]}>
                  <Ionicons name='pencil-outline' size={35} style={{marginTop: 8}} />
              </Animated.View>
          </TouchableOpacity>
      )
    }

    const rightActions = (progress: any, dragX: any) => {
        const scale = dragX.interpolate({
            inputRange: [-40, 0],
            outputRange: [1.3, 0],
            extrapolate: 'clamp'
        })

        return(
            <TouchableOpacity activeOpacity={0.5} onPress={() => onDeleteTodo(listId.toString(), id.toString())}>
                <Animated.View style={[styles.leftAction, {transform: [{scale}]}]}>
                    <Ionicons name='trash-outline' size={30} color='#B22222' style={{marginTop: 8}} />
                </Animated.View>
            </TouchableOpacity>
        )
    }

    const handleComplete = (listId: string, id: string, text: string, checked: boolean) => {
        if(checked){
            onCompleteTodo(listId, id, text, !checkedValue)
            setCheckedValue(false)
        }else{
            onCompleteTodo(listId, id, text, !checkedValue)
            setCheckedValue(true)
        }
    }

    if(!checked){
        return(
            <Swipeable
                renderLeftActions={leftActions}
                renderRightActions={rightActions}
            >
                <TouchableOpacity activeOpacity={0.6} onPress={() => handleComplete(listId.toString(), id.toString(), text, checkedValue)} >
                    <View style={styles.container}>
                        <RadioButton
                            value='12'
                            onPress={() => handleComplete(listId.toString(), id.toString(), text, checkedValue)}
                        />
                        <Text style={styles.text}>{text}</Text>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        )
    }else{
        return(
            <Swipeable
                renderRightActions={rightActions}
            >
                <TouchableOpacity activeOpacity={0.6} onPress={() => handleComplete(listId.toString(), id.toString(), text, checkedValue)}>
                    <View style={styles.containerChecked}>
                        <Ionicons name='checkmark' size={30} color='#1E90FF' />
                        <Text style={styles.textChecked}>{text}</Text>
                    </View>
                </TouchableOpacity>
            </Swipeable>

        )
    }

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
        justifyContent: 'center',
    },
    containerChecked: {
        flexDirection: 'row',
        marginTop: 15
    },
    textChecked: {
        color: '#000',
        fontSize: 20,
        marginLeft: '5%',
        textDecorationLine: 'line-through'
    }
})