import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Branko Mirkovic </span>
            from <span className="purple"> Smederevo, Serbia.</span>
            <br /> I finished learning JavaScript at Comtrade Code Academy in Belgrade.
            <br />
            Additionally, I am currently employed as a law representer at Dunav Auto Doo, but i  write codes almost every day.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing violin
            </li>
            <li className="about-activity">
              <ImPointRight /> and again writing codes...:D
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Branko</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
