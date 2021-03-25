import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const Work = () => {
  return (
    <StyledWork>
      <Movie>
        <h2>The Athlete</h2>
        <div className='line'></div>
        <Link>
          <img src={athlete} alt='athlete' />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className='line'></div>
        <Link>
          <img src={theracer} alt='theracer' />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Timess</h2>
        <div className='line'></div>
        <Link>
          <img src={goodtimes} alt='goodtimes' />
        </Link>
      </Movie>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  min-height: 10vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100;
    height: 70vh;
    object-fit: cover;
  }
`;
export default Work;
