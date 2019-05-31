import React from 'react';
import { ScrollView } from 'react-native';
import Post from './Post';
import * as firebase from 'firebase';
import 'firebase/firestore';

class PostList extends React.Component {
  state = {
    posts: []
  }
  
  componentDidMount() {
    var postRef = firebase.firestore().collection('posts')
    var postsInDb = postRef.get()
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
      });
  }

  renderPosts() {
    return this.state.posts.map(post =>
    <Post key={post} postId={post} didLoad={this.state.didLoad}/>)
  }

  render() {
    return(
      <ScrollView>
        {this.renderPosts()}
      </ScrollView>
      )
  }
}

export default PostList;