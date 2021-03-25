import React from "react";
import Home1 from "../img/home1.png";
// import styled component

import { About, Description, Image, Hide } from "../styles";

function AboutSection() {
  return (
    <About>
      <Description>
        <div className='title'>
          <div className='hide'>
            <h2>Lorem ipsum dolor sit amet.</h2>
          </div>
          <div className='hide'>
            <h2>
              Your <span>dreams</span> come
            </h2>
          </div>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          sed commodi eveniet hic repellendus harum, placeat atque asperiores
          animi odio, ipsum quo eius earum dignissimos.
        </p>
        <button>Contact Me</button>
      </Description>
      <Image>
        <img src={Home1} alt='cameraman' />
      </Image>
    </About>
  );
}

export default AboutSection;
