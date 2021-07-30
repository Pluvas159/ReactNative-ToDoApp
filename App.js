
import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { AppNavigator } from './components/navigator/MainNavigator'
import { default as theme } from './custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

/*<Text category='h1'>HOME</Text>
    <Button>😂</Button>*/

/*const HomeScreen = () => {
  const [number, addNumber] = useState(0);*/


  /*const renderItem = ({ item, index}) => (
    <ListItem title = {`${item.title} ${index + 1}`} onPress = {(e) => {data.push({title: e.target.renderItem}); addNumber(number+1)}}/>
  )*/

  /*<Layout style= {{height: '100%'}} level='1'>
      <List data= {data} renderItem = {renderItem} style = {{paddingTop: 50 }}/>
      <Text category = 'h1'>{number}</Text>
    </Layout>

  return(

    )
};*/

export default () => (
  <Provider store = {store}>
    <IconRegistry icons = {EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
      <AppNavigator />
    </ApplicationProvider>
  </Provider>
);

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
