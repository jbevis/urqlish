import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Header from './Header';

const App = () => (
  <div>
    <Header />
    <div className='ph3 pv1 background-gray'>
      <Switch>
        <Route exact path="/" component={LinkList} />
        <Route exact paht="/create" component={CreateLink} />
      </Switch>
    </div>
  </div>
);

export default App;
