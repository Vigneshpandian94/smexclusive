import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Vector from '../../assets/svg/google/Vector.svg';
import Splash from '../../assets/svg/splash/Splash.svg';
import { useNavigation } from '@react-navigation/native';

const organizations = [
  'SME Exclusive',
  'Kenshilabs',
  'Organization 2',
  'Organization 3',
  'Organization 4',
  'Organization 5'
];

const SelectOrganizationScreen = () => {
  const navigation = useNavigation();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState('');

  const handleSelect = (organization) => {
    setSelectedOrganization(organization);
    setDropdownVisible(false);
    navigation.navigate('NextScreen', { organization }); // Replace 'NextScreen' with your target screen
  };

  return (
    <View style={styles.container}>
      <Splash width={wp('50%')} height={hp('10%')} style={styles.topImage} />
      <Text style={styles.title}>Select Organization</Text>
      <Text style={styles.description}>Select the Organization name provided in list below.</Text>

      <TouchableOpacity style={styles.dropdown} onPress={() => setDropdownVisible(true)}>
        <Text style={styles.dropdownText}>
          {selectedOrganization || 'Select Organization'}
        </Text>
        <Vector width={wp('5%')} height={hp('5%')} />
      </TouchableOpacity>

      <Modal
        isVisible={dropdownVisible}
        onBackdropPress={() => setDropdownVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <FlatList
            data={organizations}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.modalItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
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
  topImage: {
    marginBottom: hp('2%'),
    marginTop: hp('5%'),
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
    color: 'black',
  },
  description: {
    fontSize: wp('4%'),
    color: '#888',
    textAlign: 'center',
    marginBottom: hp('4%'),
    paddingHorizontal: wp('6%'),
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: wp('4%'),
    borderRadius: 10,
    width: wp('80%'),
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: wp('4%'),
    color: 'black',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: wp('4%'),
  },
  modalItem: {
    padding: wp('4%'),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalItemText: {
    fontSize: wp('4%'),
    color: '#333',
  },
});

export default SelectOrganizationScreen;
