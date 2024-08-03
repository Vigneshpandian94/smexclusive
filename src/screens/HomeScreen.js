import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Splash from '../assets/svg/splash/Splash.svg';
import Search from '../assets/svg/Home/Search.svg';
import Funnel from '../assets/svg/Home/Funnel.svg';
import Mic from '../assets/svg/Home/Mic.svg';

const HomeScreen = ({ route }) => {

  const renderItem = (item, index) => (
    <View key={index} style={styles.itemContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={styles.organizationText}>{item.organizationName}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
        </View>
     
      <View style={styles.row}>
        <Text style={styles.weightText}>Gross Weight: {item.grossWeight}</Text>
        <Text style={styles.vehicleText}>Vehicle No: {item.vehicleNo}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.weightText}>Tare Weight: {item.tareWeight}</Text>
        <Text style={styles.vehicleTypeText}>Vehicle Type: {item.vehicleType}</Text>
      </View>
      <Text style={styles.netWeightText}>Net Weight: {item.netWeight}</Text>
    </View>
  );

  const data = [
    {
      organizationName: 'DADA BHAI WEIGH BRIDGE',
      date: '07 Nov 24 | 15:30',
      grossWeight: '22334',
      vehicleNo: 'WB41D8842',
      tareWeight: '7360 Kg',
      vehicleType: '6 Wheeler',
      netWeight: '15240 Kg',
    },
    {
      organizationName: 'DADA BHAI WEIGH BRIDGE',
      date: '07 Nov 24 | 15:30',
      grossWeight: '22334',
      vehicleNo: 'WB41D8842',
      tareWeight: '7360 Kg',
      vehicleType: '6 Wheeler',
      netWeight: '15240 Kg',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Splash width={wp('50%')} height={hp('10%')} style={styles.topImage} />
      <View style={styles.iconContainer}>
        <View style={styles.searchContainer}>
          <Search width={wp('10%')} height={hp('5%')} />
          <View style={styles.micContainer}>
            <Mic width={wp('10%')} height={hp('5%')} />
          </View>
        </View>
        <View style={{backgroundColor:'#f0f0f0',marginLeft:"2%",borderRadius:10}}>
        <Funnel width={wp('15%')} height={hp('5%')}  />
        </View>
       
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.proceedText}>Proceed</Text>
        <Text style={styles.inProgressText}>In-Progress</Text>
      </View>
      {data.map((item, index) => renderItem(item, index))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: wp('5%'),
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  topImage: {
    marginBottom: hp('2%'),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
    width: '100%',
    paddingHorizontal: wp('2%'),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: wp('1%'),
    width: wp('72%'), 
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  micContainer: {
    borderLeftWidth: 1,
    borderColor: '#ddd',
    paddingLeft: hp('1%'),
  },
  separator: {
    fontSize: wp('5%'),
    color: '#000',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    width: '100%', 
    marginBottom: hp('2%'),
    marginTop:hp('5%')
  },
  proceedText: {
    color: 'orange',
    borderBottomColor: 'orange',
    borderBottomWidth: 2, 
    paddingBottom: hp('0.5%'),
    fontWeight:'bold',
    fontSize:20,
    marginLeft:hp('2%')
  },
  inProgressText: {
    color: 'grey',
    fontWeight:'bold',
    fontSize:20,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: hp('2%'),
    width: '100%',
    marginLeft: hp('7%'),
    marginRight: hp('5%')
  },
  organizationText: {
    color: 'orange',
    marginBottom: hp('1%'),
  },
  dateText: {
    color: '#000',
    marginBottom: hp('1%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
  },
  weightText: {
    color: '#000',
  },
  vehicleText: {
    color: '#000',
  },
  vehicleTypeText: {
    color: '#000',
  },
  netWeightText: {
    color: '#000',
  },
});

export default HomeScreen;
