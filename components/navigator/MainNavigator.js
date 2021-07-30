import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';
import  Home from '../home/Home'
import  Task from '../task/Task'
import  AddTask from '../task/AddTask'
//import { default as defTheme } from '../../custom-theme.json';
import { DarkTheme } from '@react-navigation/native';
import { initTasks } from '../../actions'



const { Navigator, Screen } = createStackNavigator();


const HomeNavigator = () => {
    return (
    <Navigator>
        <Screen name = 'My To-Do Tasks' component={Home}/>
        <Screen name = 'task' component={Task}/> 
        <Screen name = 'Pridať Task' component={AddTask}/>
    </Navigator>
 )} ;

export const AppNavigator = () => {
    const dispatch = useDispatch()
    const theme = {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            card: '#FFA500',
            text: '#000',
        }
    }
    useEffect(() => {
        dispatch(initTasks())
    });

    return(
        <NavigationContainer theme = {theme}>
            <HomeNavigator />
        </NavigationContainer>
    )
};