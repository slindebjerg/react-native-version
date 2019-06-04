import React from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import FriendChatBox from '../component/FriendChatBox';
import UserChatBox from '../component/UserChatBox';
import * as firebase from 'firebase';
import 'firebase/firestore';

class Chat extends React.Component {
  state = {
    users: ['GrNz8UCH13Cc8tW0vtiU', ''],
    messages: [],
    chatId: ''
  }

  getUserTwo() {
    this.setState({
      users: [this.state.users[0], this.props.userID]
    })
  }

  componentDidMount() {
    console.log(this.state.users[0]);
    this.getUserTwo();
    this.loadChat();
    observer = this.initRTListener();
  }

  loadChat() {
    firebase.firestore().collection('users').doc(this.state.users[0]).get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        firebase.firestore().collection('users').doc(this.state.users[0].chats).get()
        .then(docTwo => {
          if (!docTwo.exists) {
            firebase.firestore().collection('users').doc(this.state.users[0].chats).set(this.state);
          } else {
            this.setState({
              users: docTwo.data().users,
              messages: doc.data().messages
            });
          }
        }).catch(err => {
          console.log('Error getting chat document', err);
        });
      }
    }).catch(err => {
      console.log('Error getting user document', console.log(this.state), err);
    });
  }

  // Slightly modified boilerplate from for real time database update functionality.
  // initRTListener() {
  //   var doc = firebase.firestore().collection('chats').doc('SF');

  //   var observer = doc.onSnapshot(docSnapshot => {
  //     console.log(`Received doc snapshot: ${docSnapshot}`);
  //     return observer;
  //   }, err => {
  //     console.log(`Encountered error: ${err}`);
  //   });
  // }

  sendMessage() {
    console.log('sending...')
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <ScrollView>
          <FriendChatBox></FriendChatBox>
          <UserChatBox></UserChatBox>
        </ScrollView>
        <View style={styles.inputField}>
          <TextInput placeholder='Write a message...'/>
          <TouchableOpacity style={styles.button}
                            onPress={() => this.sendMessage()}>
            <Text style={styles.buttonText}>SEND</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = {
  inputField: {
    padding: 10,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#2a5699',
  },
  buttonText: {
    color: "#fff",
    padding: 8,
    borderRadius: 5,
    fontWeight: 'bold',
  }
}

export default Chat;