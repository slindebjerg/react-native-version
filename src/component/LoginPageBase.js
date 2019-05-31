import React from 'react';
import { Image, StyleSheet, ImageBackground } from 'react-native';

const LoginPageBase = (props) => {
  return (
    <ImageBackground 
    source={require('../../assets/splash.png')}
    style={styles.container}>
      <Image
      source={require('../../assets/icon.png')}
      style={styles.imageStyle}/>
      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width:'100%',
    height:'100%'
  },
  imageStyle: {
    height: 96,
    width: 96,
    marginBottom: 26,
    marginTop: 70,
    borderRadius: 25
  }
});

export default LoginPageBase;