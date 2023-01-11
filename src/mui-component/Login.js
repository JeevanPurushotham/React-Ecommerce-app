import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import {
  validateEmail,
  validateMobileNo,
  validatePassword,
} from "../regex/userAuthentication";

const Login = () => {
  //below fields are used for styling..
  const avatarStyle = { backgroundColor: "#1976d2" };
  const signbtn = { margin: "20px auto" };
  const linkText = { textDecoration: "none" };
  //user validation
  const productPage = useNavigate();
  const [inputValue, setInputValue] = useState({
    emailId_mobileNo: "",
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
    const getUserData = localStorage.getItem("userData");
    const { emailId_mobileNo, password } = inputValue;
    if (
      !(
        !validateEmail.test(emailId_mobileNo) ||
        !validateMobileNo.test(emailId_mobileNo)
      )
    ) {
      alert("please enter valid email or mobile number");
    } else if (!validatePassword.test(password)) {
      alert("password must contains 8 special characters");
    } else {
      const userData = JSON.parse(getUserData);
      const result = userData.filter((ele) => {
        return (
          ele.mobileNo === emailId_mobileNo || ele.emailId === emailId_mobileNo
        );
      });
      if (
        result.length !== 0 &&
        (result[0].emailId === emailId_mobileNo ||
          result[0].mobileNo === emailId_mobileNo) &&
        result[0].password === password
      ) {
        productPage("/products");
      } else {
        alert("entered invalid user details..");
      }
    }
  };

  return (
    <Grid>
      <Paper className="paper" elevation={10}>
        <Grid align="center">
          <Avatar className="avatar" style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          id="standard-basic-1"
          label="Email/MobileNo"
          variant="standard"
          type="text"
          name="emailId_mobileNo"
          onChange={getdata}
          fullWidth
          required
        />
        <TextField
          id="standard-basic-3"
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
          Sign In
        </Button>
        <NavLink to={"/signin"} style={linkText}>
          <Button type="submit" color="primary" variant="contained" fullWidth>
            Create a new account
          </Button>
        </NavLink>
      </Paper>
    </Grid>
  );
};

export default Login;
