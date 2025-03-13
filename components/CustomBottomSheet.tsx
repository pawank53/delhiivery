import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Line from './Line';

interface CustomBottomSheetProps{
    isVisible: boolean;
    onClose:()=> void;
    addressType:string
}

export default function CustomBottomSheet({ isVisible, onClose, addressType }: CustomBottomSheetProps) {
    const snapPoints = ['30%'];

    return (
        <BottomSheet
            snapPoints={snapPoints}
            enablePanDownToClose
            onClose={onClose}
            index={isVisible ? 0 : -1}
            backgroundStyle={styles.sheetStyle}
        >
            <BottomSheetView>
                <View style={styles.sheetHeader}>
                    <Text style={styles.sheetHeaderText}>Select {addressType} Address</Text>
                    <TouchableOpacity onPress={onClose}>
                        <AntDesign name='close' size={24} color={"#000"} />
                    </TouchableOpacity>
                </View>
                <Line/>
                <TouchableOpacity style={styles.addNewLocationContainer}>
                    <AntDesign name='enviromento' size={22} color={"#41ADFF"} />
                    <Text style={styles.sheetNewAddressText}>Add New Address</Text>
                </TouchableOpacity>
            </BottomSheetView>
        </BottomSheet>
    );
}

const styles = StyleSheet.create({
    sheetStyle: {
        borderRadius: 20,
    },
    sheetHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    sheetHeaderText: {
        fontWeight: '500',
        fontSize: 18
    },
    addNewLocationContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    sheetNewAddressText: {
        fontWeight: '400',
        fontSize: 16,
        color: '#41ADFF',
        marginLeft: 10
    },
});
