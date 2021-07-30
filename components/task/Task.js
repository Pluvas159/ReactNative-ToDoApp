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
                <Text category='h1' style = {{padding: 0, margin:0, width: '100%', textAlign: 'center'}} >{task.title}</Text>

            </Layout>
        </SafeAreaView>
    );
}

export default Task
