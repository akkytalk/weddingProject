import React, { Fragment, useEffect } from "react";
//import Header from "../Home/Header";
import * as actions from "../../reduxStore/actions";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { Formik, Form, Field } from "formik";

import { FormGroup, InputGroup, InputGroupAddon } from "reactstrap";

const UserLogin = (props) => {
  // const [user, setUser] = React.useState({
  //   email: "",
  //   password: "",
  // });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUser({ ...user, [name]: value });
  // };

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
      email: values.email,
      password: values.password,
    };
    console.log(data);
    props.postLogin(data);
    setSubmitting(false);
    return;
  };

  const SignuphandleSubmit = (values, setSubmitting) => {
    let data = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      mobile: values.mobile,
      password: values.password,
      password_confirmation: values.password_confirmation,
    };
    console.log(data);
    props.postSignup(data);
    setSubmitting(false);
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

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={handleSubmit}
            >
              {(formProps) => (
                <Form className="form form-login">
                  <fieldset>
                    <legend>
                      Please, enter your email and password for login.
                    </legend>
                    <FormGroup className="input-block">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <label htmlFor="login-email">E-mail</label>
                        </InputGroupAddon>
                        <Field id="email" type="email" name="email" required />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="input-block">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <label htmlFor="login-password">Password</label>
                        </InputGroupAddon>
                        <Field
                          id="password"
                          type="password"
                          name="password"
                          // value={user.password}
                          // onChange={handleInputChange}
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                  </fieldset>
                  <button
                    type="submit"
                    className="btn-login"
                    disabled={formProps.isSubmitting}
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </button>
                  <span className="text-danger pt-3 text-center">
                    {props.login?.errMess
                      ? props.login?.errMess?.message ===
                        "Error:401 Unauthorized"
                        ? "Wrong Login credentials"
                        : props.login?.errMess?.message
                      : null}
                  </span>
                </Form>
              )}
            </Formik>
          </div>
          <div className="form-wrapper">
            <button type="button" className="switcher switcher-signup">
              Sign Up
              <span className="underline" />
            </button>
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                mobile: "",
                password: "",
                password_confirmation: "",
              }}
              onSubmit={SignuphandleSubmit}
            >
              {(formProps) => (
                <Form className="form form-signup">
                  <fieldset>
                    <legend>
                      Please, enter your email, password and password
                      confirmation for sign up.
                    </legend>

                    <FormGroup className="input-block">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <label htmlFor="signup-email">First Name</label>
                        </InputGroupAddon>
                        <Field
                          id="first_name"
                          type="text"
                          name="first_name"
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="input-block">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <label htmlFor="signup-email">Last Name</label>
                        </InputGroupAddon>
                        <Field
                          id="last_name"
                          type="text"
                          name="last_name"
                          required
                        />
                      </InputGroup>
                    </FormGroup>

                    <FormGroup className="input-block">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <label htmlFor="signup-email">E-mail</label>
                        </InputGroupAddon>
                        <Field id="email" type="email" name="email" required />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="input-block">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <label htmlFor="signup-email">Mobile No</label>
                        </InputGroupAddon>
                        <Field id="mobile" type="text" name="mobile" required />
                      </InputGroup>
                    </FormGroup>

                    <FormGroup className="input-block">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <label htmlFor="signup-password">Password</label>
                        </InputGroupAddon>
                        <Field
                          id="password"
                          type="password"
                          name="password"
                          required
                        />
                      </InputGroup>
                    </FormGroup>

                    <FormGroup className="input-block">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <label htmlFor="signup-email">Confirm Password</label>
                        </InputGroupAddon>
                        <Field
                          id="password_confirmation"
                          type="password"
                          name="password_confirmation"
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                  </fieldset>
                  <button
                    type="submit"
                    style={{ cursor: "pointer" }}
                    className="btn-signup"
                  >
                    Continue
                  </button>
                </Form>
              )}
            </Formik>
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
  postSignup: (data) => {
    dispatch(actions.postSignup(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
