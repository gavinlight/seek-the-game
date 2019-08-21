import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

import Home from 'modules/Home';

const App = () => (
  <main>
    <GlobalStyle />
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </main>
);

export default withRouter(App);
