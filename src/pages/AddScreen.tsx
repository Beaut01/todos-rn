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
    const [value, setValue] = React.useState('')
    const [checked, setChecked] = React.useState('12')

    const { lists } = useTypedSelector(store => store.lists)

    const handleAddTodo = (id: string, text: string) => {
        dispatch(postTodo(id, text))
        setValue('')
        setChecked('12')
        navigation.navigate('Main')
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity activeOpacity={0.5} onPress={() => handleAddTodo(checked, value)} disabled={value === ''}>
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