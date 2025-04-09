import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Line() {
  return (<View style={styles.line} />)
}

const styles = StyleSheet.create({
    line: {
        borderWidth: 0.5,
        marginVertical: 10,
        opacity: 0.3
    },
})