import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux' 
import { Text, Divider, Layout, TopNavigationAction } from '@ui-kitten/components';

const Task = ({ navigation }) => {
    const task  = useSelector(state => state.task)
    const navigateBack = () => {
        navigation.goBack();
      };
    
      const BackAction = () => (
        <TopNavigationAction  onPress={navigateBack}/>
      );


//<TopNavigation accessoryLeft={BackAction}/>
//<Divider style = {{ width: '100%', height: '8px', color: '#ff9900'}}/>
    return (
        <SafeAreaView >
            <Layout style = {{height:'100%'}}>
                <Text category='h1' style = {{padding: 5, margin:0, width: '100%', textAlign: 'center'}} >{task.title}</Text>
                <Text category='h4' style = {{padding: 10, margin:0, width: '100%', textAlign: 'right'}} status= {task.state===1? 'success': 'warning'} >{task.state===1? 'Completed': 'Not yet completed' }</Text>
                <Divider />
                <Text category='h2' style = {{padding: 5, margin:0, width: '100%', textAlign: 'left', opacity:0.5}} status = 'primary'>Description:</Text>
                <Text category='h5' style = {{padding: 5, margin:0, width: '100%', textAlign: 'left', opacity:0.5}} >{task.description}</Text>

            </Layout>
        </SafeAreaView>
    );
}

export default Task
