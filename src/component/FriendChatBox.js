import React from 'react';
import { View, Text } from 'react-native';

const FriendChatBox = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.usernameText}>User name</Text>
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
    paddingLeft: 5,
  },
  messageBox: {
    backgroundColor: '#fceeeb',
    margin: 5,
    padding: 5,
    marginRight: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
    width: '70%',
  },
  messageText: {
    color: '#000',
    padding: 5,
  }
}

export default FriendChatBox;