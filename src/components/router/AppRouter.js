import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import Welcome from '../welcome/Welcome';
import Contacts from '../contacts/ContactsContainer';

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </div>
  </BrowserRouter>
);
