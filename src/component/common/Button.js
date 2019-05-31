import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.whenPressed} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#7177CC',
    paddingBottom: 5,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonStyle: {
    flex: 1,
    margin: 10,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#7177CC',
    borderRadius: 5,
    borderWidth: 1,
    elevation: 3,
    justifyContent: 'center'
  }
}

export default Button;