import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { useRouter } from 'expo-router';
import { useCourierContext } from '../context/CourierContext';
import { Colors } from '../constants/Colors';

interface OrderProps{
    text:string;
    btn:boolean;
    image:{uri:string}
}

export default function Order({image, text, btn}: OrderProps) {

    const router=useRouter();
    const { fromDomesticCourier, setFromDomesticCourier } = useCourierContext();

    const onPress=()=>{
        setFromDomesticCourier(true);
        router.push('/sendPackage')
        
    }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image}/>
      </View>
        <Text style={styles.text}>{text}</Text>
        {btn &&  (<CustomButton title='Ship Now' onPress={onPress} style={styles.button} textStyle={styles.btnTextStyle}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.white100 ,
        justifyContent:'center',
        alignItems:'center',
    },
    imageContainer:{
        marginTop:30
    },
    image:{
        height:50,
        width:50,
        tintColor:'#ccc'
    },
    text:{
        marginVertical:20,
        fontWeight:'300'
    },
    button:{
        width:'40%',
        backgroundColor:Colors.white100,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#005AFF',
        marginBottom:30
    },
    btnTextStyle:{
        color:'#000',
        fontWeight:'300'
    }
})