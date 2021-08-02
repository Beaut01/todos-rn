import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {Ionicons} from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

interface AddScreenProps{
    navigation: any
}

export const AddScreen: React.FC<AddScreenProps> = ({navigation}) => {
    const [value, setValue] = React.useState('')
    const [checked, setChecked] = React.useState('first')

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity activeOpacity={0.5}>
                    <Ionicons name='checkmark-outline' size={30} style={styles.checkmark} />
                </TouchableOpacity>
            )
        })
    })

    return(
        <View style={styles.wrapper}>
            <TextInput
                value={value}
                onChangeText={text => setValue(text)}
                placeholder='Название задачи'
                style={styles.input}
            />
            <View style={styles.container}>
                <Text style={styles.title}>Категория</Text>
                <View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    checkmark:{
        color: 'blue',
        marginRight: 25
    },
    input: {
        width: '100%',
        padding: 20,
        fontSize: 25,
    },
    title: {
        color: 'gray',
        fontSize: 20,
        padding: 5
    },
    radio: {
        color: 'blue',
        paddingVertical: 10
    },
    wrapper:{
        flex: 1,
        backgroundColor: '#fff'
    }
})