import { StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useGlobalSearchParams, useNavigation, useRouter } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { useCourierContext } from '../../context/CourierContext';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import LocationPicker from '../../components/LocationPicker';
import CustomBottomSheet from '../../components/CustomBottomSheet';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useBackArrowContext } from "../../context/BackArrowContext"


export default function SendPackage() {
    const router = useRouter();
    const { fromDomesticCourier, setFromDomesticCourier } = useCourierContext();
    const navigation = useNavigation();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = ['30%'];
    const [isOpen, setIsOpen] = useState(false)
    const [addressType, setAddressType] = useState(''); 
    const {backArrowRequired, setIsBackArrowRequired}=useBackArrowContext()



    const backHandler = () => {
        setFromDomesticCourier(false)
        setIsBackArrowRequired(true)
        console.log("On click back arrow,fromDomesticCourier: ", fromDomesticCourier);
        bottomSheetRef.current?.close()
        setIsOpen(false);
        setAddressType('');
        router.push('/(drawer)/');
    }

    useEffect(() => {
        console.info("Checking fromDomesticCourier:", fromDomesticCourier, backArrowRequired)
        if (fromDomesticCourier | backArrowRequired) {
            navigation.setOptions({
                headerLeft: () => (
                    <AntDesign style={styles.arrow} name='arrowleft' size={24} color={"#000"}
                        onPress={backHandler} />
                )
            })
        } else {
            navigation.setOptions({
                headerLeft: null
            })
        }
    }, [fromDomesticCourier])

    const onPickupAddress = () => {
        console.info("onPickupAddress")
        setAddressType("Pickup")
        setIsOpen(true);
        bottomSheetRef.current?.snapToIndex(0);
    }
    const oncloseSheet = () => {
        setIsOpen(false)
        bottomSheetRef.current?.close()
    }
    const onDeliveryAddress = () => {
        console.info("onDeliveryAddress")
        setAddressType("Delivery")
        setIsOpen(true);
        bottomSheetRef.current?.snapToIndex(0);
    }

    // const onAddressClick = (type:string) => {
    //     setAddressType(type);
    //     setIsOpen(true);
    // };

    return (
        <View style={styles.container}>
            {isOpen && (
                <TouchableWithoutFeedback>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
            )}
            <ProgressSteps
                activeLabelColor="#000"
                activeStepIconBorderColor='#000'
                completedProgressBarColor='#ccc'
            // activeStep={0}
            >
                <ProgressStep label="ADDRESS" nextBtnDisabled={false} >
                    <View style={styles.addressContainer} >
                        <Text style={styles.pickup}>Pickup Address</Text>
                        <TouchableOpacity style={styles.locationPickerBox} onPress={onPickupAddress}>
                            <LocationPicker icon='gift-outline' text='Pickup' />
                        </TouchableOpacity>
                        <Text>Delivery Address</Text>
                        <TouchableOpacity style={styles.locationPickerBox} onPress={onDeliveryAddress}>
                            <LocationPicker icon='location-outline' text='Delivery' />
                        </TouchableOpacity>
                    </View>
                </ProgressStep>
                <ProgressStep label="PACKAGE">
                    {/* <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 2!</Text>
                    </View> */}
                </ProgressStep>
                <ProgressStep label="SCHEDULE">
                    {/* <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View> */}
                </ProgressStep>
                <ProgressStep label="SUMMARY">

                </ProgressStep>
            </ProgressSteps>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                enableDynamicSizing={false}
                onClose={() => setIsOpen(false)}
                enablePanDownToClose
                index={-1}
                backgroundStyle={styles.sheetStyle}
            >
                <BottomSheetView>
                    <View style={styles.sheetHeader}>
                        <View>
                            <Text style={styles.sheetHeaderText}>Select {addressType} Address</Text>
                        </View>
                        <TouchableOpacity onPress={oncloseSheet}>
                            <AntDesign name='close' size={24} color={"#000"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line} />
                    <TouchableOpacity style={styles.addNewLocationContainer}>
                        <TouchableOpacity onPress={oncloseSheet}>
                            <AntDesign name='enviromento' size={22} color={"#41ADFF"} />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.sheetNewAddressText}>Add New Address</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.line, {marginHorizontal:20}]} />

                </BottomSheetView>
            </BottomSheet>
        </View>

    )
}

const styles = StyleSheet.create({
    arrow: {
        marginLeft: 10
    },
    container: {
        flex: 1
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '30%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 400,
    },
    progressSteps: {
        // borderWidth:8
    },
    addressContainer: {
        marginHorizontal: 20
    },
    pickup: {

    },
    locationPickerBox: {
        height: 50,
        borderWidth: 1,
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 10
    },
    sheetStyle: {
        // backgroundColor:'red',
        borderRadius: 20,
    },
    sheetHeader: {
        justifyContent: 'space-between',
        // borderWidth:2,
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    sheetHeaderText: {
        fontWeight: '500',
        fontSize: 18
    },
    line: {
        borderWidth: 0.5,
        marginVertical: 10,
        opacity: 0.3
    },
    addNewLocationContainer:{
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent:'flex-start'
    },
    sheetNewAddressText: {
        fontWeight: '400',
        fontSize: 16,
        color:'#41ADFF',
        marginLeft:10
    },
})