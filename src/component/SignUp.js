import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RightImage from "./SignInImg";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { validateEmail,validatePassword,validateMobileNo} from "../regex/userAuthentication";

const SignUp = () => {
    const toSingInPage = useNavigate()
  const storeData = JSON.parse(localStorage.getItem("userData") || "[]");
    const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName:"",
    mobileNo: "",
    emailId: "",
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
    console.log(inputValue);
    const {firstName,lastName, mobileNo, emailId, password } = inputValue;
    if (firstName === "") {
      alert("Please enter your first name")
    } else if (lastName === "") {
      alert('Please enter your last name')
    }else if (!validateEmail.test(emailId)) {
      alert("Invaild email");
    }else if (!validateMobileNo.test(mobileNo)) {
      alert("Entered mobile number must be 10 digits");
    } else if (!validatePassword.test(password)) {
      alert("Password must be conatains 8 special characters");
    } else {
      storeData.push(inputValue);
      localStorage.setItem("userData", JSON.stringify(storeData));
      toSingInPage("/dummy");
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left-data mt-3 p-3 " style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form >
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicfirstName"
              >
                <Form.Control
                  type="text"
                  name="firstName"
                  onChange={getdata}
                  placeholder="First Name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasiclastName"
              >
                <Form.Control
                  type="text"
                  name="lastName"
                  onChange={getdata}
                  placeholder="Last Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="emailId"
                  onChange={getdata}
                  placeholder="Email Id"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicMobileNo"
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
                controlId="formBasicPassword"
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
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already have an account
              <span>
                <NavLink to={"/signIn"}> Sign In</NavLink>
              </span>
            </p>
          </div >
          <RightImage />
        </section>
      </div>
    </>
  );
};

export default SignUp;
