import { StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale} from './scaling';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#53bfef',
      },
      
      headerContainer:
        {flexDirection:'row',
        justifyContent:'space-between',
        top:verticalScale(35)
      },
      
   
    
      headerTitleMain:{
        fontSize:scale(40), 
        fontFamily:'Roboto-Bold',
        color:'white',
        letterSpacing:0
      },
    
      headerSubTitle:{
        fontSize:scale(16),  
        alignSelf:'flex-start',
        fontFamily:'Roboto-Regular',
        color:'white',
        letterSpacing:0
      },

      humanSVGContainer:{
      alignItems:'center',
      justifyContent:'center',
      top:scale(60)
    },

      buttonContainer:{
        flexDirection:'row',
        position:'relative',
      },

      MLGroupContainer:{
        position:'relative',
      justifyContent:'center',
      alignItems:'center',
      top:verticalScale(60),
      bottom:verticalScale(20)
    },
     
    MLSubTitle:{
    fontFamily:'Roboto-Medium',
    width:verticalScale(180),
    fontSize:verticalScale(23), 
    color:'white',
    letterSpacing:0,
    textAlign:'center',
    },


      OptionWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
    
      },


      modalMainContainer: {
  
        position:'absolute',
        right:verticalScale(50),
        top:verticalScale(-10),
        zIndex:4,
        elevation:5,
      },

      modalContentContainer: {
        flex: 1,
        alignItems: "center",
        top:177,
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        elevation: 5,
        width:261,
        height:282
      },
      openButton: {
        elevation: 2,
        height:44,
        width:70,
        flexDirection:'row',
        alignItems:'center',
      },
      modalOpenText: {
        color: "white",
        fontSize:20,
        fontFamily:'Roboto-Medium',
        padding:'5%'
      },
      
      modalTitle:{
        fontSize:22,
        fontFamily:'Roboto-Bold',
        letterSpacing:0,
        textAlign:'center',
        color:'#53BFEF',
        width:211,
        paddingTop:'4%'

      },

      modalSubtitle:{
        fontSize:14,
        fontFamily:'Roboto-Regular',
        color:'#53BFEF',
        textAlign:'center',
        width:198,
        marginTop:'10%',
        marginBottom:'10%'

      },

      modalInputText:{
        textAlign:'center',
        color:'#53BFEF',
        letterSpacing:0,
        fontFamily:'Roboto-Regular',
        fontSize:18
      },

      modalClose:{
        alignSelf:"flex-end", 
        right:10,
        top:10
      },

    modalInputContainer:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center', 
      borderWidth:1,
      borderRadius:10,
      borderColor:'#53BFEF',
      width:200,
      height:31,
      marginTop:'4%'
    },

    updateButtonContainer:{
      marginTop:'4%',
      height:40,
      width:198,
      backgroundColor:'#53BFEF',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center'
    },

    updateButtonText:{
      fontSize:18,
      textAlign:'center',
      color:'white',
      fontFamily:'Roboto-Bold',
      letterSpacing:0
    }




})