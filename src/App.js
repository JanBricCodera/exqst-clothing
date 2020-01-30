import React from "react";

import "./App.css";
import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SubHeader from "./components/subHeaderPromoInfo/subHeaderPromoInfo.component";
import { connect } from "react-redux";
import SignInPage from "./pages/signInSignUpCombo/signInSignUpCombo.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/user/user.actions";

const HoodiesPage = () => (
  <div>
    <h1>Hoodies page</h1>
  </div>
);

class App extends React.Component {
  // state = {
  //   currentUser: null
  // };

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <SubHeader />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hoodies" component={HoodiesPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
