import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TodoList } from '../components/TodoList'
import {ModalList} from "../components/ModalList";
import {useTypedSelector} from "../hooks/typedSelector";
import {useDispatch} from "react-redux";
import {fetchLists, postList, deleteList} from "../redux/actions/lists";
import {DeleteListProps, PostListProps} from "../redux/types";
import {Fab} from "../components/Fab";

interface MainScreenProps{
    navigation: any,
}

export const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = React.useState(false)

    React.useEffect(() => {
        dispatch(fetchLists())
    }, [dispatch])

    const { lists } = useTypedSelector(store => store.lists)

    console.log(lists)

    const addList = (value: PostListProps) => {
        dispatch(postList(value))
    }

    const handleDeleteList = (id: DeleteListProps) => {
        dispatch(deleteList(id))
    }

    const toAddScreen = () => {
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
            <FlatList
                data={lists}
                keyExtractor={item => item.id}
                renderItem={({item}) => <TodoList list={item} onDelete={handleDeleteList}/>}
            />
            <ModalList visible={visible} onDismiss={() => setVisible(false)} onAddList={addList} lists={lists} />
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