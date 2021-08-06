import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack'

import { Add} from "../pages/Add";
import { Main} from "../pages/Main";
import {RefactorList} from "../pages/RefactorList";

type RootStackParamList = {
    Main: undefined
    Add: {listId: string , todoId: string, text: string} | undefined,
    RefactorList: {listId: string, title: string}
}

export type MainProps = StackScreenProps<RootStackParamList, 'Main'>
export type AddProps = StackScreenProps<RootStackParamList, 'Add'>
export type RefactorProps = StackScreenProps<RootStackParamList, 'RefactorList'>


const Stack = createStackNavigator<RootStackParamList>()

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Main'
                    component={Main}
                    options={{
                        title: 'Задачи'
                    }}
                />
                <Stack.Screen
                    name='Add'
                    component={Add}
                    options={{
                        title: ''
                    }}
                />
                <Stack.Screen
                    name='RefactorList'
                    component={RefactorList}
                    options={{
                        title: ''
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}