import React from 'react'
import {TextInput, View, StyleSheet, Pressable, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";

interface ModalInputProps{
    onDismiss: any,
    onAddList: any
}

export const ModalInput: React.FC<ModalInputProps> = ({ onDismiss, onAddList }) => {
    const [value, onChangeValue] = React.useState('')
    const [isValid, setIsValid] = React.useState(true)

    const handleAddList = (value: string) => {
        onAddList(value)
        onDismiss()
        onChangeValue('')
    }

    const handleValidInput = (val: string) => {
        if (val === '') {
            setIsValid(false)
        }else{
            setIsValid(true)
            handleAddList(val)
        }
    }

    const ChangeText = (text: string) => {
        setIsValid(true)
        onChangeValue(text)
    }

    return(
        <View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Новая категория'
                    value={value}
                    onChangeText={text => ChangeText(text)}
                />
                <Pressable onPress={() => handleValidInput(value)}>
                    <Ionicons name='add' size={30} />
                </Pressable>
            </View>
            { isValid  ? null :
                <View>
                    <Text style={styles.error}>Поле не может быть пустым</Text>
                </View>
            }
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
    },
    error: {
        color: 'red',
        fontSize: 17
    }
})