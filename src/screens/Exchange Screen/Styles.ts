import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    HeaderContainer:{
        height:260,
        width:'100%',
        backgroundColor:'#3F2772'
    },
    Header:{
        marginTop:40,
        marginLeft:20,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'space-between'

    },
    Image:{
        position:'absolute',
        right:1,
        resizeMode:'contain',
        marginTop:'41%',
        height:120,
        width:150
    },
    DetailContainer:{
        marginTop:50,
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'
    },
    Title:{
        color:'#fff',
        fontSize:22,
        fontWeight:'bold'
    },
    Detail:{
        color:'#fff',
        fontSize:15
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#b1b1b1",
        padding: 15,
        flex: 1,
        margin: 20,
        borderRadius:10,
      },
      container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        marginTop:'30%'
      },
      Button:{
        backgroundColor:'#3F2772',
        marginTop:'auto',
        width:'93%',
        alignItems:'center',
        justifyContent:'center',
        height:50,
        borderRadius:12
      },
      ButtonText:{
        color:'#fff',
        fontSize:18
      }
})
 
export default styles