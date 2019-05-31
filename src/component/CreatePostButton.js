import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const CreatePostButton = (props) => {
  return(
    <TouchableOpacity onPress={props.whenPressed}>
      <View style={styles.container}>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    backgroundColor: '#88cc66',
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
  }
}

export default CreatePostButton;