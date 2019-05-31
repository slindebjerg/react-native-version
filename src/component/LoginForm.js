import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import LargeButton from './common/LargeButton';
import CardSection from './common/CardSection';
import Card from './common/Card';
import InputField from './common/InputField';

class LoginForm extends Component {
  state = { email: '',
            passText: '',
            error: '' };

  onButtonPress() {
    const { email, passText } = this.state;
    this.setState({ error: '' })
    firebase.auth().signInWithEmailAndPassword(email, passText).catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, passText).catch(() => {
        this.setState( {error: 'Authentication failed.'})
      })
    })
  }

  renderButton () {
    return (
      <LargeButton whenPressed={ () => this.onButtonPress()}>Log in</LargeButton>
    )
  }

  render () {
    return (
      <View style={styles.containerStyle}>
        <Card>
          <CardSection>
            <InputField
              label='Email'
              placeholder='weird-flex69@gmail.com'
              value={this.state.email}
              onChangeText={ (email) => this.setState({email})}
              autoCorrect={false}
              autoCapitalize={'none'}
              />
          </CardSection>
          <CardSection>
            <InputField
              label='Password'
              placeholder='ez-2-guess'
              value={this.state.passText}
              onChangeText={ (passText) => this.setState({passText})}
              autoCorrect={false}
              secureTextEntry={true}
              autoCapitalize={'none'}
            />
          </CardSection>
        </Card>
        <Text style={styles.errorText}>{this.state.error}</Text>
        {this.renderButton()}
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    height: 300,
    alignItems: 'center'
  },
  errorText: {
    fontSize: 24,
    color: '#EB144C',
  }
}

export default LoginForm;