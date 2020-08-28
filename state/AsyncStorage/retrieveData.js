import { AsyncStorage} from 'react-native';


// Retrieves data from Local Storage
export const _retrieveData = async(key) => {
  console.log(" _retrieveData Running Retrieving Data for key",key)
    try {

        const values = await AsyncStorage.getItem(`${key}`)
        const item = JSON.parse(values);


        return item;

    } catch (error) {
      // Error retrieving data
      console.log("Async Error",error)
    }
  }

