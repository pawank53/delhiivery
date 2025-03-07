import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Description from '../../components/Description'
import { RadioButton, TextInput } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function Settings() {
  const [checked, setChecked] = React.useState('home');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.txt}>Name</Text>
      <TextInput
        mode='outlined'
        activeUnderlineColor='transparent'
        underlineColor='transparent'
        style={styles.boxStyle}
        placeholder='Enter name' />
      <Text style={styles.txt}>Mobile Number</Text>
      <TextInput
        mode='outlined'
        activeUnderlineColor='transparent'
        underlineColor='transparent'
        style={styles.boxStyle}
        inputMode='numeric'
        placeholder='Enter mobile number'
        right={<TextInput.Icon icon="contacts-outline" />} />
      <Text style={styles.lowerTxt}>We'll call this number to coordinate delivery</Text>
      <Text style={styles.txt}>Flat, Housing no., Building, Apartment</Text>
      <TextInput
        mode='outlined'
        activeUnderlineColor='transparent'
        underlineColor='transparent'
        style={styles.boxStyle}
        placeholder='Enter flat, Housing no., Building, Apartment' />
      <Text style={styles.txt}>Area, street, sector</Text>
      <TextInput
        mode='outlined'
        activeUnderlineColor='transparent'
        underlineColor='transparent'
        style={styles.boxStyle}
        placeholder='Enter Area, street, sector' />
      <Text style={styles.txt}>Pincode</Text>
      <TextInput
        mode='outlined'
        inputMode='numeric'
        activeUnderlineColor='transparent'
        underlineColor='transparent'
        style={styles.boxStyle}
        placeholder='Enter pincode' />
      <View style={styles.cityStateContainer}>
        <View style={styles.cityContainer}>
          <Text style={styles.txt}>City</Text>
          <TextInput
            mode='outlined'
            activeUnderlineColor='transparent'
            underlineColor='transparent'
            style={[styles.boxStyle, { backgroundColor: '#aaa', }]}
            placeholder='City' />
        </View>
        <View style={styles.stateContainer}>
          <Text style={styles.txt}>State</Text>
          <TextInput
            mode='outlined'
            activeUnderlineColor='transparent'
            underlineColor='transparent'
            style={[styles.boxStyle, { backgroundColor: '#aaa', }]}
            placeholder='State' />
        </View>
      </View>
      {/* <Text style={styles.txt}>Save as</Text>
      <View style={styles.radioBtnContainer}>
        <View style={styles.radioBtn}>
          <RadioButton
            value="home"
            status={checked === 'home' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('home')}
            color={Colors.primaryBlue}
            uncheckedColor="#aaa"
          />
          <Text style={styles.label}>Home</Text>
        </View>
        <View style={styles.radioBtn}>
          <RadioButton
            value="work"
            status={checked === 'work' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('work')}
            color={Colors.primaryBlue}
            uncheckedColor="#aaa"
          />
          <Text style={styles.label}>Work</Text>
        </View>
      </View> */}
      <View>
        <Text style={styles.txt}>Save as</Text>
        <View style={styles.radioBtnContainer}>

          <TouchableOpacity
            style={styles.radioBtn}
            onPress={() => setChecked('home')}
          >
            <MaterialIcons
              name="home"
              size={24}
              color={checked === 'home' ? Colors.primaryBlue : "#aaa"}
              style={styles.icon}
            />
            <Text
              style={[
                styles.label,
                { color: checked === 'home' ? Colors.primaryBlue : '#333' }
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioBtn}
            onPress={() => setChecked('work')}
          >
            <MaterialIcons
              name="work"
              size={24}
              color={checked === 'work' ? Colors.primaryBlue : "#aaa"}
              style={styles.icon}
            />
            <Text
              style={[
                styles.label,
                { color: checked === 'work' ? Colors.primaryBlue : '#333' }
              ]}
            >
              Work
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  txt: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  lowerTxt: {
    fontWeight: '300',
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  cityStateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cityContainer: {
    width: '45%',
  },
  stateContainer: {
    width: '45%'
  },
  boxStyle: {
    borderRadius: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  radioBtnContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  icon: {
    marginHorizontal: 5,
  },

});