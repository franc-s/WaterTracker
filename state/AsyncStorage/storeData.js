import { AsyncStorage} from 'react-native';

// Stores Data in Local Storage 
export async function _storeData (key,object){

  console.log("_storeData ASync Running for key",key);


  
    try {
      await AsyncStorage.setItem(`${key}`, JSON.stringify(object));
      console.log("Hello ASync stored for key",key);

    } catch (error) {
      // Error saving data
      console.log("Async Error",error)

    }
  
}