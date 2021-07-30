import  { AsyncStorage }  from 'react-native';

export const _storeData = async (key, tasks) => {
    try {
      await AsyncStorage.setItem(
          key = key, 
          value = tasks
        
      );
    } catch (error) {
      throw new Error('problem s storage/storeData')
    }
  };
  

export const _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        return JSON.parse(value);

      }
    } catch (error) {
      // Error retrieving data
    }
  };