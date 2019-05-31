import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const MenuButton = () => {
  return(
    <TouchableOpacity onPress={() => console.log('Menu button pressed.')}>
      <View style={styles.button}>
        <View style={styles.top}></View>
        <View style={styles.middle}></View>
        <View style={styles.bottom}></View>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    marginLeft: 10,
    marginRight: 10,
    // borderWidthRight: 1,
    // borderColor: '#808080'
  },
  top: {
    height: 4,
    width: 30,
    backgroundColor: '#808080',
    borderRadius: 2,
  },
  middle: {
    height: 4,
    width: 30,
    backgroundColor: '#808080',
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 2,
  },
  bottom: {
    height: 4,
    width: 30,
    borderRadius: 2,
    backgroundColor: '#808080'
  }
}

export default MenuButton;