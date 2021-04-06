import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./Styles";
import { AppLoading } from "expo";
import ProfileImage from "../../assets/images/User-3.png";
import Icon from "../../assets/images/Voti.png";
import PortfolioCoin from "../../components/Portfolio Coin/Index";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.HeaderFont}>VOTICRYPTO</Text>
          <Text style={styles.DateFont}>12 June</Text>
        </View>
        <Image style={styles.Profile} source={ProfileImage} />
      </View>

      <View style={styles.PortfolioContainer}>
        <View style={styles.Shado}></View>
        <View style={styles.portfolioCard}>
          <View style={styles.ProfileHeader}>
            <Image style={styles.VotiImage} source={Icon} />
            <View
              style={{
                height: 25,
                width: 1,
                backgroundColor: "white",
                marginLeft: 10,
              }}
            ></View>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.Title}>VOTICRYPTO</Text>
              <Text style={styles.Title}>WALLET</Text>
            </View>
            <View
              style={{
                marginLeft: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{left:55}}>

              <Text style={styles.UpdateText}>Last update 1 min ago</Text>
              </View>
            </View>
          </View>
          <View style={styles.Balance}>
            <Text style={styles.BalanceText}>$16,210.31</Text>
            <Text style={styles.CurrentText}>+17.32 (4.12%) 24Hr</Text>
          </View>
        </View>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 10,marginBottom:10 }}>
        <Text style={{ fontSize: 20 }}>Portfolio</Text>
      </View>
      <ScrollView>
      <PortfolioCoin />
      <PortfolioCoin />
      <PortfolioCoin />
      <PortfolioCoin />
      <PortfolioCoin />
      <PortfolioCoin />
      <PortfolioCoin /> 
      <PortfolioCoin />

      </ScrollView>
      
    </View>
  );
};

export default HomeScreen;
