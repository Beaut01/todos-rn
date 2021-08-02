import React from 'react'
import { TextInput, View, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons";

interface ModalInputProps{
    onDismiss: any
}

export const ModalInput: React.FC<ModalInputProps> = ({ onDismiss }) => {
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Новая категория'
            />
            <Ionicons name='add' size={30} onPress={onDismiss}/>
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