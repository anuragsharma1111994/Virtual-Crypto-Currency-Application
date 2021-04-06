import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Image, TextInput ,Alert} from "react-native";
import styles from "./Styles";
import { Ionicons } from "@expo/vector-icons";
import Ex from "../../assets/images/EXC.png";
import { useNavigation, useRoute } from "@react-navigation/native";

const ExchangeScreen = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const [coinAmount, setcoinAmount] = useState("");
  const [coinUSDAmount, setcoinUSDAmount] = useState("");
  const isBuy = route?.params?.isBuy;
  const coinData = route?.params?.coinData;

  const MaxUSD = 10000;

  useEffect(() => {
    const amount = parseFloat(coinAmount);
    if (!amount && amount !== 0) {
      setcoinAmount("");
      setcoinUSDAmount("");
      return;
    }
    //   setcoinAmount(amount.toString()
    setcoinUSDAmount((amount * coinData.currentPrice).toString());
  }, [coinAmount]);

  useEffect(() => {
    const amount = parseFloat(coinUSDAmount);
    if (!amount && amount !== 0) {
      setcoinAmount("");
      setcoinUSDAmount("");
      return;
    }
    //   setcoinAmount(amount.toString()
    setcoinAmount((amount / coinData.currentPrice).toString());
  }, [coinUSDAmount]);

  const placeOrder = () => {
    if (isBuy && parseFloat(coinUSDAmount) > MaxUSD) {
      Alert.alert("Error", "Not enough USD Coins");
      return;
    }
    if (!isBuy && coinAmount > coinData.amount) {
      Alert.alert("Error", "Not enough coins");
      return;
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.HeaderContainer}>
        <View style={styles.Header}>
          <Pressable onPress={() => navigation.navigate("CoinExchangeScreen")}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </Pressable>
          <View style={{ marginHorizontal: 90 }}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Exchange Crypto{" "}
            </Text>
          </View>
        </View>

        <View style={styles.DetailContainer}>
          <Text style={styles.Title}>
            {" "}
            {isBuy ? "Buy" : "Sell"} {""}
            {coinData?.name}
          </Text>
          <Text style={styles.Detail}>
            1 {coinData?.symbol}
            {" = "}${coinData.currentPrice}
          </Text>
        </View>
      </View>
      <Image style={styles.Image} source={Ex} />

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setcoinAmount}
            value={coinAmount}
            placeholder="0"
            keyboardType="decimal-pad"
          />
          {/* <Text>{coinData.symbol}</Text> */}
        </View>
        <Text style={{ fontSize: 30 }}> = </Text>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setcoinUSDAmount}
            value={coinUSDAmount}
            placeholder="0"
            keyboardType="decimal-pad"
          />
          <Text>USD</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "auto",
          marginBottom: 4,
        }}
      >
        <Pressable onPress={placeOrder} style={styles.Button}>
          <Text style={styles.ButtonText}>Place Order</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ExchangeScreen;
