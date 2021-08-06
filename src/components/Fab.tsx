import React from 'react'
import {Pressable, View, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {FabProps} from "../types";

export const Fab: React.FC<FabProps> = ({toAddScreen}) => {
    return(
        <Pressable style={styles.button} onPress={() => toAddScreen()}>
            <Ionicons name='add' color='#fff' size={30} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        width: 55,
        height: 55,
        backgroundColor: '#1E90FF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    }
})