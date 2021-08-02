import React from 'react'
import {useTypedSelector} from "../hooks/typedSelector";
import {useDispatch} from "react-redux";
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {CategoryAdd} from "../components/CategoryAdd";
import {Ionicons} from "@expo/vector-icons";
import {patchTodo} from "../redux/actions/lists";

interface RefactorTodoScreenProps{
    navigation: any,
    route: any
}

export const RefactorTodoScreen: React.FC<RefactorTodoScreenProps> = ({route, navigation}) => {
    const dispatch = useDispatch()
    const listId = route.params?.listId
    const todoId = route.params?.todoId
    const text = route.params?.text

    const [checked, setChecked] = React.useState(listId)
    const [value, setValue] = React.useState(text)

    const { lists } = useTypedSelector(store => store.lists)

    const handleRefactorTodo = (listId: string, todoId: string, text: string) => {
        dispatch(patchTodo(listId, todoId, text))
        navigation.navigate('Main')
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity activeOpacity={0.5} onPress={() => handleRefactorTodo(listId.toString(), todoId.toString(), value)}>
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
                <FlatList data={lists} renderItem={({item}) => <CategoryAdd list={item} checked={checked} setChecked={setChecked} /> } keyExtractor={item => item.id.toString()} />
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
        paddingVertical: 5
    },
    wrapper:{
        flex: 1,
        backgroundColor: '#fff'
    }
})