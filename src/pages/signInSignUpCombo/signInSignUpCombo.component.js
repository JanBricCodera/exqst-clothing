import React from "react";
import "./signInSignUpCombo.styles.scss";
import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/signUp/signUp.component";

const signInSignUpCombo = () => (
  <div className="signin-signup-combo">
    <SignIn />
    <SignUp />
  </div>
);

export default signInSignUpCombo;
