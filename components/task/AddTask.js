import { Layout, Input, Text, Button } from '@ui-kitten/components';
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
                <Text style = {{padding:19, paddingBottom:2}} status = 'primary'>Title:</Text>
                <Input placeholder = 'What to do next?' value = {title} onChangeText={e => setTitle(e)} status = 'primary' style = {{padding:20, paddingTop:0}}/>
                <Text style = {{padding:19, paddingBottom:2}} status = 'primary'>Description:</Text>
                <Input placeholder = 'Description' value = {description} onChangeText={e => setDescription(e)} status = 'primary' textStyle = {{minHeight:100, textAlignVertical : 'top'}} multiline={true} style = {{padding:20, paddingTop:0}}/>
                <Button style= {{position: 'absolute', width: '50%', height: '5%', bottom:0, right:'25%', marginBottom:'10%', textColor: 'black' }} status = 'primary' onPress={() => {if(title!=='' && description !==''){dispatch(addTask({title: title, description: description, state: 0})); navigateBack()}}}>CREATE</Button>
            </Layout>
        </SafeAreaView>)

}



export default AddTask;