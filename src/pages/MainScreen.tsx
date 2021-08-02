import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Alert} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TodoList } from '../components/TodoList'
import {ModalList} from "../components/ModalList";
import {useTypedSelector} from "../hooks/typedSelector";
import {useDispatch} from "react-redux";
import {fetchLists, postList, deleteList, deleteTodo, completeTodo, unCompleteTodo} from "../redux/actions/lists";
import {DeleteListProps, DeleteTodoProps, PostListProps} from "../redux/types";
import {Fab} from "../components/Fab";

interface MainScreenProps{
    navigation: any,
}

export const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = React.useState(false)

    const { lists } = useTypedSelector(store => store.lists)

    React.useEffect(() => {
        dispatch(fetchLists())
    }, [dispatch])

    console.log(lists)

    const addList = (value: PostListProps) => {
        dispatch(postList(value))
    }

    const handleDeleteTodo = (listId: DeleteTodoProps, todoId: DeleteTodoProps) => {
        dispatch(deleteTodo(listId, todoId))
    }

    const handleDeleteList = (id: DeleteListProps) => {
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

    const toRefactor = (todoId: number, listId: number, text: string) => {
        navigation.navigate('RefactorTodo', {
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

    const handleCompleteTodo = (listId: string, todoId: string, text: string) => {
        dispatch(completeTodo(listId, todoId, text))
    }

    const handleUnCompleteTodo = (listId: string, todoId: string, text: string) => {
        dispatch(unCompleteTodo(listId, todoId, text))
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
                    unCompleteTodo={handleUnCompleteTodo}
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