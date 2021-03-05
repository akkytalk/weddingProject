import React, { Fragment, useEffect } from "react";
//import Header from "../Home/Header";
import * as actions from "../../reduxStore/actions";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { Formik, Form, Field } from "formik";
// import FA from "react-fontawesome";
// import {
//   Card,
//   Button,
//   FormGroup,
//   InputGroup,
//   InputGroupAddon,
//   InputGroupText,
//   CardBody,
//   CustomInput,
// } from "reactstrap";

const UserLogin = (props) => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const switchers = [...document.querySelectorAll(".switcher")];

    switchers.forEach((item) => {
      item.addEventListener("click", function () {
        switchers.forEach((item) =>
          item.parentElement.classList.remove("is-active")
        );
        this.parentElement.classList.add("is-active");
      });
    });
  });

  const handleSubmit = (values, setSubmitting) => {
    let data = {
      email: user.email,
      password: user.password,
    };
    console.log(data);
    props.postLogin(data);
    //setSubmitting(false);
    return;
  };

  console.log("login data", props.login?.login);

  return (
    <Fragment>
      <section className="forms-section">
        <div className="forms">
          <div className="form-wrapper is-active">
            <button
              type="button"
              className="switcher switcher-login"
              style={{ fontStyle: "bold" }}
            >
              Login
              <span className="underline" />
            </button>
            {/* <form className="form form-login">
                            <Formik
                                initialValues={{
                                    email: "",
                                    password: "",
                                }}
                                onSubmit={handleSubmit}
                            >
                                {(formProps) => (
                                    <Form className="p-4">
                                        <FormGroup>
                                            <InputGroup size="lg">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <FA name={"user-circle"} />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Field
                                                    component={CustomInput}
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Enter Email"
                                                />
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup>
                                            <InputGroup size="lg">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <FA name={"unlock-alt"} />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Field
                                                    component={CustomInput}
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Enter Password"
                                                />
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup>
                                            <Button
                                                color="primary"
                                                type="submit"
                                                size="lg"
                                                block
                                                disabled={formProps.isSubmitting}
                                            >
                                                Log In
                  </Button>
                                            <span className="text-danger pt-3 text-center">
                                                {props.login?.errMess
                                                    ? props.login?.errMess?.message ===
                                                        "Error:401 Unauthorized"
                                                        ? "Wrong Login credentials"
                                                        : props.login?.errMess?.message
                                                    : null}
                                            </span>
                                        </FormGroup>
                                    </Form>
                                )}
                            </Formik>
                        </form> */}
            <form className="form form-login" onSubmit={handleSubmit}>
              <fieldset>
                <legend>
                  Please, enter your email and password for login.
                </legend>
                <div className="input-block">
                  <label htmlFor="login-email">E-mail</label>
                  <input
                    id="login-email"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="login-password">Password</label>
                  <input
                    id="login-password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </fieldset>
              <button type="submit" className="btn-login">
                Login
              </button>
            </form>
          </div>
          <div className="form-wrapper">
            <button type="button" className="switcher switcher-signup">
              Sign Up
              <span className="underline" />
            </button>
            <form className="form form-signup">
              <fieldset>
                <legend>
                  Please, enter your email, password and password confirmation
                  for sign up.
                </legend>
                <div className="input-block">
                  <label htmlFor="signup-email">E-mail</label>
                  <input id="signup-email" type="email" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password">Password</label>
                  <input id="signup-password" type="password" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password-confirm">
                    Confirm password
                  </label>
                  <input
                    id="signup-password-confirm"
                    type="password"
                    required
                  />
                </div>
              </fieldset>
              <button type="submit" className="btn-signup">
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postLogin: (data) => {
    dispatch(actions.postLogin(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
