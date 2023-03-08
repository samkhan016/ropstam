import {View, Text, ImageBackground, Dimensions, StatusBar} from 'react-native';
import React, {useRef, useState} from 'react';
import {Inputview} from '../../components/hookform';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/src/yup';
import {SignIn} from '../../components/validations/validations';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SubmitButton} from '../../components/submitButton';

let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const input_2 = useRef();

  const {
    handleSubmit,
    control,
    setValue,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(SignIn),
  });

  const onSubmit = () => {
    props?.navigation?.reset({index: 0, routes: [{name: 'Home'}]});
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
          // backgroundColor: 'white',
        }}
        extraScrollHeight={50}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}>
        <Inputview
          onSubmitEditing={() => input_2?.current?.focus()}
          returnKeyType={'next'}
          value={email}
          editable={true}
          autoCap={false}
          fieldName="email_address"
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
          plcholder={'Enter Email Address'}
          plcholdercolor={'lightgrey'}
          errTxt={errors?.email_address && errors?.email_address?.message}
          errTxtstyle={{
            top: screenHeight * 0.405,
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
          reference={input_2}
          returnKeyType={'done'}
          value={password}
          editable={true}
          autoCap={false}
          fieldName="password"
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
          errTxt={errors?.password && errors?.password?.message}
          errTxtstyle={{
            top: screenHeight * 0.5,
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
          btnText={'Login'}
          onPress={handleSubmit(onSubmit)}
        />

        <Text style={{marginTop: 20}}>
          Don't have an account?
          <Text
            style={{textDecorationLine: 'underline', color: 'blue'}}
            onPress={() => props?.navigation?.navigate('SignUp')}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
