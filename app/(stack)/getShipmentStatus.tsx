import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';
import { useBackArrowContext } from '../../context/BackArrowContext';
import Description from '../../components/Description';
import { Colors } from '../../constants/Colors';

export default function getShipmentStatus() {

    const [selectedId, setSelectedId] = useState(null);

    const queryData = [
        {
            id: 1,
            title: "How can I track my shipment?",
            description: "To track your shipment, make sure you are logged in with the phone number linked to your AWB/order id. You can go to the home screen, under 'to me' section you will see orders which you are receiving while in 'from me' you will see order which you sent to others. For details tap on a particular order. Note: You can only track open orders and orders which were delivered in the last 7 days."
        },
        {
            id: 2,
            title: "Why is my package delayed?",
            description: "Due to unforeseen circumstances, your delivery can get delayed. A new delivery timeframe will be shared with you when you track your shipment on the mobile application. However, in case you have any additional questions or concerns, please raise a support ticket."
        },
        {
            id: 3,
            title: "What do I do if my shipment status is still at 'Pickup pending'?",
            description: "'Pickup pending' status means that Delhivery hasn’t received the physical shipment from the sender. Please contact the sender for further assistance."
        },
        {
            id: 4,
            title: "What do I do if tracking page doesn't show the expected date of arrival?",
            description: "Delhivery will be able to provide date of arrival only after the shipment has been picked up from the sender."
        },
        {
            id: 5,
            title: "My shipment is out for delivery. When will I receive it?",
            description: "When your shipment is out for delivery, it can be delivered to you anytime between 10:00 am and 8:00 pm on the same day."
        },
        {
            id: 6,
            title: "How can I get the delivery of my shipment if I missed it today?",
            description: "Delhivery usually attempts to deliver the shipment on the following business day if you have missed a delivery."
        },
        {
            id: 7,
            title: "Status of my shipment is not updating?",
            description: "Our tracking status is real-time. There may not be an update for 24hrs to 72hrs when your shipment is travelling long distances between your pick up and delivery location across India. Please click on update drop down on tracking details page for the given shipment's tracking update."
        },
        {
            id: 8,
            title: "How can I get the contact number of my delivery/pickup agent?",
            description: "You can find the contact number of the delivery/pickup agent from the Tracking Details section by selecting the order from homepage. This feature is only available once the shipment is out for delivery/pickup."
        }
    ];


    const toggleSelected = (id: any) => {
        setSelectedId((prev) => id === prev ? null : id);
    }

    return (
        <ScrollView style={styles.container}>

            {queryData.map(item => (
                <View key={item.id}>
                    <TouchableOpacity style={styles.subContainer} onPress={() => toggleSelected(item.id)}>
                        <Text style={styles.title}>{item.title}</Text>
                        <MaterialIcons style={styles.icon} size={24} name={selectedId === item.id ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} />
                    </TouchableOpacity>
                    {selectedId === item.id && <Description text={item.description} />}
                </View>


            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    subContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginVertical: 20,
        // backgroundColor:'#fff'
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