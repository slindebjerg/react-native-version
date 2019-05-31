// Import libraries for making a component
import React from 'react';
import { StatusBar, Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <StatusBar hidden/>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}


// Styling
const styles = {
  viewStyle: {
    backgroundColor: "#f6f6f6",
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#f2f2f2',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 8,
    position: 'relative',
    alignSelf: 'stretch'
  },
  textStyle: {
    fontSize: 36,
    fontWeight: '700'
  }
}

// Make the component available to other parts of the app
export default Header;