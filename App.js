import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, {useState} from 'react';
import { Platform, StatusBar, View } from 'react-native';

import styles from "./assets/styles/index"
import Index from "./screens/index"
import { StateProvider } from './state/StateProvider';
import {initialState} from './state/initialState'
import CapacityReducer from './state/reducers/CapacityReducer'
import MLSizeReducer from './state/reducers/MLSizeReducer'

export default function App(props) {

  // For resources such as fonts
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  
  // reducer function
  const reducer = (state, action) => {   

  switch (action.type) {
    // Handles Capacity changes and stores in Async Storage
    case 'handleCapacityChange':
      return CapacityReducer(state,action)  

    // Handles changes in ML Size(Options: 250ml, 350ml, 450ml)
    case 'handleMLChange':
      return MLSizeReducer(state,action)   
    default:
      return state;
  }
  };


  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}

       
        <StateProvider initialState={initialState} reducer={reducer}>
          <Index/>
        </StateProvider>



      </View>
    );
  }
}


async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([

      //Include images and other required resources here e.g. require('./assets/images/splash.png'),
      
    ]),
    Font.loadAsync({
      // Load fonts
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Regular.ttf'),

    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

