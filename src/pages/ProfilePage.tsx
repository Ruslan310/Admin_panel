import React from 'react'

import {AmplifySignOut} from "@aws-amplify/ui-react";
import { DataStore } from 'aws-amplify';

const ProfilePage: React.FC = () => {

  return (
    <AmplifySignOut
      onClick={async () => {
        console.log('clear datastore')
        await DataStore.clear();
      }}
    />
  )
};

export default ProfilePage
