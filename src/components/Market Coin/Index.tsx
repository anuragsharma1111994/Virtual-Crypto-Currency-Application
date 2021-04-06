import React from "react";
import { View, Text, Image ,Pressable} from "react-native";
import styles from "./Style";
import {useNavigation} from '@react-navigation/native'

export interface MarketCoinProps {
  MarketCoin: {
    image: string;
    name: string;
    symbol: string;
    valueChange24H: number;
    value: number;
  };
}

const MarketCoin = (props: MarketCoinProps) => {
  const {
    MarketCoin: { image, name, valueChange24H, symbol, value },
  } = props;

  const navigation = useNavigation()

  return ( 
    <Pressable onPress={()=>navigation.navigate('CoinExchangeScreen')} style={styles.root}>
      <View style={styles.left}>
        <Image style={styles.Image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.value}>${value}</Text>

        <Text style={{ color: valueChange24H > 0 ? "green" : "red" }}>
          {valueChange24H > 0 && "+"}
          {valueChange24H}
        </Text>
      </View>
    </Pressable>
  );
};

export default MarketCoin;
