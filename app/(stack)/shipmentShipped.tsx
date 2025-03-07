
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useBackArrowContext } from '../../context/BackArrowContext';
import { useNavigation, useRouter } from 'expo-router';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Description from '../../components/Description';

export default function ShipmentShipped() {

  const [selectedId, setSelectedId] = useState(null);

  const data = [
    {
      id: 1,
      title: "How can I self collect my shipment?",
      description: "We prefer delivering your shipment at your doorstep. However, if you wish to collect it yourself, you can place your request by selecting the order from homepage and using the self collect option available under the 3 dots on the top right corner. You need to carry any Government ID proof (PAN card, driving license, voter ID) to the Delhivery facility to collect your order. This facility is not available when the package is out for delivery. If our executive reaches your doorstep, please refuse to accept / handover the package."
    },
    {
      id: 2,
      title: "What documents do I need to carry for self-collection of my shipment?",
      description: "You need to carry any government ID proof (PAN card, driving license, voter ID)."
    },
    {
      id: 3,
      title: "Can I avail of an open delivery?",
      description: "We understand that you wish to ensure that the shipment is as per your expectation before accepting it. However, currently, we do not provide an open delivery service. In case of any product related issue, please contact the sender."
    },
    {
      id: 4,
      title: "How can I add an alternate phone number to my order?",
      description: "You can add an alternate phone number from the order details section of the selected order. However, this facility is not available once the package is out for delivery/pickup."
    },
    {
      id: 5,
      title: "How can I reschedule delivery/pickup for my order?",
      description: "You can reschedule your delivery/pickup by selecting the order from home page and using the reschedule option available under the 3 dots on the top right corner. However, this facility is not available once the package is out for delivery/pickup. If our executive reaches your doorstep, please refuse to accept / handover the package."
    }
  ];
  const toggleSelected = (id: any) => {
    setSelectedId((prev) => id === prev ? null : id);
}

return (
    <ScrollView style={styles.container}>

        {data.map(item => (
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginVertical: 20,
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