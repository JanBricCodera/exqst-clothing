import React from "react";
import "./signUp.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButtom from "../../components/customButton/customButton.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log("[Sign up component] handleSubmit method e", error);
    }
  };

  handleInputChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account yet</h2>
        <span>Sign up with an email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            value={displayName}
            type="text"
            handleChange={this.handleInputChange}
            label="username"
            required
          />
          <FormInput
            name="email"
            value={email}
            type="email"
            handleChange={this.handleInputChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            value={password}
            type="password"
            handleChange={this.handleInputChange}
            label="password"
            required
          />
          <FormInput
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            handleChange={this.handleInputChange}
            label="confirm password"
            required
          />

          <CustomButtom type="submit">Sign-up</CustomButtom>
        </form>
      </div>
    );
  }
}

export default SignUp;
