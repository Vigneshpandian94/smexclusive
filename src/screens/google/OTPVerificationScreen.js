import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Arrow from '../../assets/svg/google/Arrow.svg'; 
import Splash from '../../assets/svg/splash/Splash.svg';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';

const OTPVerificationScreen = () => {
    const navigation = useNavigation();
  const [timer, setTimer] = useState(30);
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (text.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const validateOtp = () => {
    if (otp.join('') === '12345') {
      showMessage({
        message: "Success",
        description: "OTP is correct",
        type: "success",
      });
      setTimeout(()=>{
     navigation.navigate("SelectOrganizationScreen")
      },1000)
    } else {
      showMessage({
        message: "Error",
        description: "Invalid OTP",
        type: "danger",
      });
    }
  };

  const renderOtpInput = ({ item, index }) => (
    <TextInput
      ref={(el) => (inputRefs.current[index] = el)}
      key={index}
      style={styles.otpInput}
      maxLength={1}
      keyboardType="numeric"
      value={item}
      onChangeText={(text) => handleOtpChange(text, index)}
    />
  );

  return (
    <View style={styles.container}>
      <Splash width={wp('50%')} height={hp('10%')} style={styles.topImage} />
      <Text style={styles.title}>OTP VERIFICATION</Text>
      <Text style={styles.description}>
        We have sent you a one-time password to your mobile number.
      </Text>
      <View style={styles.otpContainer}>
        <FlatList
          data={otp}
          renderItem={renderOtpInput}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text style={styles.timer}>{`00:${timer < 10 ? `0${timer}` : timer}`}</Text>
      <TouchableOpacity style={styles.continueButton} onPress={validateOtp}>
        <Text style={styles.continueText}>Continue</Text>
        <Arrow width={wp('5%')} height={hp('2.5%')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <View style={styles.resendContainer}>
        <Text style={styles.notReceivedText}>Not received yet?</Text>
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
      <FlashMessage position="top" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: wp('5%'),
  },
  topImageContainer: {
    marginBottom: hp('5%'),
    marginTop: hp('10%'),
    alignItems: 'center',
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
    color: 'black',
    marginTop: hp('5%'),
  },
  description: {
    fontSize: wp('4%'),
    color: '#888',
    textAlign: 'center',
    marginBottom: hp('4%'),
    paddingHorizontal: wp('6%'),
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%'),
    marginBottom: hp('3%'),
  },
  otpInput: {
    width: wp('14%'),
    height: hp('8%'),
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: wp('5%'),
    marginHorizontal: wp('1%'),
    color: 'black',
  },
  timer: {
    fontSize: wp('4%'),
    color: '#ff0000',
    marginBottom: hp('4%'),
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF7A00',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('30%'),
    borderRadius: 10,
    marginBottom: hp('5%'),
  },
  continueText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  arrowIcon: {
    marginLeft: wp('2%'),
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notReceivedText: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: '#000',
  },
  resendText: {
    fontSize: wp('4%'),
    color: '#888',
    marginLeft: wp('2%'),
  },
});

export default OTPVerificationScreen;
