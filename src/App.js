import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInSignUpPage';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const{setCurrentUser} =this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
    
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
        <Header />
        {/* Switch gives us more control by ensuring only one component is rendered for a given two similar path */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
