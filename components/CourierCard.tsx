import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

interface courierCardProps {
    image: { uri: string };
    heading: String;
    subHeading: String;
    onPress:()=> void;
}

export default function CourierCard({ image, heading, subHeading, onPress }: courierCardProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View>
                <Image style={styles.image} source={image} />
            </View>
            <View style={styles.texts}>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.subHeading}>{subHeading}</Text>
            </View>
            <View style={styles.icon}>
                <AntDesign name="arrowright" size={24} color="#fff" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 180,
        width: '42%',
        borderWidth: 0.5,
        padding: 15,
        marginVertical: 20,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        elevation: 5,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            height: 3,
            width: 0
        },
        shadowOpacity: 0.4,
        shadowRadius: 3
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        marginBottom: 10
    },
    texts:{
        marginTop:15
    },
    heading:{
        fontSize:14,
        fontWeight:'500'
    },
    subHeading:{
        fontSize:13,
        fontWeight:'200'
    },
    icon:{
        borderWidth:1,
        height:35,
        width:35,
        backgroundColor:'#000',
        borderRadius:17,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:0,
        right:0,
        margin:10
    }
})