import React from 'react'
import {View, StyleSheet, TouchableOpacity} from "react-native";
import { RadioButton, Text} from "react-native-paper";
import {categoryAddProps} from "../types";


export const CategoryAdd: React.FC<categoryAddProps> = ({checked, setChecked, list}) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => setChecked(list.id.toString())}>
            <View style={styles.container}>
                <Text style={styles.text}>{list.title}</Text>
                <RadioButton
                    value={list.id.toString()}
                    color='#1E90FF'
                    status={checked == list.id.toString() ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(list.id.toString())}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        fontSize: 20,
    }
})