import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputField = ({label, placeholder, secureTextEntry, onChangeText, value, autoCapitalize}) => {
  const { containerStyle, textStyle, inputStyle } = styles;
  
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        onChangeText={onChangeText}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        autoCapitalize={autoCapitalize}
        />
    </View>
  )
}

const styles = {
  inputStyle: {
    flex: 2,
    color: "#000",
    fontSize:18,
    lineHeight: 23,
    fontWeight: '300'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  }
}

export default InputField;