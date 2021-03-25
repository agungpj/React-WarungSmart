import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavSection = () => {
  return (
    <StyledNav>
      <h1>
        <Link to='/' id='logo'>
          AgungPJ
        </Link>
        <Line />
      </h1>
      <ul>
        <li>
          <Link to='/'>About Me</Link>
          <Line />
        </li>
        <li>
          <Link to='/work'>My Works</Link>
          <Line />
        </li>
        <li>
          <Link to='/contact'>Contact Me</Link>
          <Line />
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  #logo {
    font-size: 2.5rem;
    font-family: "Dosis", sans-serif;
  }
  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled.div`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default NavSection;
