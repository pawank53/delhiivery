import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState, useLayoutEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import iconSet from '@expo/vector-icons/build/Fontisto'
import { Colors } from '../../constants/Colors'
import { useFocusEffect, useRouter } from 'expo-router'

export default function Help() {


  const helpCategory = [
    { id: 1, title: "Get shipment status", icon: 'list-status', screen: "getShipmentStatus" },
    { id: 2, title: "Update destination and contact details", icon: 'contacts-outline', screen: 'updateDestinationAndContactDetails' },
    { id: 3, title: "Manage Returns", icon: 'keyboard-return', screen: "manageReturns" },
    { id: 4, title: "Report issues around delivered shipments", icon: "store-alert-outline", screen: "reportIssue" },
    { id: 5, title: "Report on-field staff issues", icon: "shield-alert-outline", screen: "reportFiledStaff" },
    { id: 6, title: "Get payment & refund details", icon: "bank-outline", screen: "paymentDetails" },
    { id: 7, title: "Product related queries", icon: 'file-question-outline', screen: "productIssues" },
    { id: 8, title: "For shipments shipped under Delhivery Direct", icon: 'progress-question', screen: "shipmentShipped" }
  ]

  const [showAll, setShowAll] = useState(false);
  const router=useRouter();

  const displayCategories = showAll ? helpCategory : helpCategory.slice(0, 2);

  const onCategoryHandler = ({ screen }: any) => {
    console.log("Screen:", screen);
    router.push(screen)
  }
  
  useLayoutEffect(() => {
    console.log("calling use layout effect");
    
    setShowAll(false);
  }, []);

  useFocusEffect(
    useCallback(()=>{
      setShowAll(false);
    }, [])
  )

  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <Text style={styles.header}>FREQUENTLY ASKED QUESTIONS</Text>
        <FlatList
          data={displayCategories}
          keyExtractor={(item) => item.title}
          renderItem={({ item }: any) => (
            <TouchableOpacity style={styles.helpCategoryContainer} onPress={() => onCategoryHandler(item)}>
              <MaterialCommunityIcons name={item.icon} size={24} color={"#000"} />
              <Text style={styles.helpCategoryText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.categoryToggle} onPress={() => setShowAll(!showAll)}>
          <Text>{showAll ? "... Less" : "... More"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.supportContainer}>
        <Text style={styles.header}>SUPPORT TICKETS RAISED BY YOU</Text>
        <View style={styles.supportSubContainer}>
          <Image style={styles.image} source={require("../../assets/images/question.png")} />
          <Text style={styles.noQuesriesText}>No Queries Yet</Text>
          <Text style={styles.noQuesriesSubText}>Seems like all is good</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.white100,
    flex:1
  },
  categoriesContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  header: {
    fontWeight: '500'
  },
  helpCategoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  helpCategoryText: {
    marginLeft: 10
  },
  categoryToggle: {
    marginVertical: 15,
    marginLeft: 5
  },
  supportContainer: {
    padding: 15,
    flex:1,
    backgroundColor: '#fff',
  },
  supportSubContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  image: {
    height: 70,
    width: 70,
    resizeMode: 'contain'
  },
  noQuesriesText: {
    marginTop: 10
  },
  noQuesriesSubText: {
    fontWeight: '300'
  }
})