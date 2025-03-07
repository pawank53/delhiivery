import { Animated, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import CourierCard from '../../components/CourierCard'
import { useRouter } from 'expo-router'
import { CourierProvider, useCourierContext } from '../../context/CourierContext';
import Order from '../../components/Order';
import Card from '../../components/Card';
import { RadioButton, TextInput } from 'react-native-paper';
import { Colors } from '../../constants/Colors';


export default function Home() {

    const router = useRouter();
    const { fromDomesticCourier, setFromDomesticCourier } = useCourierContext();
    const [orderType, setOrderType] = useState('TOME');
    const animatedLinePosition = useRef(new Animated.Value(0)).current;
    const [checked, setChecked] = React.useState('first');
    const [enteredID, setEnteredId] = useState('');

    const onDomesticCourier = () => {
        setFromDomesticCourier(true);
        console.info("Domestic Courier component", fromDomesticCourier)
        router.push('/sendPackage');
    }

    const onInternationalCourier = () => {
        console.info("Calling International Courier")
    }

    const orderToggleHandler = (order: 'TOME' | 'FROMME') => {
        console.info("Clicked Order type: ", order)
        setOrderType(order)

        Animated.timing(animatedLinePosition, {
            toValue: order === 'TOME' ? 0 : 1,
            duration: 300,
            useNativeDriver: false
        }).start();

    }
    const linePosition = animatedLinePosition.interpolate({
        inputRange: [0, 1],
        outputRange: ["10%", '60%']
    })
    const lineColor = animatedLinePosition.interpolate({
        inputRange: [0, 1],
        outputRange: ["#2511d6", "#2511d6"]
    })

    const estimatePriceCardHandler = () => {
        router.push('/estimatePrice')
    }
    const helpCardHandler = () => {
        router.push('/help')
    }

    return (
        <ScrollView>
            <CourierProvider >
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <Text style={styles.h2}>Send Anything Anywhere</Text>
                        <View style={styles.cardContainer}>
                            <CourierCard
                                image={require("../../assets/images/truck.png")}
                                heading={"Domestic Courier"}
                                subHeading={"All India Parcel"}
                                onPress={onDomesticCourier}
                            />
                            <CourierCard
                                image={require("../../assets/images/plane.png")}
                                heading={"International Courier"}
                                subHeading={"All India Parcel"}
                                onPress={onInternationalCourier}
                            />
                        </View>
                    </View>
                </View>
            </CourierProvider>
            <View style={styles.childContainer}>
                <Text style={styles.h2}>Track Your Orders</Text>
                <View style={styles.toggeleContainer}>
                    <TouchableOpacity style={styles.toggeleChildContainer} onPress={() => orderToggleHandler("TOME")}>
                        <Text style={{ color: orderType === 'TOME' ? 'blue' : 'black' }}>To Me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toggeleChildContainer} onPress={() => orderToggleHandler("FROMME")}>
                        <Text style={{ color: orderType === 'FROMME' ? 'blue' : 'black' }}>From Me</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={[styles.line, { left: linePosition, backgroundColor: lineColor }]} />
                <Order
                    image={require('../../assets/images/empty-order.png')}
                    text={orderType === "TOME" ? 'There are no active order right now!' : "You haven't sent any package yet!"}
                    btn={orderType === 'FROMME' ? true : false}
                />
                <View style={styles.cardContainer}>
                    <Card
                        image={require("../../assets/images/help.png")}
                        title='Need Help?'
                        subTitle='Raise tickets for issues on your orders'
                        onPress={helpCardHandler}
                    />
                    <Card
                        image={require("../../assets/images/calculator.png")}
                        title='Estimate Price'
                        subTitle='Estimate cost on orders you wish to send'
                        onPress={estimatePriceCardHandler}
                    />
                </View>
                <View style={styles.footerCard}>
                    <View style={styles.footerMainContainer}>
                        <View>
                            <Text style={styles.footerCardHeading}>Can't find your delivery?</Text>
                            <Text style={styles.footerCardDescription}>Find your delivery using your {"\n"}Tracking / Order ID</Text>
                        </View>
                        <View>
                            <Image style={styles.image} source={require("../../assets/images/gift.png")} />
                        </View>
                    </View>
                    <View style={styles.radioBtnContainer}>
                        <View style={styles.radioBtn}>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                                color={Colors.primaryBlue}
                                uncheckedColor="#aaa"
                            />
                            <Text style={styles.label}>Tracking ID </Text>
                        </View>
                        <View style={styles.radioBtn}>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                                color={Colors.primaryBlue}
                                uncheckedColor="#aaa"
                            />
                            <Text style={styles.label}>Order ID</Text>
                        </View>
                    </View>
                    <View>
                        <TextInput
                            // label="Enter ID"
                            placeholder='Enter ID'
                            activeUnderlineColor='transparent'
                            underlineColor='transparent'
                            value={enteredID}
                            onChangeText={text => setEnteredId(text)}
                            right={enteredID.length>0 ? <TextInput.Icon onPress={()=>console.log("Clicked Eye")} icon="arrow-right-circle" color="#ccc" /> : <TextInput.Icon icon="arrow-right-circle-outline" color="#ddd" />}
                            style={styles.idText}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor:'red'
    },
    subContainer: {
        backgroundColor: '#FFFFFF',
        marginVertical: 10,
        borderRadius: 25,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            height: 3,
            width: 0
        },
        shadowOpacity: 0.4,
        borderColor: '#ddd',
        shadowRadius: 3
    },
    h2: {
        padding: 10,
        fontSize: 25,
        marginLeft: 10
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    childContainer:{
        backgroundColor: '#FFFFFF',
        marginVertical: 10,
        borderRadius: 25,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            height: 3,
            width: 0
        },
        shadowOpacity: 0.4,
        borderColor: '#ddd',
        shadowRadius: 3,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    toggeleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems:'center'
    },
    toggeleChildContainer: {
        height: 40,
        // borderWidth: 1,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        // borderWidth: 5,
        width: '30%',
        height: 2
    },
    footerCard: {
        // borderWidth: 2,
        backgroundColor: Colors.white300,
        padding: 10,
        margin: 15,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {
            height: 3,
            width: 0
        },
        shadowOpacity: 0.4,
        borderColor: '#ddd',
        borderRadius:10
    },
    footerMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    footerCardHeading: {
        fontSize: 17,
        fontWeight: '500',
        marginVertical: 8
    },
    footerCardDescription: {
        fontSize: 13,
    },
    image: {
        height: 60,
        width: 60,
        marginTop: 20,
        marginRight: 10
    },
    radioBtnContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '70%'
    },
    radioBtn: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginLeft: 8,
    },
    idText: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        marginVertical: 10,
        height: 50,
        borderRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    }
})
