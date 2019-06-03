import React from 'react';
import { View, Text, Switch, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import 'firebase/firestore';

class CreatePost extends React.Component {
  state = {
    give: true,
    giveText: 'I want to give',
    title: '',
    price: '',
    location: '',
    description: '',
    userID: 'GrNz8UCH13Cc8tW0vtiU', // Must change in production. This is a random user from the db
  }

  toggleSwitch() {
    if(this.state.give == true){
      this.setState({ give: false, giveText: "I want to take" })
    } else {
      this.setState({ give: true, giveText: "I want to give" })
    }
  }

  pushPostToDb() {
    if(this.checkIfFieldsArePopulated() == true) {
      firebase.firestore().collection('posts').add({
        give: this.state.give,
        title: this.state.title,
        price: this.state.price,
        location: this.state.location,
        description: this.state.description,
        userID: this.state.userID
      }).then( ref => { console.log(ref.id) } )
      Alert.alert('Post created');
      Actions.home();
      this.setState({
        give: true,
        giveText: 'I want to give',
        title: '',
        price: '',
        location: '',
        description: '',
        userID: 'GrNz8UCH13Cc8tW0vtiU',
      })
    } else {
      Alert.alert('You must fill in all boxes');
    }
  }

  checkIfFieldsArePopulated() {
    if(this.state.title != '' &&
       this.state.price != '' &&
       this.state.location != '' && 
       this.state.description != '') {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return(
      <View style={styles.wrapper}>
        <View style={styles.giveContainer}>
          <Text style={styles.giveText}>{this.state.giveText}</Text>
          <Switch style={styles.giveSwitch} 
          value={this.state.give} 
          onValueChange={() => this.toggleSwitch()}/>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputText}>Title:</Text>
            <TextInput placeholder='Handstand lessons'
                       style={styles.textInput}
                       value={this.state.title}
                       onChangeText={ (title) => this.setState({title})}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputText}>Price:</Text>
            <TextInput placeholder='Six pack of beer'
                       style={styles.textInput}
                       value={this.state.price}
                       onChangeText={ (price) => this.setState({price})}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputText}>Location:</Text>
            <TextInput placeholder='Wherever I may roam'
                       style={styles.textInput}
                       value={this.state.location}
                       onChangeText={ (location) => this.setState({location})}
            />
          </View>
        </View>
        <View style={styles.description}>
          <Text style={{paddingLeft:2}}>Description:</Text>
          <TextInput
            multiline = {true}
            placeholder = "Let's walk around upside down!"
            style={styles.descriptionTextInput}
            value={this.state.description}
            onChangeText={ (description) => this.setState({description})}
          />
        </View>
        <View style={styles.greenButtonContainer}>
          <TouchableOpacity 
          style={styles.bigGreenButton}
          onPress={() => this.pushPostToDb()}>
            <Text style={styles.greenButtonText}>Create Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = {
  wrapper: {
    height: '100%'
  },
  giveContainer: {
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
    marginTop: 10
  },
  giveText: {
    width: 100
  },
  giveSwitch: {
    width: 50
  },
  textInput: {
    backgroundColor: '#fff',
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 10,
    height: 35,
    paddingLeft: 10,
    flex: 6
  },
  textInputText: {
    flex: 2,
    textAlign: 'right'
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputWrapper: {
    marginTop: 30
  },
  description: {
    marginLeft: 20,
    marginTop: 25,
  },
  descriptionTextInput: {
    backgroundColor: '#fff',
    marginBottom: 5,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 10,
    paddingLeft: 10,
    height: 200,
    textAlignVertical: 'top',
    padding: 10,
  },
  greenButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  bigGreenButton: {
    height: 50,
    width: 200,
    backgroundColor: '#88cc66',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  greenButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
}

export default CreatePost;