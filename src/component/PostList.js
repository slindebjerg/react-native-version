import React from 'react';
import { ScrollView, ActivityIndicator, Alert } from 'react-native';
import Post from './Post';
import * as firebase from 'firebase';
import 'firebase/firestore';

class PostList extends React.Component {
  state = {
    posts: []
  }
  
  componentDidMount() {
    firebase.firestore().collection('posts').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        this.setState(state => {
          const listOfPosts = state.posts.concat(doc.id)
          return {
            posts: listOfPosts,
            didLoad: true
          }
        })
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
      Alert.alert("Couldn't find any posts.", 
                  "Are you logged in?",
                  [{text: "Dismiss"}])
    });
  }

  renderPosts() {
    return this.state.posts.map(post =>
    <Post key={post} postId={post} didLoad={this.state.didLoad}/>)
  }

  render() {
    if(this.state.didLoad) {
      return(
        <ScrollView style={styles.listStyle}>
          {this.renderPosts()}
        </ScrollView>
      )
    } else {
      return (
        <ActivityIndicator/>
      )
    }
  }
}

const styles = {
  listStyle: {
    paddingBottom: 25
  }
}

export default PostList;