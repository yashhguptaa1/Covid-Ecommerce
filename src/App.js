import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInSignUpPage';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const{setCurrUser} =this.props;

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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
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
