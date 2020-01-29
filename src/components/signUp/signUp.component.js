import React from "react";
import "./signUp.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButtom from "../../components/customButton/customButton.component";

class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
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
      <div className="sign-up">
        <h2>I dont have an account yet</h2>
        <span>Sign up with an email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            value={this.state.username}
            type="text"
            handleChange={this.handleInputChange}
            label="username"
            required
          />
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
          <FormInput
            name="confirmPassword"
            value={this.state.confirmPassword}
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
