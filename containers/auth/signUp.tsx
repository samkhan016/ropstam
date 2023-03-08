import {View, Text, Dimensions, ImageBackground, StatusBar} from 'react-native';
import React, {useRef, useState} from 'react';
import {Inputview} from '../../components/hookform';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/src/yup';
import {SignIn, Signup} from '../../components/validations/validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SubmitButton} from '../../components/submitButton';

let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);

export default function SignUp(props) {
  const [fistName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const input_2 = useRef(null);
  const input_3 = useRef(null);
  const input_4 = useRef(null);
  const input_5 = useRef(null);

  const {
    handleSubmit,
    control,
    setValue,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(Signup),
  });

  const onSubmit = () => {
    props?.navigation?.reset({index: 0, routes: [{name: 'Home'}]}); // reset and redirct to home page so the user cannot go back
  };
  return (
    <ImageBackground
      source={require('../../assets/images/background/backgroundImage.png')}
      resizeMode="cover"
      style={{height: screenHeight, width: screenWidth}}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'black'}
      />
      <KeyboardAwareScrollView
        style={{
          flex: 1,
        }}
        extraScrollHeight={50}
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 110,
          flex: 1,
        }}
        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}>
        <Inputview
          onSubmitEditing={() => input_2?.current?.focus()}
          returnKeyType={'next'}
          value={fistName}
          editable={true}
          autoCap={false}
          fieldName="first_name"
          control={control}
          keyboardType="email-address"
          textBoxContainer={{
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
          }}
          txtbxstyl={{height: 50, flex: 1}}
          plcholder={'Enter First Name'}
          plcholdercolor={'lightgrey'}
          errTxt={errors?.first_name && errors?.first_name?.message}
          errTxtstyle={{
            top: screenHeight * 0.185,
            right: 25,
            position: 'absolute',
            color: 'red',
            fontSize: 11,
            alignSelf: 'flex-end',
          }}
          onChangeTexts={text => {
            setFirstName(text);
          }}
        />
        <Inputview
          reference={input_2}
          onSubmitEditing={() => input_3?.current?.focus()}
          returnKeyType={'next'}
          value={lastName}
          editable={true}
          autoCap={false}
          fieldName="last_name"
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
          }}
          txtbxstyl={{height: 50, flex: 1}}
          plcholder={'Enter Last Name'}
          plcholdercolor={'lightgrey'}
          errTxt={errors?.last_name && errors?.last_name?.message}
          errTxtstyle={{
            top: screenHeight * 0.28,
            right: 25,
            position: 'absolute',
            color: 'red',
            fontSize: 11,
            alignSelf: 'flex-end',
          }}
          onChangeTexts={text => {
            setLastName(text);
          }}
        />
        <Inputview
          reference={input_3}
          onSubmitEditing={() => input_4?.current?.focus()}
          returnKeyType={'next'}
          value={email}
          editable={true}
          autoCap={false}
          fieldName="email_address"
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
          }}
          txtbxstyl={{height: 50, flex: 1}}
          plcholder={'Enter Email Address'}
          plcholdercolor={'lightgrey'}
          errTxt={errors?.email_address && errors?.email_address?.message}
          errTxtstyle={{
            top: screenHeight * 0.375,
            right: 25,
            position: 'absolute',
            color: 'red',
            fontSize: 11,
            alignSelf: 'flex-end',
          }}
          onChangeTexts={text => {
            setEmail(text);
          }}
        />
        <Inputview
          reference={input_4}
          onSubmitEditing={() => input_5?.current?.focus()}
          returnKeyType={'next'}
          value={password}
          editable={true}
          autoCap={false}
          fieldName="new_password"
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
          plcholder={'Enter Password'}
          plcholdercolor={'lightgrey'}
          errTxt={errors?.new_password && errors?.new_password?.message}
          errTxtstyle={{
            top: screenHeight * 0.47,
            right: 25,
            position: 'absolute',
            color: 'red',
            fontSize: 11,
            alignSelf: 'flex-end',
          }}
          onChangeTexts={text => {
            setPassword(text);
          }}
          encryption={true}
          encryptionIconStyle={{width: 20, height: 20}}
        />
        <Inputview
          reference={input_5}
          returnKeyType={'done'}
          value={confirmPassword}
          editable={true}
          autoCap={false}
          fieldName="confirm_password"
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
          plcholder={'Enter Password'}
          plcholdercolor={'lightgrey'}
          errTxt={errors?.confirm_password && errors?.confirm_password?.message}
          errTxtstyle={{
            top: screenHeight * 0.565,
            right: 25,
            position: 'absolute',
            color: 'red',
            fontSize: 11,
            alignSelf: 'flex-end',
          }}
          onChangeTexts={text => {
            setConfirmPassword(text);
          }}
          encryption={true}
          encryptionIconStyle={{width: 20, height: 20}}
        />

        <SubmitButton
          btnContainer={{
            backgroundColor: 'lightblue',
            width: '50%',
            height: 50,
            marginTop: 20,
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
          btnText={'Sign Up'}
          onPress={handleSubmit(onSubmit)}
        />

        <Text style={{marginTop: 20}}>
          Already have an account?
          <Text
            style={{textDecorationLine: 'underline', color: 'blue'}}
            onPress={() => props?.navigation?.goBack()}>
            {' '}
            Sign In
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
