import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {Ionicons } from '@expo/vector-icons'

interface LocationPickerProps{
    icon: keyof typeof Ionicons.glyphMap;
    text:string
}

export default function LocationPicker({icon, text}:LocationPickerProps) {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} name={icon} size={24} color={"#000"}/>
      <Text>App {text} Address</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        marginHorizontal:10
    }
})