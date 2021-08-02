import React from 'react'
import {View, StyleSheet, Text, CheckBox} from "react-native";
import { List } from 'react-native-paper'

export const Todo: React.FC = () => {
    const [isSelected, setIsSelected] = React.useState(false)
    const [expanded, setExpanded] = React.useState(false)

    const handlePress = () => setExpanded(!expanded)

    return(
        <View style={styles.wrapp}>
            <Text style={styles.title}>Семья</Text>
            <View style={styles.container}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setIsSelected}
                />
                <Text style={styles.text}>Помыть посуду</Text>
            </View>
            <View style={styles.container}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setIsSelected}
                />
                <Text style={styles.text}>Помыть посуду</Text>
            </View>
            <List.Accordion title='Завершённые'>
                <List.Item title='Убраться' left={props => <List.Icon icon='checkmarker'/>}/>
            </List.Accordion>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10
    },
    wrapp: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        color: 'gray'
    },
    text: {
        marginLeft: '5%',
        fontSize: 20
    }
})