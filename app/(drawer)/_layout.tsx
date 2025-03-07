import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '../../components/CustomDrawerContent';
import { AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useRouter } from 'expo-router';
import { useBackArrowContext } from '../../context/BackArrowContext';


export default function DrawerLayout() {

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
    router.push('/');
  }


  return (
    <GestureHandlerRootView>
      <Drawer drawerContent={CustomDrawerContent} screenOptions={{ drawerActiveTintColor: 'black' }}>
        <Drawer.Screen
          name='index'
          options={{
            drawerLabel: "Home",
            title: "DELHIVERY",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: '500'
            },
            drawerIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />
          }} />
        <Drawer.Screen name='sendPackage' options={{ headerLeft: renderBackArrow, drawerLabel: "Send a Package", title: 'Send a Package', drawerIcon: ({ color, size }) => <Fontisto name='shopping-package' size={size} color={color} /> }} />
        <Drawer.Screen name='estimatePrice' options={{ headerLeft: renderBackArrow, drawerLabel: "Estimate Price", title: 'Estimate Price', drawerIcon: ({ color, size }) => <Ionicons name='calculator' size={size} color={color} /> }} />
        <Drawer.Screen name='myOrders' options={{ headerLeft: renderBackArrow, drawerLabel: "My Orders", title: "My Orders", drawerIcon: ({ color, size }) => <Feather name='package' size={size} color={color} /> }} />
        <Drawer.Screen name='settings' options={{ headerLeft: renderBackArrow, drawerLabel: "Settings", title: "Settings", drawerIcon: ({ color, size }) => <Ionicons name='settings' size={size} color={color} /> }} />
        <Drawer.Screen name='help' options={{ headerLeft: renderBackArrow, drawerLabel: "Help", title: "Help", drawerIcon: ({ color, size }) => <Ionicons name='help' size={size} color={color} /> }} />
        <Drawer.Screen name='about' options={{ headerLeft: renderBackArrow, drawerLabel: "About", title: "About", drawerIcon: ({ color, size }) => <AntDesign name='infocirlceo' size={size} color={color} /> }} />
      </Drawer>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  arrow: {
    marginLeft: 10
  },
})