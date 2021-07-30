import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SafeAreaView, View } from 'react-native';
import { List, ListItem, Layout, Divider, Text} from '@ui-kitten/components';
import { updateTask, initTasks } from '../../actions';
import { FAB } from 'react-native-paper';
import  CustomToggle  from '../CustomToggle'
import { _retrieveData } from '../../utils/storage';


const Home = ({ navigation }) => {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const navigateTask = () => {
        navigation.navigate('task');
      };

    const navigateAddTask = () => {
        navigation.navigate('Pridať Task');
      };

    const renderItem = ({ item, index}) => (
        <ListItem title = {item.title} description = {item.description} onPress = {(e) => {navigateTask(); dispatch(updateTask(item))}} accessoryRight = {renderItemRight}/>);

    const renderItemRight = () => (
            <CustomToggle />
      )  

    return (
        <SafeAreaView>
            <Layout style = {{height:'100%'}}>
                <List data= {tasks} renderItem = {renderItem} style = {{paddingTop: 0 }} ItemSeparatorComponent={Divider} />
            </Layout>
            <FAB icon ="plus" color='black' onPress = {e => {navigateAddTask()}} style={{position:'absolute', right:0, bottom:0, margin: 16, backgroundColor: '#FFA500'}} />
        </SafeAreaView>

    )

}

export default Home