import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInSignUpPage';
import CheckoutPage from './pages/checkout/Checkout'
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const{setCurrUser} =this.props;

    // userAuth is current user state on firebase project
    //onAuthStateChanged is open messaging system/open subscription b/w firebase and our application
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrUser(userAuth);
    });
    
  }

//closing the open subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
        {/* We want Header component to show on each page even though url changes*/}
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

//Mapping prop setCurrUser to dispatch function setCurrentUser we get from user.actions.js
const mapDispatchToProps = dispatch => ({
  setCurrUser: user => dispatch(setCurrentUser(user))
});


//will help in accessing this.props
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
