import React from 'react';
import { View, TextInput } from 'react-native';
import MenuButton from '../component/MenuButton';
import CreatePostButton from '../component/CreatePostButton';
import { Actions } from 'react-native-router-flux';


class SearchBar extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <MenuButton style={styles.menuStyle}/>
        <TextInput
          placeholder='Search posts...'
          style={styles.textStyle}
        />
        <CreatePostButton 
        style={styles.createStyle} 
        whenPressed={ () => { Actions.createPost() }}/>
      </View>
    )
  }
}

const styles = {
  container: {
    backgroundColor: '#fff',
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    height: 50,
    marginTop: 15,
    alignItems: 'center',
    elevation: 1,
    borderRadius: 10,
    alignSelf: 'stretch',
  },
  menuStyle: {
    flex: 1,
  },
  textStyle: {
    flex: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  createStyle: {
    flex: 1,
  }

}

export default SearchBar;