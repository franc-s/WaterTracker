import * as React from 'react';
import { Text, View} from 'react-native';
import styles from '../assets/styles/index';

import SmoothPicker from 'react-native-smooth-picker';
import { useStateValue } from '../state/StateProvider'


const Item = React.memo(({ selected, horizontal, name }) => {
  return (
    <View
      style={[
        styles.OptionWrapper,
        {
          color: selected ? '#ABC9AF' : 'transparent',
          width: horizontal ? 140 : 'auto',
        },
      ]}>
      <Text style={{fontSize:26, fontFamily:'Roboto-Bold', color:'white', opacity:selected?1:0.5}}>{name} ml</Text>
    </View>
  );
});

const ItemToRender = ({ item, index }, indexSelected, horizontal) => {
  const selected = index === indexSelected;



  return (
    <Item
      selected={selected}
      horizontal={horizontal}
      name={item}
    />
  );
};

export default function Picker(props) {

  const [{dataML}, dispatch] = useStateValue()
  const [selected, setSelected] = React.useState(1);
  const refPicker = React.useRef(null);


  function handleChange(index) {
    setSelected(index);
    refPicker.current.scrollToIndex({
      animated: false,
      index: index,
      viewOffset: -30,
    });


    dispatch({
      type:'handleMLChange',
      newML:index
    })

    console.log("NEw ML is",dataML[index])

  }


  return (
        <SmoothPicker
          initialScrollToIndex={selected}
          onScrollToIndexFailed={() => {}}
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          refFlatList={refPicker}
          data={dataML}
          scrollAnimation
          onSelected={({ item, index }) => handleChange(index)}
          renderItem={(option) => ItemToRender(option, selected, true)}
          magnet
          selectOnPress
        />
  );
}

