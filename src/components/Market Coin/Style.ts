import { Fontisto } from '@expo/vector-icons'
import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:70,
        margin:6,
        alignItems:'center',
        backgroundColor:'#EBEBEB',
        padding:20,
        borderRadius:10,
    },
    Image:{
        height:50,
        width:50,
        marginRight:10
    },
    left:{
        flexDirection:'row',
        alignItems:'center'
    },
    name:{
        fontWeight:'bold',
        marginBottom:5
    },
    symbol:{
        color:'#6b6b6b',
        // fontWeight:'bold'
    },
    value:{
        fontWeight:'bold',
        marginBottom:5,
        fontSize:16
    },
    valueChange24H:{

    }
})

export default styles