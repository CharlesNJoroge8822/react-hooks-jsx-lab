import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">About
  <h2>About Me</h2>
  <p>Lorem Ipsum. im charles njoroge a web developer an alumni at moringa School</p>

  <img src={image} alt="I made this"/>
  </div>;
}

export default About;
