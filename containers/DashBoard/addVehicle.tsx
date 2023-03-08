import {View, Text, Alert, Dimensions} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {Inputview} from '../../components/hookform';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/src/yup';
import {vehicleDetail} from '../../components/validations/validations';
import {SubmitButton} from '../../components/submitButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {addData} from '../../src/app/vehiclesSlice';

let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);

export default function AddVehicle(props) {
  const dispatch = useDispatch();
  const [openMake, setOpenMake] = useState(false);
  const [makeValue, setMakeValue] = useState(null);
  const [make, setMake] = useState([
    {label: 'Saloon', value: 'saloon'},
    {label: 'Jeep', value: 'jeep'},
    {label: 'Sedan', value: 'sedan'},
    {label: 'Coupe', value: 'coupe'},
  ]);
  const [openBrand, setOpenBrand] = useState(false);
  const [brandValue, setBrandValue] = useState(null);
  const [brand, setBrand] = useState([
    {label: 'Toyota', value: 'Toyota'},
    {label: 'Jeep', value: 'Jeep'},
    {label: 'BMW', value: 'BMW'},
    {label: 'Lexus', value: 'Lexus'},
  ]);

  const [modal, setModal] = useState('');
  const [color, setColor] = useState('');
  const [regNo, setRegNo] = useState('');

  const {
    handleSubmit,
    control,
    setValue,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(vehicleDetail),
  });

  const onSubmit = () => {
    let data = {
      make: makeValue,
      color: color,
      brand: brandValue,
      modal: modal,
      regNo: regNo,
    };

    try {
      dispatch(addData(data));
    } catch (err) {
      console.log('errrr', err);
    }

    props?.navigation?.navigate('Home', {routeFrom: 'AddVehicle'});
  };

  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
      keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
      contentContainerStyle={{alignItems: 'center', paddingTop: 20, flex: 1}}>
      <DropDownPicker
        placeholder="Select Make"
        open={openMake}
        value={makeValue}
        items={make}
        setOpen={setOpenMake}
        setValue={setMakeValue}
        setItems={setMake}
        style={{
          alignSelf: 'center',
          width: '90%',
          borderWidth: 0,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          height: 60,
          zIndex: 1000,
        }}
        dropDownContainerStyle={{
          width: '90.5%',
          borderTopWidth: 0,
          borderLeftColor: 'lightgrey',
          borderWidth: 0.5,
          borderRightColor: 'lightgrey',
          borderBottomColor: 'lightgrey',
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          alignSelf: 'center',
          zIndex: 1000,
        }}
        containerStyle={{zIndex: 10000}}
      />
      <DropDownPicker
        placeholder="Select Brand"
        open={openBrand}
        value={brandValue}
        items={brand}
        setOpen={setOpenBrand}
        setValue={setBrandValue}
        setItems={setBrand}
        style={{
          marginTop: 20,
          alignSelf: 'center',
          width: '90%',
          borderWidth: 0,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          height: 60,
        }}
        dropDownContainerStyle={{
          paddingTop: 20,
          width: '90.5%',
          borderTopWidth: 0,
          borderLeftColor: 'lightgrey',
          borderWidth: 0.5,
          borderRightColor: 'lightgrey',
          borderBottomColor: 'lightgrey',
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          alignSelf: 'center',
        }}
      />

      <Inputview
        returnKeyType={'next'}
        value={modal}
        editable={true}
        autoCap={false}
        fieldName="modal"
        control={control}
        keyboardType="numeric"
        textBoxContainer={{
          marginTop: 20,
          height: 60,
          width: '90%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          backgroundColor: 'white',
          padding: 5,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        txtbxstyl={{height: 50, flex: 1}}
        plcholder={'Enter Modal Year'}
        plcholdercolor={'lightgrey'}
        errTxt={errors?.modal && errors?.modal?.message}
        errTxtstyle={{
          top: screenHeight * 0.265,
          right: 25,
          position: 'absolute',
          color: 'red',
          fontSize: 11,
          alignSelf: 'flex-end',
        }}
        onChangeTexts={text => {
          setModal(text);
        }}
      />
      <Inputview
        returnKeyType={'next'}
        value={color}
        editable={true}
        autoCap={false}
        fieldName="color"
        control={control}
        keyboardType="email-address"
        textBoxContainer={{
          marginTop: 20,
          height: 60,
          width: '90%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          backgroundColor: 'white',
          padding: 5,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        txtbxstyl={{height: 50, flex: 1}}
        plcholder={'Enter Color'}
        plcholdercolor={'lightgrey'}
        errTxt={errors?.color && errors?.color?.message}
        errTxtstyle={{
          top: screenHeight * 0.36,
          right: 25,
          position: 'absolute',
          color: 'red',
          fontSize: 11,
          alignSelf: 'flex-end',
        }}
        onChangeTexts={text => {
          setColor(text);
        }}
      />
      <Inputview
        returnKeyType={'done'}
        value={regNo}
        editable={true}
        autoCap={false}
        fieldName="regNo"
        control={control}
        keyboardType="numeric"
        textBoxContainer={{
          marginTop: 20,
          height: 60,
          width: '90%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          backgroundColor: 'white',
          padding: 5,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        txtbxstyl={{height: 50, flex: 1}}
        plcholder={'Enter regNo.'}
        plcholdercolor={'lightgrey'}
        errTxt={errors?.regNo && errors?.regNo?.message}
        errTxtstyle={{
          top: screenHeight * 0.455,
          right: 25,
          position: 'absolute',
          color: 'red',
          fontSize: 11,
          alignSelf: 'flex-end',
        }}
        onChangeTexts={text => {
          setRegNo(text);
        }}
      />

      <SubmitButton
        btnContainer={{
          backgroundColor: 'lightblue',
          width: '50%',
          height: 50,
          marginTop: 30,
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
        }}
        btnTextStyle={{fontSize: 14, fontWeight: 'bold'}}
        btnText={'Add Vehicle'}
        onPress={() => {
          if (makeValue != null && brandValue != null) handleSubmit(onSubmit)();
          else if (makeValue == null) {
            Alert.alert('please Select Make!');
          } else {
            Alert.alert('please Select Brand!');
          }
        }}
      />
    </KeyboardAwareScrollView>
  );
}
