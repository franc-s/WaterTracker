import * as React from 'react';
import Svg, {
    G,
    Path,
    Circle,
    Rect,
  } from 'react-native-svg';


export const DecreaseButton = (props) => (
  
    <Svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 60 60">

    <G transform="translate(-76 -711)">
    <G transform="translate(-1581 484.986)">
    <G class="a" stroke="#fff" strokeWidth="4px" fill="none" transform="translate(1657 226.014)">
    <Circle class="c" stroke="none" cx="30" cy="30" r="30"/>
    <Circle class="d" fill="none" cx="30" cy="30" r="28"/>
    </G>
    </G>
    <Rect class="b" fill="#fff" width="22" height="6" rx="1" transform="translate(95 738)"/>
    </G>
  </Svg>
        )



export const IncreaseButton = (props) => (

  <Svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size}  viewBox="0 0 60 60">

      <G transform="translate(-1657 -226.014)">
          <Path fill="#fff" d="M22.3,10.547H15.19V3.438a1.105,1.105,0,0,0-1.105-1.105H11.653a1.1,1.1,0,0,0-1.105,1.105v7.109H3.439a1.105,1.105,0,0,0-1.105,1.105v2.431a1.105,1.105,0,0,0,1.105,1.105h7.109V22.3A1.1,1.1,0,0,0,11.653,23.4h2.431A1.105,1.105,0,0,0,15.19,22.3V15.189H22.3A1.105,1.105,0,0,0,23.4,14.084V11.653A1.105,1.105,0,0,0,22.3,10.547Z" transform="translate(1673.895 243.036)"/>
          <G fill="none" stroke="#fff" strokeWidth="4px" transform="translate(1657 226.014)">
              <Circle stroke="none" cx="30" cy="30" r="30"/>
              <Circle  fill="none"cx="30" cy="30" r="28"/>
      </G>
  </G>
</Svg>
      )