import React,{useState,useEffect} from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import styles from '../assets/styles/index';

import {HumanBase} from '../components/HumanBase'
import Picker from '../components/Picker'
import { scale, moderateScale, verticalScale} from '../assets/styles/scaling';
import {IncreaseButton,DecreaseButton} from '../components/PlusMinusButtons'
import MyModal from '../components/modal'
import {_storeData} from "../state/AsyncStorage/storeData"
import {_retrieveData} from '../state/AsyncStorage/retrieveData'
import { useStateValue } from '../state/StateProvider'


export default function Index() {

const [{Capacity,max_height,MLSize}, dispatch] = useStateValue()

  const [level, setLevel] = useState(max_height)  // Handles Height of blue shade 
  const [totalML, setTotalML] = useState(0) // Stores totalML drunk

  // Retrieves previous ML capacity value from Async Storage
  useEffect(()=>{
    _retrieveData('capacity').then(data=>{
    if(data){
      dispatch({
        type:'handleCapacityChange',
        infoType:'RetrieveData',
        capacity:data
      })
    }

    }
      )
  },[])




  // Handles +/- Button Clicks to increase/decrease water consumed
  function handlePress(val){
    if(totalML + val > Capacity){     // Stops user from violating drinking capacity bounds .....Second Option: Could disable buttons and not display user alert
      return alert("Please increase your capacity, well done you've drunk alot")
    }
    if(totalML + val < 0){
      return alert("Where are you getting rid of all this water?")
    }
    console.log("ML Size is,",MLSize)
    let newML = totalML + val
    setTotalML(newML)
    let ratio = newML/Capacity 
    setLevel( (1 - ratio) * max_height)
  }




  return (
    <View style={{flex:1}}>

      <View style={styles.headerContainer}>

          <View style={{flexDirection:'column'}}>
            <Text style={[styles.headerTitleMain,{left:scale(25),textAlign: 'left'}]}> {totalML/1000} L</Text>
            <Text style={[styles.headerSubTitle,{left:scale(19),textAlign: 'center',width:scale(108)}]}>TOTAL WATER DRUNK</Text>
          </View>

          <View style={{flexDirection:'column',width:scale(126)}}>
            <Text style={[styles.headerTitleMain,{right:scale(25),textAlign: 'center'}]}>  15 </Text>
            <Text style={[styles.headerSubTitle,{right:scale(19),textAlign: 'center'}]}>ACHIEVED GOAL DAYS</Text>
          </View>
      
      </View>



        <View style={styles.humanSVGContainer}>
          <HumanBase level={level} />
          <MyModal />

        </View>
        
        <View style={styles.MLGroupContainer}>
        
          <Text  
          style={styles.MLSubTitle}>
            Nice work! Keep it up!</Text>

        <Picker />



        <View style={styles.buttonContainer}>
        
        <TouchableOpacity style={{marginRight:moderateScale(15)}} onPress={()=>handlePress(-MLSize)}>
          <DecreaseButton
          size={verticalScale(55)}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>handlePress(MLSize)}>
          <IncreaseButton
            size={verticalScale(55)}

          />
        </TouchableOpacity>

      </View>
        
        </View>

  </View>


  );
}


