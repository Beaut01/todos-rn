import React from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList, Alert} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TodoList } from '../components/TodoList'
import {ModalList} from "../components/ModalList";
import {useTypedSelector} from "../hooks/typedSelector";
import {useDispatch} from "react-redux";
import {fetchLists, postList, deleteList, deleteTodo, completeTodo} from "../redux/actions/lists";
import {Fab} from "../components/Fab";
import {MainProps} from "../navigation/AppNavigator";

export const Main: React.FC<MainProps> = ({navigation}) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = React.useState(false)

    const { lists } = useTypedSelector(store => store.lists)
    const { test } = useTypedSelector(store => store.lists)

    React.useEffect(() => {
        dispatch(fetchLists())
    }, [dispatch])

    console.log(test)

    const addList = (value: string) => {
        dispatch(postList(value))
    }

    const handleDeleteTodo = (listId: string, todoId: string) => {
        dispatch(deleteTodo(listId, todoId))
    }

    const handleDeleteList = (id: number) => {
        Alert.alert(
            "Удаление категории.",
            "Точно хотите удалить эту категорию?",
            [
                {
                    text: "Закрыть",
                    style: "cancel"
                },
                { text: "Удалить",
                    style: 'destructive',
                    onPress() {
                        dispatch(deleteList(id))
                    }
                }
            ],
            { cancelable: true }
        )
    }

    const toAddScreen = () => {
        navigation.navigate('Add')
    }

    const toRefactor = (todoId: string, listId: string, text: string) => {
        navigation.navigate('Add', {
            todoId: todoId,
            listId: listId,
            text: text
        })
    }

    const toRefactorList = (listId: string, title: string) => {
        navigation.navigate('RefactorList', {
            listId: listId,
            title: title
        })
    }

    const handleCompleteTodo = (listId: string, todoId: string, text: string, checked: boolean) => {
        dispatch(completeTodo(listId, todoId, text, checked))
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
            <FlatList
                data={lists}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <TodoList
                    list={item}
                    onDeleteTodo={handleDeleteTodo}
                    toRefactorList={toRefactorList}
                    toRefactor={toRefactor}
                    onCompleteTodo={handleCompleteTodo}
                />}
            />
            <ModalList
                visible={visible}
                onDismiss={() => setVisible(false)}
                onDeleteList={handleDeleteList}
                onAddList={addList} lists={lists}
            />
            <Fab toAddScreen={toAddScreen} />
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