import React from "react";

function About(props) {

  if (props.bio === null || props.bio === ''){
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links />
      </div>
    );
  }else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links />
      </div>
    );
  }
}

function Links(props){
  return(
    <>
      <h3>Links</h3>
      <a href={props.links.github}>{props.links.github}</a>
      <a href={props.links.linkedin}>{props.links.linkedin}</a>
    </>
  )
}

export default About;
