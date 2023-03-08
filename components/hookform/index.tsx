import React, {useState, useEffect, useRef} from 'react';
import {Controller} from 'react-hook-form';
import {
  TextInput,
  View,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

interface Props {
  hasName?: boolean | null;
  textBoxContainer?: any | null;
  isLeftImage?: boolean | null;
  leftImageSource?: any | null;
  leftImageStyle?: any | null;
  txtbxstyl?: any | null;
  plcholder?: string | null;
  plcholdercolor?: any | null;
  allowMultiLine?: boolean | null;
  encryption?: boolean | null;
  encryptionIconContainer?: any | null;
  encryptionIconSource?: any | null;
  encryptionIconStyle?: any | null;
  rightIcon?: boolean | null;
  rightIconSource?: any | null;
  rightIconStyle?: any | null;
  control?: any | null;
  errTxt?: any | null;
  errTxtstyle?: any | null;
  onChangeTexts?: any | null;
  fieldName?: any | null;
  keyboardType?: any | null;
  autoCap?: boolean | 'none';
  value?: string | null;
  editable?: boolean | null;
  selectionColor?: string | null;
  onSubmitEditing?: any | null;
  returnKeyType?: any | null;
  reference?: any | null;
  iconPress?: any | null;
  maxLength?: any | null;
}

export const Inputview = (props: Props) => {
  const {
    textBoxContainer,
    isLeftImage,
    leftImageSource,
    leftImageStyle,
    txtbxstyl,
    plcholder,
    plcholdercolor,
    allowMultiLine,
    encryption,
    encryptionIconContainer,
    encryptionIconStyle,
    rightIcon,
    rightIconSource,
    rightIconStyle,
    control,
    errTxt,
    onChangeTexts,
    fieldName,
    keyboardType,
    autoCap,
    value,
    editable,
    selectionColor,
    onSubmitEditing,
    returnKeyType,
    reference,
    errTxtstyle,
    iconPress,
    maxLength,
  } = props;
  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <View style={textBoxContainer}>
        {isLeftImage ? (
          <Image
            source={leftImageSource}
            style={leftImageStyle}
            resizeMode="contain"
          />
        ) : null}

        <Controller
          control={control}
          name={fieldName}
          render={({field: {onChange}}) => (
            <TextInput
              ref={reference}
              editable={editable}
              style={txtbxstyl}
              placeholder={plcholder}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKeyType}
              placeholderTextColor={plcholdercolor}
              multiline={allowMultiLine}
              onChangeText={(e: any) => {
                onChange(e), onChangeTexts && onChangeTexts(e);
              }}
              secureTextEntry={encryption ? showPassword : !showPassword}
              value={value}
              keyboardType={keyboardType}
              selectionColor={selectionColor}
              autoCapitalize={!autoCap ? 'none' : 'characters'}
              maxLength={maxLength}
            />
          )}
        />

        {encryption && (
          <TouchableOpacity
            style={encryptionIconContainer}
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            <Image
              source={
                showPassword
                  ? require('../../assets/images/icons/hide.png')
                  : require('../../assets/images/icons/show.png')
              }
              style={encryptionIconStyle}
              resizeMode="cover"></Image>
          </TouchableOpacity>
        )}
      </View>
      {rightIcon ? (
        iconPress ? (
          <TouchableOpacity
            style={rightIconStyle}
            activeOpacity={0.8}
            onPress={iconPress}>
            <Image
              source={rightIconSource}
              style={{width: 22, height: 22}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <Image
            source={rightIconSource}
            style={rightIconStyle}
            resizeMode="contain"
          />
        )
      ) : null}

      <Text allowFontScaling={false} style={errTxtstyle}>
        {errTxt}
      </Text>
    </>
  );
};
