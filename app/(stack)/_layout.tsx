import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { useBackArrowContext } from '../../context/BackArrowContext';

export default function _layout() {

  const router = useRouter();
  const { backArrowRequired, setIsBackArrowRequired } = useBackArrowContext()

  const renderBackArrow = () => {
    return (backArrowRequired && <AntDesign style={styles.arrow} name='arrowleft' size={24} color={"#000"} onPress={backHandler} />
    )
  };
  useEffect(() => {
    setIsBackArrowRequired(true);
  }, [renderBackArrow])

  const backHandler = () => {
    setIsBackArrowRequired(false);
    router.replace('/help');
  }
  return (
    <Stack>
        <Stack.Screen  name='index'/>
        <Stack.Screen  name='getShipmentStatus' options={{headerLeft: renderBackArrow ,title:'Get Sipment Status' }}/>
        <Stack.Screen  name='updateDestinationAndContactDetails' options={{headerLeft: renderBackArrow ,title:'Update Destination And Contact Details' }}/>
        <Stack.Screen  name='manageReturns' options={{headerLeft: renderBackArrow ,title:'Manage Returns' }}/>
        <Stack.Screen  name='reportIssue' options={{headerLeft: renderBackArrow ,title:'Report issues around delivered shipments' }}/>
        <Stack.Screen  name='reportFiledStaff' options={{headerLeft: renderBackArrow ,title:'Report on-field staff issues' }}/>
        <Stack.Screen  name='paymentDetails' options={{headerLeft: renderBackArrow ,title:'Get payment & refund details' }}/>
        <Stack.Screen  name='productIssues' options={{headerLeft: renderBackArrow ,title:'Product related queries' }}/>
        <Stack.Screen  name='shipmentShipped' options={{headerLeft: renderBackArrow ,title:'For shipments shipped under Delhivery Direct' }}/>
    </Stack>
  )
}

const styles = StyleSheet.create({
  arrow: {
    marginRight: 10
  },
})

