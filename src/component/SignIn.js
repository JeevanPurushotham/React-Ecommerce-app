import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RightImage from "./SignInImg";
import { useState } from "react";
import { NavLink,useNavigate} from "react-router-dom";
import {validatePassword,validateEmail,validateMobileNo} from "../regex/userAuthentication";

const SignIn = () => {
  const dummyPage = useNavigate();
  const [inputValue, setInputValue] = useState({
    emailId: "",
    mobileNo: "",
    password: "",
  });
  const getdata = (e) => {
    const { value, name } = e.target;
    setInputValue(() => {
      return { ...inputValue, [name]: value };
    });
  };
  const addToLocal = (e) => {
    e.preventDefault();
    const getUserData = localStorage.getItem("userData")
    const { emailId,mobileNo, password } = inputValue;
    if (!validateEmail.test(emailId)) {
      alert("please enter valid email");
    } else if (!validateMobileNo.test(mobileNo)) {
      alert("enter valid number");
    } else if (!validatePassword.test(password)) {
      alert("password must contains 8 special characters");
    } else {
      const userData = JSON.parse(getUserData);
      const result = userData.filter((ele) => {
        return ele.mobileNo === mobileNo;
      });
      if (
        result.length !== 0 &&
        result[0].mobileNo === mobileNo &&
        result[0].password === password &&
        result[0].emailId === emailId
      ) {
        dummyPage("/dummy");
      } else {
        alert("entered invalid user details..");
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left-data mt-3 p-3 " style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicEmail-1"
              >
                <Form.Control
                  type="email"
                  name="emailId"

                  onChange={getdata}
                  placeholder="Email Id"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicMobileNo-1"
              >
                <Form.Control
                  type="tel"
                  name="mobileNo"
                  onChange={getdata}
                  placeholder="Mobile No"
                  pattern="[0-9]"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword-1"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                className="col-lg-6"
                onClick={addToLocal}
                variant="primary"
                type="submit"
              >
                Sign In
              </Button>
            </Form>
            <NavLink to={"/signUp"}>
              <Button className="col-lg-6" variant="primary" type="submit">
                Create a new account
              </Button>
            </NavLink>
          </div>
          <RightImage />
        </section>
      </div>
    </>
  );
};

export default SignIn;
