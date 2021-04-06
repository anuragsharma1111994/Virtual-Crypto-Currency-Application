import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
  root: { 
      flex: 1,
    },
    Image:{
        height:'50%',
        aspectRatio:1
    },
    Headline:{
        fontWeight:'bold',
        fontSize:20,
    },
    Subtitle:{
        fontWeight:'600',
        fontSize:14,
        color:'#606060'
    },
    GoogleButton:{
        resizeMode:'contain',
        width:'100%'
    },
    NameContainer:{
        padding:20
    },
    TextInput:{
        width:'90%',
        height:41,
        borderWidth:1,
        borderColor:'#CCCCCC',
        borderRadius:12,
        padding:10
    }
});

export default styles;
