import React from "react";
import styled from "styled-components";
import logo from "../img/Logo.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <ul>
        <li>
          <Link to="/">Présentation</Link>
        </li>
        <li>
          <Link to="/mywork">Mon travail</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #ffe5d9;
  position: sticky;
  top: 0;
  z-index: 5;
  a {
    color: #000000;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

const Logo = styled.div`
  flex: 1;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

export default Nav;
