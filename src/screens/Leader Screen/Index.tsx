import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles'
import Bg from '../../assets/images/BG.png'
import PortfolioCoin from '../../components/Portfolio Coin/Index'

const LeaderScreen = () => {
    return ( 
        <View>
            <View>
            <Image style={styles.Image} source={Bg}/>
            </View>
            <View style={{marginTop:'80%'}}>
              <PortfolioCoin/>
              <PortfolioCoin/>
              <PortfolioCoin/>
              <PortfolioCoin/>
              <PortfolioCoin/>
            </View>
        </View>
    )
}

export default LeaderScreen
