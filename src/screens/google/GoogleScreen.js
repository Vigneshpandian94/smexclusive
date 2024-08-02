import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Googleicon from '../../assets/svg/google/Googleicon.svg'; 
import Arrow from '../../assets/svg/google/Arrow.svg'; 
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';

const GoogleScreen = () => {
 
    const navigation = useNavigation();
  
const signInWithGoogle=()=>{
    navigation.navigate('Verification');
}
  return (
    <View style={styles.container}>
      <Googleicon width={wp('50%')} height={hp('30%')} style={styles.image} />
      <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
        <Text style={styles.googleButtonText}>Connect using Google</Text>
        <Arrow />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    marginBottom: hp('5%'),
    marginTop: hp('10%')
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF7A00',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('20%'),
    borderRadius: 10,
    marginBottom: hp('5%'),
  },
  googleButtonText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginLeft: wp('2%'), 
  },
  buttonIcon: {
    marginRight: wp('2%'), 
  },
});

export default GoogleScreen;
