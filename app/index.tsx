import { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useRouter } from "expo-router";
import React from "react";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
const router=useRouter();

  useEffect( ()=>{

    const checkLoginStatus= async ()=>{
      const loggedIn=await fetchLoginStatus();
      setIsLoggedIn(loggedIn);
    }
    checkLoginStatus();
  }, []);


 async function fetchLoginStatus(){
  try{
    const token=await AsyncStorage.getItem("userToken");
    return token!==null;
  }catch(e){
    console.debug("Error while checking loging status:", e);
    return false;
  }
 }

  const buttonHandler = () => {
    console.info("Pressed")
    router.replace("/(drawer)")
  }
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/images/get_started.png')}>
        <View style={styles.textBox}>
          <View style={styles.subContainer}>
            <Text style={styles.headerText}>Ship anything </Text>
            <Text style={styles.headerText}>anywhere</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.description}>Send packages, track shipment and get</Text>
            <Text style={styles.description}>prompt response to all your queries</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="GET STARTED" onPress={buttonHandler} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '25%'
    
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600'
  },
  description: {
    fontSize: 16,
    fontWeight: '400'
  },
  buttonContainer: {
    height: 50,
    width: '90%',
    position: 'absolute',
    bottom: '10%'
  }
})