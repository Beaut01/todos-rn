import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Todo } from '../components/Todo'
import {ModalList} from "../components/ModalList";

interface MainScreenProps{
    navigation: any
}

export const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
    const [visible, setVisible] = React.useState(false)

    const handleAddTodo = () => {
        navigation.navigate('Add')
    }

    const openModal = () => {
        setVisible(!visible)
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => openModal()}>
                    <Ionicons name='grid-outline' size={30} style={styles.cubes} />
                </TouchableOpacity>
            )
        })
    })

    return(
        <View style={styles.container}>
            <Todo />
            <ModalList visible={visible} onDismiss={() => setVisible(false)} />
        </View>

    )
}

const styles = StyleSheet.create({
    cubes: {
        marginRight: 15
    },
    container:{
        flex: 1,
        backgroundColor: '#fff'
    }
})