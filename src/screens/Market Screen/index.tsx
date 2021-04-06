import React from 'react'
import { View, Text, Image ,ScrollView,FlatList} from 'react-native'
import styles from './Styles'
import TitleImage from '../../assets/images/MarketScreen.png'
import MarketCoin from '../../components/Market Coin/Index'


const marketCoins = [
    {
        id:'1',
        name:'Virtual Doller',
        image:'https://images.app.goo.gl/g6X5HE6ZA8aWxjkk6',
        symbol:'USD',
        valueChange24H:'6.420',
        value:'69.420'
    },{
        id:'2',
        name:'Bitcoin',
        image:'https://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png',
        symbol:'USD',
        valueChange24H:'-1.20',
        value:'69.420'
    },{
        id:'3',
        image:'https://www.logo.wine/a/logo/Ethereum/Ethereum-Logo.wine.svg',
        name:'Etherium',
        symbol:'ETH',
        valueChange24H:'10.20',
        value:'69.420'
    }
] 


const MarketScreen = () => {
    return (
        <View>
            <View style={styles.ImageContainer}>
                <Image style={styles.Image} source={TitleImage}/> 
                <Text style={styles.TitleText}>Crypto Market</Text>
            </View>
            <FlatList style={{width:'100%',marginTop:30}} data={marketCoins} renderItem={({item})=>
                <MarketCoin MarketCoin={item}/>
            }/>
        </View>
    )
}

export default MarketScreen
