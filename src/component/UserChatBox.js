import React from 'react';
import { View, Text } from 'react-native';

const UserChatBox = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.usernameText}>You</Text>
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>Message from one user to the next!!!</Text>
      </View>
    </View>
  )
}

const styles = {
  container: {
    width: '100%',
    padding: 5,
    borderColor: '#808080'
  },
  usernameText: {
    textAlign: 'right',
    paddingRight: 5,
  },
  messageBox: {
    backgroundColor: '#2a5699',
    margin: 5,
    padding: 5,
    marginRight: 5,
    borderRadius: 20,
    alignSelf: 'flex-end',
    width: '70%',
  },
  messageText: {
    color: '#fff',
    padding: 5,
  }
}

export default UserChatBox;