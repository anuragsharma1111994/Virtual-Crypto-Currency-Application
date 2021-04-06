import React,{useState} from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./Styles";
import re from "../../assets/images/Group.png";
import ProfileImage from "../../assets/images/User-3.png";
import Etherium from "../../assets/images/Etherium.png";
import CoinPriceGraph from "../../components/Coin Price Grph";
import { AntDesign } from '@expo/vector-icons'; 

import {useNavigation} from '@react-navigation/native'

const historyString = JSON.stringify([
  47222.9831719397,
  47434.65047738381,
  47607.369136516856,
  47074.35527848516,
  46786.501689765224,
  47499.27660080816,
  47815.96175554316,
  48012.57846110786,
  48216.13437588234,
  47781.9580983982,
  47500.21378781513,
  47113.50153492208,
  47221.09573635404,
  47312.30069681106,
  47340.61147144899,
  47049.24407763847,
  47339.15253224385,
  47345.246757007844,
  47531.621858104314,
  47620.34141405727,
  47960.84287845154,
  46716.564311380964,
  47017.8868113775,
  47528.03480509394,
  47555.855803284954,
  47145.24950500805,
  47198.98402769743,
  47500.05891087597,
  47695.1209347129,
  47694.83316871613,
  47414.1862550079,
  47592.08424992752,
  47590.06380247422,
  47769.34130225554,
  47778.97276294089,
  47818.781165819164,
  47824.62281821764,
  47675.591234653235,
  47140.1963883116,
  47355.618365196424,
  47159.431870925095,
  46679.5534155937,
  46296.60220783228,
  46884.18296762147,
  46927.83149245025,
  46926.675372277605,
  46935.95285163663,
  47088.57568866298,
  46687.591577314066,
  46743.48463123342,
  46780.62948197996,
  46837.265603101696,
  47063.25888155468,
  46998.96059525472,
  47007.26367365752,
  47466.74107813106,
  47389.45732031188,
  47303.75277005233,
  47255.606394487055,
  47413.84516967594,
  48759.32424065163,
  48507.061569607475,
  48568.03579792561,
  48461.186989103386,
  49026.84078629081,
  48845.08131650659,
  48875.81890265539,
  49087.20681382356,
  48625.44724393501,
  48638.56669076275,
  48451.08542464199,
  48824.192614890875,
  48558.28196763652,
  48563.903471922786,
  48533.06040750724,
  48744.169304848554,
  48742.10068193661,
  49082.8059943863,
  48565.32288945199,
  48242.91184336785,
  48146.23982322108,
  46862.88823877233,
  47083.03805970495,
  46918.93102691646,
  46770.02817531785,
  47212.2475468462,
  47310.200440076245,
  47579.18764517152,
  47532.0946726225,
  47555.156200437814,
  47709.562084736834,
  47984.41938601861,
  47873.79429902326,
  47657.77874796809,
  48029.345585984294,
])

const CoinExchangeScreen = () => {
  const navigation = useNavigation()

  const [coinData, setcoinData] = useState({
    id: "1",
    name: "Bitcoin",
    image:
      "https://img.freepik.com/free-vector/modern-yellow-bitcoin-design_1017-9631.jpg?size=338&ext=jpg&ga=GA1.2.2063605944.1613891814",
    symbol: "USD",
    valueChanged24H: -1.24,
    valueChanged1H: 3.24,
    valueChanged1D: 4.24,
    valueChanged7D: -1.24,
    currentPrice: 5335,
    amount: 2,
  });

  const onBuy = () => {
    navigation.navigate('ExchangeScreen',{isBuy:true,coinData})
  };
  const onSell = () => {
    navigation.navigate('ExchangeScreen',{isBuy:false,coinData})

  };

  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.HeaderFont}>VOTICRYPTO</Text>
            <Text style={styles.DateFont}>12 June</Text>
          </View>
          <Image style={styles.Profile} source={ProfileImage} />
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.title}>Total Balance</Text>
          <Text style={styles.networth}>$16,210.31</Text>
        </View>

        <View style={styles.priceContainer}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.logoBarounContainer}>
              <Image style={styles.LogoImage} source={Etherium} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.name}>Etherium</Text>
              <Text style={styles.value}>$ 94.12</Text>
              <Text style={styles.price}>0.881 ETH</Text>
            </View>
          </View>
          <View></View>
        </View>

        <Image style={styles.Image} source={re} />
      </View>

      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>Position</Text>
      </View>
      <View>
        <CoinPriceGraph dataString={historyString}/>
      </View>

      <View style={styles.BuySell}>
        <Pressable onPress={onBuy} style={styles.BuyButton}>
          <Text style={styles.buttonFont}>Buy now</Text>
          <AntDesign name="caretdown" size={16} color="#fff" />
        </Pressable>
        <Pressable onPress={onSell} style={styles.SellButton}>
        <AntDesign name="caretup" size={16} color="#fff" />
        <Text style={styles.buttonFont}>Sell now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CoinExchangeScreen;
