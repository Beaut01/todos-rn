import React from 'react'
import {View, Text, CheckBox, StyleSheet} from "react-native";

interface TodoProps{
    id: number,
    text: string,
    checked: boolean,
}

export const Todo: React.FC<TodoProps> = ({id, text, checked}) => {
    const [isSelected, setIsSelected] = React.useState(false)

    return(
        <View style={styles.container}>
            <CheckBox
                value={checked}
                onValueChange={setIsSelected}
            />
            <Text style={styles.text}>{text}</Text>
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
    text: {
        marginLeft: '5%',
        fontSize: 20
    }
})