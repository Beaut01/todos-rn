import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList} from 'react-native'
import {Ionicons} from "@expo/vector-icons";
import {CategoryAdd} from "../components/CategoryAdd";
import {useTypedSelector} from "../hooks/typedSelector";
import {useDispatch} from "react-redux";
import {postTodo} from "../redux/actions/lists";

interface AddScreenProps{
    navigation: any,
    route: any
}

export const AddScreen: React.FC<AddScreenProps> = ({navigation, route}) => {
    const dispatch = useDispatch()
    const { lists } = useTypedSelector(store => store.lists)
    const [value, setValue] = React.useState('')
    const [checked, setChecked] = React.useState(lists[0].id.toString())
    const [validation, setValidation] = React.useState({
        isValidInput: true,
        isValidCategory: true
    })

    const handleAddTodo = (id: string, text: string) => {
        dispatch(postTodo(id, text))
        setValue('')
        setChecked('0')
        navigation.navigate('Main')
    }

    const handleValid = (checked: string, val: string) => {
        if( val === '' && checked === '0'){
            setValidation({
                ...validation,
                isValidCategory: false,
                isValidInput: false
            })
        }else{
            setValidation({
                isValidInput: true,
                isValidCategory: true
            })
            handleAddTodo(checked, val)
        }
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity activeOpacity={0.5} onPress={() => handleValid(checked, value)}>
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
            { validation.isValidInput ? null :
                <Text style={styles.error}>Поле не может быть пустым</Text>
            }
            <View style={styles.container}>
                <Text style={styles.title}>Категория</Text>
                <FlatList data={lists} renderItem={({item}) => <CategoryAdd list={item} checked={checked} setChecked={setChecked} /> } keyExtractor={item => item.id.toString()} />
                { validation.isValidCategory ? null :
                    <Text style={styles.errorCategory}>Нужно выбрать категорию</Text>
                }
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