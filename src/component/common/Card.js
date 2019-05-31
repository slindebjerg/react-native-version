import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    borderWidth: 0,
    borderRadius: 10,
    borderColor: '#ddd',
    backgroundColor: "#fff",
    borderBottomWidth: 0,
    elevation: 2,
    shadowColor: '#f2f2f2',
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    width: 340
  }
}

export default Card;