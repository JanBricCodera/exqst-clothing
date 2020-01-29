import React from "react";
import "./signIn.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButtom from "../../components/customButton/customButton.component";
import { signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleInputChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            handleChange={this.handleInputChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            handleChange={this.handleInputChange}
            label="password"
            required
          />

          <div className="buttons">
            <CustomButtom type="submit">Sign-in</CustomButtom>
            <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
              Sign-in with Google
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
