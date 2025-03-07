import { Button, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import { MaterialIcons } from '@expo/vector-icons';
import { Redirect } from 'expo-router';

export default function About() {
    const [selectedId, setSelectedId] = useState(null);

    const toggleSelected = (url: any) => {
       Linking.openURL(url);
    }

    const data = [
        {
            id: 1,
            title: "Privacy Policy",
            link:'https://icons.expo.fyi/Index'
        },
        {
            id: 2,
            title: "Terms and Conditions",
            link:'https://gluestack.io/ui/docs/home/overview/introduction'
        },
        {
            id: 3,
            title: "About Us",
            link:'https://investor.fb.com/home/default.aspx'
        }
    ]

    return (
        <View style={styles.container}>
            {data.map(item => (
                <View key={item.id}>
                    <TouchableOpacity style={styles.subContainer} onPress={() => toggleSelected(item.link)}>
                        <Text style={styles.title}>{item.title}</Text>
                        <MaterialIcons style={styles.icon} size={24} name='keyboard-arrow-right'/>
                    </TouchableOpacity>
                </View>


            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex:1
        // borderWidth: 1,
    },
    subContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginVertical: 20,
        // borderBottomColor:'#ccc',
        // borderBottomWidth:1
    },
    arrow: {
        marginLeft: 10
    },
    title: {
        width: '85%'
    },
    icon: {
        position: 'absolute',
        right: 10,

    }
})