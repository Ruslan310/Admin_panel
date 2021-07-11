import React, {useState} from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import {AmplifyAuthenticator, AmplifySignUp} from '@aws-amplify/ui-react';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import {FormFieldTypes} from '@aws-amplify/ui-components/dist/types/components/amplify-auth-fields/amplify-auth-fields-interface';
import MainRouter from "./MainRouter";
import {BrowserRouter as Router, Link, Route, useHistory, withRouter} from "react-router-dom";

Amplify.configure(awsconfig);

const AuthStateApp: React.FC = () => {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<any>();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData)
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <Router>
      <MainRouter/>
    </Router>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp
        headerText="Sign Up"
        usernameAlias="email"
        formFields={[
          {
            type: 'email',
            label: 'Email *',
            placeholder: 'Enter your email',
            required: true,
          },
          {
            type: 'password',
            label: 'Password *',
            placeholder: 'Enter your password',
            required: true,
          }
        ] as FormFieldTypes}
        slot="sign-up"
      />
    </AmplifyAuthenticator>
  );
}

export default AuthStateApp;
