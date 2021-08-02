import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Ionicons} from "@expo/vector-icons";

interface ListProps{
    id: number,
    title: string
}

interface ModalListItemProps{
    list: ListProps,
    onDeleteList: any
}

export const ModalListItem: React.FC<ModalListItemProps> = ({list, onDeleteList}) => {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 25, marginRight: 'auto'}}>{list.title}</Text>
            <TouchableOpacity activeOpacity={0.5} onLongPress={() => onDeleteList(list.id)}>
                <Ionicons name='trash-outline' size={30} color='#B22222'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
})