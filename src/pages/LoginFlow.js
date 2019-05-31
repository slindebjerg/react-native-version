import React from 'react';
import LoginPageBase from '../component/LoginPageBase';
import LargeButton from '../component/common/LargeButton';
import { Actions } from 'react-native-router-flux';
import LoginForm from '../component/LoginForm';

const LoginFlow = () => {
  return (
    <LoginPageBase>
      <LoginForm></LoginForm>
      <LargeButton 
      whenPressed={ () => { Actions.home() }}>
        Next page
      </LargeButton>
    </LoginPageBase>
  );
}

export default LoginFlow;