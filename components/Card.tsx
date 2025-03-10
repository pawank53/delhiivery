import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

interface CardProps{
    image: {uri:string};
    title:string;
    subTitle:string;
    onPress:()=> void
}

export default function Card({image, title, subTitle , onPress}: CardProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={image} />
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.description}>{subTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        width: '42%',
        marginVertical: 10,
        padding: 10,
        backgroundColor: Colors.white200,
        borderRadius: 10,
        borderColor: '#ddd',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            height: 3,
            width: 0
        },
        shadowOpacity: 0.4,
        shadowRadius: 3
    },
    image: {
        width: 40,
        height: 40,
        marginVertical: 10,
        resizeMode:'contain'
    },
    heading: {
        fontSize: 17,
        fontWeight: '500',
        marginVertical:8
    },
    description: {
        fontSize: 13,
    }
})