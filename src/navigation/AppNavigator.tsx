import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { AddScreen} from "../pages/AddScreen";
import { MainScreen} from "../pages/MainScreen";
import {RefactorList} from "../pages/RefactorList";

const Stack = createStackNavigator()

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Main'
                    component={MainScreen}
                    options={{
                        title: 'Задачи'
                    }}
                />
                <Stack.Screen
                    name='Add'
                    component={AddScreen}
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