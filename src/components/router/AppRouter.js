import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import Welcome from '../welcome/Welcome';
import Contacts from '../contacts/ContactsContainer';
import Lists from '../lists/ListsContainer';

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/lists" component={Lists} />
      </Switch>
    </div>
  </BrowserRouter>
);
