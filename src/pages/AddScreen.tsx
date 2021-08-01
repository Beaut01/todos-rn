import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const AddScreen: React.FC = () => {
    return(
        <View style={styles.container}>
            <Text>AddScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})