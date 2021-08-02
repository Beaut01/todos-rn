import React from 'react'
import { TextInput, View, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons";

interface ModalInputProps{
    onDismiss: any,
    onAddList: any
}

export const ModalInput: React.FC<ModalInputProps> = ({ onDismiss, onAddList }) => {
    const [value, onChangeValue] = React.useState('')

    const handleAddList = (value: string) => {
        onAddList(value)
        onDismiss()
        onChangeValue('')
    }

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Новая категория'
                value={value}
                onChangeText={text => onChangeValue(text)}
            />
            <Ionicons name='add' size={30} onPress={() => handleAddList(value)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },
    input: {
        fontSize: 20,
        width: '90%',
        backgroundColor: '#fff'
    }
})