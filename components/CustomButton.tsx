import { StyleSheet, Text, View , TouchableOpacity, ViewStyle, StyleProp, TextStyle} from 'react-native'
import React from 'react'

interface customerButtonProps{
    title: string,
    onPress: ()=> void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>
}

export default function CustomButton({title, onPress, style, textStyle}: customerButtonProps) {

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
     <Text style={[styles.title, textStyle]}> {title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        height:50,
        width:'100%',
        backgroundColor:'#F98B8B',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'#FFFFFF',
        fontWeight:'700'
    }
})