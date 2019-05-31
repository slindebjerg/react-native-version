import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginFlow from './pages/LoginFlow';
import HomeFeed from './pages/HomeFeed';
import CreatePost from './pages/CreatePost';
import PostDetailedView from './pages/PostDetailedView';
import Chat from './pages/Chat';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar={true}>
        <Scene key="home" component={HomeFeed} hideNavBar={true}/>
        <Scene key="createPost" component={CreatePost} hideNavBar={false} title='Create Post'/>
        <Scene key="login" component={LoginFlow} hideNavBar={true}/>
        <Scene key="postDetail" component={PostDetailedView} hideNavBar={false} title='Post'/>
        <Scene key="chat" component={Chat} hideNavBar={false} title='Chat'/>
      </Scene>
    </Router>
  )
}

export default RouterComponent;