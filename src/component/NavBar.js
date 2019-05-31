import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

const NavBar = () => {
  return (
    <View style={styles.barStyle}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Image
        style={styles.iconStyle}
        source={require('../../assets/home.png')}></Image>
        <Text style={styles.textStyle}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Image
        style={styles.iconStyle}
        source={require('../../assets/take.png')}></Image>
        <Text style={styles.textStyle}>
          Take
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Image 
        style={styles.iconStyle}
        source={require('../../assets/give.png')}></Image>
        <Text style={styles.textStyle}>
          Give
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Image
        style={styles.iconStyle}
        source={require('../../assets/profile.png')}></Image>
        <Text style={styles.textStyle}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  barStyle: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#f0f0f0',
    elevation: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    width: 90,
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconStyle: {
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  textStyle: {
    color: '#808080'
  }
}

export default NavBar;