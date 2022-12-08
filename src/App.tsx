import React, {useState} from 'react';
import './App.css';
import {DataStore, Hub, syncExpression} from 'aws-amplify';
import {AmplifyAuthenticator, AmplifySignUp} from '@aws-amplify/ui-react';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import {FormFieldTypes} from '@aws-amplify/ui-components/dist/types/components/amplify-auth-fields/amplify-auth-fields-interface';
import MainRouter from "./MainRouter";
import {BrowserRouter as Router} from "react-router-dom";
import {Box, WeekDay} from "./models";
import {BOX_STATUS} from "./API";

DataStore.configure({
    maxRecordsToSync: 100000,
});

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
        formFields={[
          {
            type: 'username',
            label: 'Username *',
            placeholder: 'Enter your username',
            required: true,
          },
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
