import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Splash from '../assets/svg/splash/Splash.svg'; 

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('GoogleScreen');
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Splash width={wp('50%')} height={hp('10%')} style={styles.image} />
      <Text style={styles.text}>SmartBridge Solutions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection:'column'
  },
  image: {
    // marginBottom: hp('1%'), 
  },
  text: {
    fontSize: wp('5%'),  
    color: '#000',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
