import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useDispatch, useSelector } from "react-redux";

const CustomDrawerContent = (props: any) => {

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userState);
  console.info("User details:", userDetails);

  const getInitials = (name: string) => {
    const nameArray=name.split(' ');
    const itinitals=nameArray[0][0] + (nameArray[1] ? nameArray[1][0]: '');
    console.info("User initials:", itinitals.toUpperCase());
    return itinitals.toUpperCase();
  }
  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <View style={styles.initials}>
          <Text>{getInitials(userDetails.name)}</Text>
        </View>
        <Text>{userDetails.name}</Text>
        <Text>{userDetails.mobile}</Text>
      </View>
      <View style={styles.line} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
marginLeft:10
  },
  line: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginVertical: 5,
    opacity: 0.2
  },
  initials:{
    height:50,
    width:50,
    borderRadius:25,
    borderWidth:1,
    borderColor:'black',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:5
  }
})

export default CustomDrawerContent