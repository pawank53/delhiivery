import { Button, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Order from '../../components/Order';
import CustomButton from '../../components/CustomButton';
import { Colors } from "../../constants/Colors"
import { useRouter } from 'expo-router';

export default function MyOrders() {

    const route=useRouter();

    const onButtonPress=()=>{
        route.push('/sendPackage')
        
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/images/empty-order.png")} />
            <Text style={styles.heading}>You do not have any orders</Text>
            <Text style={styles.description}>Orders created in the last 15 {"\n"} days only appear here</Text>
            <CustomButton style={styles.btnStyle} title='Ship Now' onPress={onButtonPress}/>
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
        height: 50,
        width: 50,
        marginBottom:20
    },
    heading: {
        fontSize:20,
        fontWeight:'500'
    },
    description:{
        fontSize:18,
        marginVertical:15,
        fontWeight:'300'
    },
    btnStyle:{
        width:'60%',
        backgroundColor:Colors.secondaryBlue
    }
});
