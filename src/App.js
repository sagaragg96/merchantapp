import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import HomePage from './HomePage';
import EditMerchant from './EditMerchant'
import MerchantHistory from './MerchantHistory';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/editMerchant' component={EditMerchant} />
          <Route path='/merchantHistory' component={MerchantHistory} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
