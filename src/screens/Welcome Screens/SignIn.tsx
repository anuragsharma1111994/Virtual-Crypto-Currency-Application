import React, { useEffect,useContext } from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import styles from "./Styles";
const onboarding3 = require("../../assets/images/Welcome.png");
const google = require("../../assets/images/Google.png");
import { Auth ,Hub } from 'aws-amplify'
import { useNavigation,CommonActions } from "@react-navigation/native";

const Signin = () => {

  const navigation = useNavigation()

  useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'Root' },
            ],
          })
        );
      }
    }

    fetchUser();
  }, [])

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "signIn") {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'Root' },
            ],
          })
        );
      }
    });
  }, [])  

   

  const signInWithGoogle = async () => {
    console.log('sign Press')
    await Auth.federatedSignIn({provider:'Google'})
  };

  return (
    <View style={styles.root}>
      <View style={{ backgroundColor: "#3F2772" }}>
        <Image resizeMode="contain" source={onboarding3} />
      </View>
      <View style={styles.NameContainer}>
        <Text style={styles.Headline}>Welcome</Text>
        <Text style={styles.Subtitle}>Sign in to continue ! </Text>
      </View>
      <View>
        <Text
          style={{
            textAlign: "left",
            marginLeft: 25,
            fontSize: 11,
            fontWeight: "bold",
          }}
        >
          Email Address
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput keyboardType="email-address" style={styles.TextInput} />
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text
          style={{
            textAlign: "left",
            marginLeft: 25,
            fontSize: 11,
            fontWeight: "bold",
          }}
        >
          Password
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput textContentType="password" style={styles.TextInput} />
        </View>
        <Text
          style={{
            textAlign: "right",
            marginRight: 25,
            fontSize: 11,
            fontWeight: "bold",
            color:'#3F2772',
            marginTop:9
          }}
        >
          Forget Password ?
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Pressable
          style={{
            width: "80%",
            backgroundColor: "#3F2772",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
          }}
          
        >
          <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>
            Login Now
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
            marginTop:20
          }}
          onPress={signInWithGoogle}
        >
            <Image source={google}/>
        </Pressable>
      </View>
    </View>
  );
};

export default Signin;
