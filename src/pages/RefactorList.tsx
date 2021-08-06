import React from 'react'
import {TextInput, View, StyleSheet, TouchableOpacity, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {patchList} from "../redux/actions/lists";

interface RefactorListProps{
    navigation: any,
    route: any
}

export const RefactorList: React.FC<RefactorListProps> = ({navigation, route}) => {
    const dispatch = useDispatch()
    const title = route.params?.title
    const listId = route.params?.listId
    const [value, onChangeValue] = React.useState(title)
    const [isValid, setIsValid] = React.useState(true)

    const handlePatchList = (listId: string, title: string) => {
        dispatch(patchList(listId, title))
        onChangeValue('')
        navigation.navigate('Main')
    }

    const handleValid = (listId: string, val: string) => {
        if(value === title) {
            setIsValid(false)
        }else{
            setIsValid(true)
            handlePatchList(listId, val)
        }
    }

    const changeText = (text: string) => {
        onChangeValue(text)
        setIsValid(true)
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity activeOpacity={0.5} onPress={() => handleValid(listId, value)} >
                    <Ionicons name='checkmark-outline' size={30} style={styles.checkmark} />
                </TouchableOpacity>
            )
        })
    })

    return(
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={text => changeText(text)}
            />
            {isValid ? null :
                <Text style={styles.error}>Название списка должно отличаться от предыдущего</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        padding: 20,
        fontSize: 25,
    },
    wrapper:{
        flex: 1,
        backgroundColor: '#fff'
    },
    checkmark:{
        color: 'blue',
        marginRight: 25
    },
    error: {
        color: 'red',
        fontSize: 17,
        paddingHorizontal: 20
    }
})