import { Auth } from 'aws-amplify'
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useNavigation} from "@react-navigation/native";

const ProfileScreen = () => {

    const navigation = useNavigation();

    const signOut = async () =>{
        await Auth.signOut();
        navigation.navigate('Signin')
    }

    return (
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <Pressable onPress={signOut}>

            <Text> logout</Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen
