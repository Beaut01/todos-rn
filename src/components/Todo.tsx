import React from 'react'
import {View, Text, CheckBox, StyleSheet, TouchableOpacity} from "react-native";

interface TodoProps{
    id: number,
    text: string,
    checked: boolean,
    listId: number,
    onDeleteTodo: any
}

export const Todo: React.FC<TodoProps> = ({id, text, checked, listId, onDeleteTodo}) => {
    const [isSelected, setIsSelected] = React.useState(false)

    return(
        <TouchableOpacity activeOpacity={0.5} onLongPress={() => onDeleteTodo(listId.toString(), id.toString())}>
            <View style={styles.container}>
                <CheckBox
                    value={checked}
                    onValueChange={setIsSelected}
                />
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
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
    }
})