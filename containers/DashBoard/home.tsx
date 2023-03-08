import {View, Text, FlatList, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SubmitButton} from '../../components/submitButton';
import {useDispatch, useSelector} from 'react-redux';
import {addData, setData} from '../../src/app/vehiclesSlice';
import {useIsFocused} from '@react-navigation/core';

export default function Home(props) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const routeFrom = props?.route?.params?.routeFrom;
  const allVehciles = useSelector(state => state?.data?.data);
  const [cars, setCars] = useState([
    {
      make: 'Saloon',
      color: 'Red',
      brand: 'Toyota',
      modal: '1995',
      regNo: '1234',
    },
    {
      make: 'Jeep',
      color: 'Green',
      brand: 'Jeep',
      modal: '1996',
      regNo: '1235',
    },
    {
      make: 'Sedan',
      color: 'Black',
      brand: 'BMW',
      modal: '1997',
      regNo: '1236',
    },
    {
      make: 'Coupe',
      color: 'White',
      brand: 'Lexus',
      modal: '1998',
      regNo: '1237',
    },
    {
      make: 'Saloon',
      color: 'Grey',
      brand: 'Mazda',
      modal: '1999',
      regNo: '1238',
    },
  ]);

  useEffect(() => {
    if (routeFrom == 'AddVehicle') {
      if (isFocused) {
        setCars(allVehciles);
      }
    } else {
      dispatch(setData(cars));
    }
  }, [isFocused]);

  const renderCars = ({item}) => {
    return (
      <View
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          backgroundColor: 'white',
          paddingHorizontal: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}>
        <Text>{item?.make}</Text>
        <Text>{item?.color}</Text>
        <Text>{item?.brand}</Text>
        <Text>{item?.modal}</Text>
        <Text>{item?.regNo}</Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'black'}
      />
      <SubmitButton
        btnContainer={{
          backgroundColor: 'lightblue',
          paddingHorizontal: 10,
          paddingVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          alignSelf: 'flex-end',
          right: 5,
        }}
        btnTextStyle={{fontSize: 14, fontWeight: 'bold'}}
        btnText={'+ Add Vehicle'}
        onPress={() => props?.navigation?.navigate('AddVehicle')}
      />
      <View
        style={{
          width: 270,
          height: 270,
          borderWidth: 10,
          borderColor: 'lightblue',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 270 / 2,
        }}>
        <View
          style={{
            width: 180,
            height: 180,
            borderRadius: 180 / 2,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <Text style={{color: 'white', fontSize: 150}}>{cars?.length}</Text>
        </View>
      </View>

      <FlatList
        data={cars}
        renderItem={renderCars}
        style={{width: '100%', marginTop: 10}}
        contentContainerStyle={{
          paddingTop: 10,
          paddingHorizontal: 10,
          paddingBottom: 50,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
