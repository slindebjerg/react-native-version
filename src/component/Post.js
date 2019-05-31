import React from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { Actions } from 'react-native-router-flux';

class Post extends React.Component {
  state = { 
    user: {
      firstName: "",
      lastName: "",
      thumbnail: ""
    },
    post: {
      title: "",
      location: "",
      price: "",
      userID: "",
      give: ""
    }
  }
          
  giveOrTake() {
    if(this.state.post.give === true ){
      this.setState({
        post: { 
          title: this.state.post.title,
          location: this.state.post.location,
          price: this.state.post.price,
          userID: this.state.post.userID,
          give: "Wants to GIVE"
        }
      })
    } else if (this.state.post.give === false ){
      this.setState({
        post: {
          title: this.state.post.title,
          location: this.state.post.location,
          price: this.state.post.price,
          userID: this.state.post.userID,
          give: "Wants to TAKE"
        }
      })
    }
  };
  
  loadPost() {
    if(this.props.didLoad && !this.state.populated){
      // Somehow get the next line to wait for postId to not be empty
      var postRef = firebase.firestore().collection('posts').doc(this.props.postId);
      var getDoc = postRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          this.setState({
            post: {
              title: doc.data().title,
              price: doc.data().price,
              location: doc.data().location,
              userID: doc.data().userID,
              give: doc.data().give
            }
          })
        }
      }).then(() => {
        // console.log(this.state.post.userID);
        var userRef = firebase.firestore().collection('users').doc(this.state.post.userID);
        var getDoc = userRef.get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            this.setState({
              user: {
                userName: doc.data()['first name'][0].toUpperCase() + 
                          doc.data()['first name'].slice(1) + ' ' +
                          doc.data()['last name'][0].toUpperCase() +
                          doc.data()['last name'].slice(1),
                firstName: doc.data()['first name'][0].toUpperCase() + 
                           doc.data()['first name'].slice(1),
                lastName: doc.data()['last name'][0].toUpperCase() + 
                          doc.data()['last name'].slice(1),
                thumbnail: doc.data().thumbnail
              },
              populated: true
            })
          }
        }).then(() => 
          this.giveOrTake()
          )
        .catch(err => {
          console.log('Error getting document', err);
        });
      })
    }
  }
  // THIS IS WHAT I USED TO POPULATE THE FIRESTORE DB
  //   this.setState({
  //     firstName: response.data.results[0].name.first,
  //     lastName: response.data.results[0].name.last,
  //     email: response.data.results[0].email,
  //     picture: response.data.results[0].picture.large,
  //     thumbnail: response.data.results[0].picture.thumbnail
  //   })
  // ).then(() => firebase.firestore().collection("users").add({
  //   "first name": this.state.firstName,
  //   "last name": this.state.lastName,
  //   "email": this.state.email,
  //   "picture": this.state.picture,
  //   "thumbnail": this.state.thumbnail
  // })

  render() {
    if(this.props.didLoad==true){
      this.loadPost();
      return(
        <TouchableOpacity onPress={()=> Actions.postDetail({postId:this.props.postId, 
                                                            userName:this.state.user.firstName,
                                                            thumbnail:this.state.user.thumbnail,
                                                            userID: this.state.post.userID})}>
          <Card>
            <CardSection style={styles.headerStyle}>
              <View style={styles.headerStyle}>
                <Image source={{uri: this.state.user.thumbnail}} 
                      style={styles.imageStyle}/>
                <Text style={styles.fontHeader}>{this.state.user.userName}</Text>
              </View>
            </CardSection>
            <CardSection>
              <Text style={styles.fontReg}>{this.state.post.give}</Text>
            </CardSection>
            <CardSection>
              <Text style={styles.fontTitle}>{this.state.post.title}</Text>
            </CardSection>
            <CardSection>
              <Text style={styles.fontBold}>{this.state.post.price}</Text>
            </CardSection>
            <CardSection>
              <Text style={styles.fontBold}>{this.state.post.location}</Text>
            </CardSection>
            {/* <CardSection>
              <Text style={styles.fontLight}>{this.state.post.description}</Text>
            </CardSection> */}
          </Card>
        </TouchableOpacity>
      )
    } else {
      return(
        <ActivityIndicator/>
      )
    }
  }
}

const styles = {
  fontHeader: {
    fontWeight: '200',
    color: '#707070',
    paddingLeft: 20,
    justifyContent: 'center'
  },
  fontTitle: {
    fontWeight: 'bold',
    fontSize: 24, 
    color: '#707070'
  },
  fontBold: {
    fontWeight: 'bold',
    color: '#707070',
  },
  fontReg: {
    color: '#707070',
  },
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  }
}

export default Post;