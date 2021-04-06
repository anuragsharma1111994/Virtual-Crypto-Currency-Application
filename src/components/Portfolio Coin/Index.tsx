import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./Style";
import Bitcoin from '../../assets/images/Bitcoin.png'
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import {useNavigation} from '@react-navigation/native'

const PortfolioCoin = () => {


  const navigation = useNavigation()

  return (
    <Pressable onPress={()=>navigation.navigate('CoinExchangeScreen')} style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.Container}>
            <View style={styles.LeftView}>
                <View style={{flexDirection:'row'}}>
                    <Image style={styles.Image} source={Bitcoin}/>
                    <View style={{marginLeft:10}}>
                        <Text style={styles.SymbolText}>BTC</Text>
                        <Text style={styles.CoinNameText}>Bitcoin</Text>
                    </View>
                </View>

            </View>
           
            <View style={styles.RightViewView}>
                <Text style={styles.SymbolText}>
                    $12.54
                </Text>
                <Text style={styles.CoinNameText}>
                    btc 0.12
                </Text>
            </View>
      </View>
      
    </Pressable>
    
    
  );
};

export default PortfolioCoin;
