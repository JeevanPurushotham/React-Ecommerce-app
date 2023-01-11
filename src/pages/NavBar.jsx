import Badge from '@mui/material/Badge';
import React from "react";
import styled from "styled-components";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;

// `;

// // const SearchContainer = styled.div`

// //   display: flex;
// //   align-items: center;
// //   margin-left: 25px;
// //   padding: 5px;
// // `;

// // const Input = styled.input`
// //   border: none; 
// // `;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold; 
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
const removeUnder = { textDecoration: "none", color: 'white' }

const Navbar = () => {
  const goToCart = useNavigate()
  const onChange = () => {
    goToCart('/cart')
  }
  return (
    <div position='fixed'>
      <AppBar >
        <Toolbar>
          <Left>
          </Left>
          <Center>
            <NavLink to={'/'} style={removeUnder}><Logo sx={{ display: { xs: "none", sm: "block" } }}>ShipFast💸</Logo></NavLink>
          </Center>
          <Right>
            <NavLink to={'/products'} style={removeUnder}> <MenuItem>PRODUCTS</MenuItem></NavLink>
            <NavLink to={'/signin'} style={removeUnder}><MenuItem>REGISTER</MenuItem></NavLink>
            <NavLink to={'/login'} style={removeUnder}><MenuItem>SIGN IN</MenuItem></NavLink>
           
          <MenuItem onClick={onChange}>
              <Badge color="primary">
                <AddShoppingCartIcon />
              </Badge>
              </MenuItem>
          </Right>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;