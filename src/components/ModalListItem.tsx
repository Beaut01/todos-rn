import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Ionicons} from "@expo/vector-icons";

export const ModalListItem: React.FC = () => {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 25, marginRight: 'auto'}}>Семья</Text>
            <Ionicons name='trash-outline' size={30} color='#B22222'/>
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