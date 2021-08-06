import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList} from 'react-native'
import {Ionicons} from "@expo/vector-icons";
import {CategoryAdd} from "../components/CategoryAdd";
import {useTypedSelector} from "../hooks/typedSelector";
import {useDispatch} from "react-redux";
import {patchTodo, postTodo} from "../redux/actions/lists";

interface AddScreenProps{
    navigation: any,
    route: any
}

export const AddScreen: React.FC<AddScreenProps> = ({navigation, route}) => {
    const listId = route.params?.listId
    const todoId = route.params?.todoId
    const text = route.params?.text
    const { lists } = useTypedSelector(store => store.lists)

    const initialText = text ? text : ''
    const initialChecked = listId ? listId.toString() : lists[0].id.toString()
    const todoID = todoId ? todoId : '12'

    const dispatch = useDispatch()
    const [value, setValue] = React.useState(initialText)
    const [checked, setChecked] = React.useState(initialChecked)
    const [validation, setValidation] = React.useState({
        isValidInput: true,
        isValidRefactor: true
    })

    const handleAddTodo = (id: string, text: string) => {
        dispatch(postTodo(id, text))
        setValue('')
        setChecked('0')
        navigation.navigate('Main')
    }

    const handleRefactorTodo = (listId: string, todoId: string, text: string) => {
        dispatch(patchTodo(listId, todoId, text))
        navigation.navigate('Main')
    }

    const changeText = (text: string) => {
        setValidation({
            ...validation,
            isValidInput: true
        })
        setValue(text)
    }

    const handleValid = (checked: string, val: string, todoId: string) => {
        if(text){
            if(val === text){
                setValidation({
                    ...validation,
                    isValidRefactor: false
                })
            }else{
                setValidation({
                    ...validation,
                    isValidRefactor: true
                })
                handleRefactorTodo(checked, todoId, val)
            }
        }else{
            if( val === ''){
                setValidation({
                    ...validation,
                    isValidInput: false
                })
            }else{
                setValidation({
                    ...validation,
                    isValidInput: true
                })
                handleAddTodo(checked, val)
            }
        }
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity activeOpacity={0.5} onPress={() => handleValid(checked, value, todoID.toString())}>
                    <Ionicons name='checkmark-outline' size={30} style={styles.checkmark} />
                </TouchableOpacity>
            )
        })
    })

    return(
        <View style={styles.wrapper}>
            <TextInput
                value={value}
                onChangeText={text => changeText(text)}
                placeholder='Название задачи'
                style={styles.input}
            />
            { validation.isValidInput  ? null :
                <Text style={styles.error}>Поле не может быть пустым</Text>
            }
            {
                validation.isValidRefactor ? null :
                <Text style={styles.error}>Название задачи должно отличаться от предыдущего</Text>
            }
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
    },
    error: {
        color: 'red',
        fontSize: 17,
        paddingVertical: 2,
        paddingHorizontal: 20
    },
    errorCategory:{
        color: 'red',
        fontSize: 17
    }
})