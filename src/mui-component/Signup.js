import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  validateEmail,
  validateMobileNo,
  validatePassword,
} from "../regex/userAuthentication";

const Signup = () => {
  //below fields are used for styling..
  const avatarStyle = { backgroundColor: "#1976d2" };
  const signbtn = { margin: "10px auto" };
  const paperSize = { height: "70vh" };
  //Authentication
  const productPage = useNavigate();
  const storeData = JSON.parse(localStorage.getItem("userData") || "[]");
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
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
    const { firstName, lastName, mobileNo, emailId, password } = inputValue;
    if (firstName === "") {
      alert("Please enter your first name");
    } else if (lastName === "") {
      alert("Please enter your last name");
    } else if (!validateEmail.test(emailId)) {
      alert("please enter valid email");
    } else if (!validateMobileNo.test(mobileNo)) {
      alert("Entered mobile number must be 10 digits");
    } else if (!validatePassword.test(password)) {
      alert("Password must be conatains 8 special characters");
    } else {
      storeData.push(inputValue);
      localStorage.setItem("userData", JSON.stringify(storeData));
      productPage("/products");
    }
  };
  return (
    <Grid>
      <Paper className="paper" elevation={15} style={paperSize}>
        <Grid align="center">
          <Avatar className="avatar" style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <TextField
          id="standard-basic-1"
          label="First Name"
          variant="standard"
          type="text"
          name="firstName"
          onChange={getdata}
          fullWidth
          required
        />
        <TextField
          id="standard-basic-2"
          label="Last Name"
          variant="standard"
          type="text"
          name="lastName"
          onChange={getdata}
          fullWidth
          required
        />
        <TextField
          id="standard-basic-3"
          label="Mobile No"
          variant="standard"
          type="tel"
          name="mobileNo"
          onChange={getdata}
          fullWidth
          required
        />
        <TextField
          id="standard-basic-4"
          label="Email"
          variant="standard"
          type="email"
          name="emailId"
          onChange={getdata}
          fullWidth
          required
        />
        <TextField
          id="standard-basic=5"
          label="Password"
          variant="standard"
          type="password"
          name="password"
          onChange={getdata}
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={signbtn}
          onClick={addToLocal}
          fullWidth
        >
          Sign Up
        </Button>
      </Paper>
    </Grid>
  );
};

export default Signup;
