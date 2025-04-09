
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

interface DescriptionProps{
    text: string
}

export default function Description({text}:DescriptionProps) {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    backgroundColor:Colors.white200,
    padding:10,
    elevation:3,
    borderColor:'#ddd',
    shadowColor:'#ccc',
    shadowOffset:{
      height:3,
      width:0
    },
    shadowOpacity:0.3,
    shadowRadius:5
  }
})