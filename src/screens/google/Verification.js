import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Googleicon from '../../assets/svg/google/Googleicon.svg'; 
import Arrow from '../../assets/svg/google/Arrow.svg'; 
import Splash from '../../assets/svg/splash/Splash.svg';
import { useNavigation } from '@react-navigation/native';
import FlashMessage, { showMessage } from 'react-native-flash-message';

const Verification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const otpscreen = () => {
    if (phoneNumber === '8270499582') {
      showMessage({
        message: "Success",
        description: "OTP sending Successfully",
        type: "success",
      });
      setTimeout(()=>{
        navigation.navigate('OTPVerificationScreen');
      },1000)
      
    } else {
      showMessage({
        message: "Error!",
        description: "Invalid phone number",
        type: "danger",
      });
    }
  }

  return (
    <View style={styles.container}>
      <Splash width={wp('50%')} height={hp('10%')} style={styles.topImage} />
      
      <Text style={styles.title}>PHONE NUMBER</Text>
      <Text style={styles.subtitle}>Input the right details to set up your account the right way.</Text>
      
      <View style={styles.phoneNumberContainer}>
        <Text style={styles.phoneCode}>+91</Text>
        <TextInput
          style={styles.phoneInput}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="numeric"
          maxLength={10}
          placeholder="Type your phone number"
        />
      </View>
      <Text style={styles.numbertitle}>Type your phone number</Text>
      <TouchableOpacity style={styles.button} onPress={otpscreen}>
        <Text style={styles.buttonText}>Continue</Text>
        <Arrow width={wp('5%')} height={hp('2%')} style={styles.buttonIcon} />
      </TouchableOpacity>
      <FlashMessage position="top" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('5%'),
  },
  topImage: {
    marginBottom: hp('2%'),
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    marginTop: hp('5%'),
    color: 'black'
  },
  subtitle: {
    fontSize: wp('4%'),
    color: '#888',
    textAlign: 'center',
    marginBottom: hp('3%'),
    paddingHorizontal: wp('8%'),
  },
  numbertitle: {
    fontSize: wp('4%'),
    color: '#888',
    textAlign: 'center',
    marginBottom: hp('3%'),
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: wp('2%'),
    width: '100%',
    marginBottom: hp('4%'),
  },
  phoneCode: {
    fontSize: wp('4%'),
    color: '#333',
    marginRight: wp('2%'),
  },
  phoneInput: {
    flex: 1,
    fontSize: wp('4%'),
    color: 'black',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF7A00',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('33%'),
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginRight: wp('2%'),
  },
  buttonIcon: {
    marginLeft: wp('2%'),
  },
});

export default Verification;
