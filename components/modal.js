import React, { useState,useEffect } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from "react-native";
import { AntDesign,Foundation } from '@expo/vector-icons';
import { useStateValue } from '../state/StateProvider'
import styles from '../assets/styles/index';


export default function MyModal(props){
  const [{Capacity}, dispatch] = useStateValue()

  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState(Capacity);


  useEffect(()=>{
    setText(Capacity)
  },[Capacity])

  function submitText (){
    setModalVisible(!modalVisible);

    dispatch({
      type:'handleCapacityChange',
      infoType:'StoreData',
      capacity:text
    })
  }


  return (
    <View style={styles.modalMainContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modalContentContainer}>

          <View style={styles.modalView}>
            <View style={styles.modalClose}>
              <TouchableOpacity     onPress={() => {
                setModalVisible(!modalVisible);
              }}>
                <AntDesign name="close" size={20} color="#53BFEF" />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalTitle}>Update Target Water</Text>

            <Text style={styles.modalSubtitle}>Please enter your new water target below:</Text>

              <View style={styles.modalInputContainer}>
              <TextInput
              onChangeText={text => setText(text)}
              value={String(text)}
              numericvalue
              maxLength={5} 
              multiline={false}
              keyboardType={'numeric'}
              style={styles.modalInputText}
            />
            <Text style={styles.modalInputText}> ml</Text>
              </View>

            <TouchableOpacity
              style={styles.updateButtonContainer}
              onPress={submitText}
            >
              <Text style={styles.updateButtonText}>UPDATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.modalOpenText}> {Capacity/1000} L</Text>
        <Foundation name="pencil" size={15} color="white" />
      </TouchableOpacity>
    </View>
  );
};

  

