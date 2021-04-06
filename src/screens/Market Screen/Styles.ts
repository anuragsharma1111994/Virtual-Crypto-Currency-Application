import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
     ImageContainer:{
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'#3F2772',
         borderBottomRightRadius:100,
         padding:30
     },
     Image:{
         height:138,
         width:218,
         resizeMode:'contain'
     },
     TitleText:{
         fontSize:18,
         fontWeight:'100',
         marginTop:10,
         color:'#fff'
     }
})

export default styles