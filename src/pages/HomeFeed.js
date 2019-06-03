import React from 'react';
import { View } from 'react-native';
import PostList from '../component/PostList';
import SearchBar from '../component/SearchBar';

const HomeFeed = () => {
  return (
    <View style={styles.viewStyle}>
      <SearchBar />
      <PostList></PostList>
    </View>
  )
}

const styles = {
  viewStyle: {
    height: '100%',
    alignItems: 'center',
  },
}

export default HomeFeed;