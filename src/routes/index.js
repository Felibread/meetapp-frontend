import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import MeetupCreator from '~/pages/MeetupCreator';
import Meetup from '~/pages/Meetup';
import MeetupEditor from '~/pages/MeetupEditor';
import NotFound from '~/components/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/meetup" component={Meetup} isPrivate />
      <Route path="/meetup_creator" component={MeetupCreator} isPrivate />
      <Route path="/meetup_editor" component={MeetupEditor} isPrivate />

      <Route path="/" component={NotFound} />
    </Switch>
  );
}
