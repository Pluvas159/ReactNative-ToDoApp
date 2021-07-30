import { Layout, Input, Divider, Button } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../actions';

const AddTask = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const navigateBack = () => {
        navigation.goBack();
      };

    return (
        <SafeAreaView>
            <Layout style = {{height:'100%'}}>
                <Input placeholder = 'What to do next?' value = {title} onChangeText={e => setTitle(e)} status = 'primary'/>
                <Divider style = {{height: 8}}/>
                <Input placeholder = 'Description' value = {description} onChangeText={e => setDescription(e)} multiline={true} textStyle={{ minHeight: 128 }}/>
                <Divider />
                <Button style= {{position: 'absolute', width: '50%', height: '5%', bottom:0, right:'25%', marginBottom:'10%', textColor: 'black' }} status = 'primary' onPress={() => {dispatch(addTask({title: title, description: description, status: 0})); navigateBack()}}>CREATE</Button>
            </Layout>
        </SafeAreaView>)

}



export default AddTask;