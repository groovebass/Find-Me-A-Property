import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ProductRegisterPage from './pages/property-register-page/property-register-page.component';
import Footer from './components/footer/footer.component';
import Navigation from './components/navbar/navbar.component';
import Example from './components/example.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div>
        <Navigation />
        <Switch>
          <Route path='/login-signup' component={SignInSignUpPage} />
          <Route path='/property-register' component={ProductRegisterPage} />
        </Switch>

        <Footer />
      </div>
    )
  }
};

export default App;
