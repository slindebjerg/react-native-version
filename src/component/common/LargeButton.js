import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity onPress={props.whenPressed} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#7177CC',
    paddingBottom: 5,
    paddingTop: 5,
    fontSize: 36,
    fontWeight: '700',
  },
  buttonStyle: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderColor: '#7177CC',
    borderRadius: 10,
    borderWidth: 1,
    elevation: 3,
    justifyContent: 'center'
  },
  containerStyle: {
    alignSelf: 'stretch',
    height: 90
  }
}

export default Button;