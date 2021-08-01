import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { Button } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons'

interface MainScreenProps{
    navigation: any
}

export const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {

    const handleAddTodo = () => {
        navigation.navigate('Add')
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => handleAddTodo()}>
                    <Ionicons name='grid-outline' size={30} style={styles.cubes} />
                </TouchableOpacity>
            )
        })
    })

    return(
        <View style={styles.container}>
            <Text>MainScreen</Text>
            <Button mode='contained' onPress={() => handleAddTodo()} >
                Нажми
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    cubes: {
        marginRight: 15
    }
})