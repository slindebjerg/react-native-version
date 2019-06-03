import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { Actions } from 'react-native-router-flux';

class PostDetailedView extends React.Component {
  

  getPost() {
    firebase.firestore().collection('posts').doc(this.props.postId).get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        this.setState({
          title: doc.data().title,
          price: doc.data().price,
          location: doc.data().location,
          give: doc.data().give,
          description: doc.data().description,
          loaded: true,
        })
      }
    }).catch(err => {
      console.log('Error getting document', err);
    });
  }

  componentDidMount(){
    this.getPost();
  }

  render(){
    if(this.state.loaded == true){
      return(
        <View style={styles.container}>
          <Text style={styles.headline}>{this.state.title}</Text>
          <Text style={styles.textStyle}>{this.state.give}</Text>
          <Text style={styles.textStyle}>{this.state.location}</Text>
          <Text style={styles.textStyle}>{this.state.price}</Text>
          <Text style={styles.description}>{this.state.description}</Text>
          <TouchableOpacity style={styles.chatButton}
                            onPress={() => Actions.chat({userID: this.props.userID})}>
            <Image
              source={{uri: this.props.thumbnail}}
              style={styles.imageStyle}
              />
            <Text style={styles.chatText}>Contact {this.props.userName}</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return(
        <ActivityIndicator/>
      )
    }
  }
}

const styles = {
  container: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headline: {
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30, 
  },
  textStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  description: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 120,
  },
  chatButton: {
    alignSelf: 'center',
    borderRadius: 10,
    height: 75,
    width: 300,
    backgroundColor: '#2e3192',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  chatText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  }
}

export default PostDetailedView;