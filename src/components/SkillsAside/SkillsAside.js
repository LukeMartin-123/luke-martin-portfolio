import React from "react";
import Row from "../Row/Row.js";
import Col from "../Col/Col.js";
import "./styles.css";


function SkillsAside() {
  return (
    <>

      <h1 className="header">
        Skills & Experience
      </h1>


      <Col size="md-12 sm-12">
        <div className="webdev">

          <h3 className="title">
            Experience
        </h3>
          <p>
            For the past 5 years I've worked in account management in multiple advertising agencies in both New York City and Colorado. I’ve had the pleasure of working on a brand roster that includes Chevron Oil and Gas, Gerber Baby Food, SunnyD, New Belgium Brewing, Chili’s Bar & Grill, The Cheesecake Factory and more.
            </p>

          <p>
            My last position in advertising before pursuing web development was Account Supervisor in a small Colorado start up agency where I had the freedom and responsibility to manage my own accounts how I saw fit. This included managing the internal workflow of the agency, client budgets, timelines and mentoring an account manager below me.
        </p>

          <p>
            Since leaving the advertising industry I've completed a 12 week accelerated web development program through the University of Pennsylvania. Through this program I've learned multiple coding languages, frameworks and general principles that I look forward to improving on and continuing to grow as I look to make web development my new career.
        </p>
        </div>
      </Col>
      <Col size="md-12 sm-12">
        <div className="Tech">
          <div className="TechHeader">
            <h3>
              Technologies
      </h3>
          </div>

          <Row>
            <Col size="md-3 sm-6">
              <h4 className="title"> Languages</h4>
              <ul>
                <li>
                  HTML5
            </li>

                <li>
                  CSS
            </li>

                <li>
                  Javascript
            </li>

              </ul>
            </Col>

            <Col size="md-3 sm-6">
              <h4 className="title"> Libraries and Frameworks </h4>
              <ul>
                <li>
                  React
            </li>

                <li>
                  Bootstrap
            </li>

                <li>
                  node.js
            </li>

                <li>
                  express.js
            </li>

                <li>
                  jquery
            </li>

              </ul>
            </Col>

            <Col size="md-3 sm-6">
              <h4 className="title"> Data </h4>
              <ul>
                <li>
                  MongoDB
            </li>

                <li>
                  MySQL
            </li>

              </ul>
            </Col>

            <Col size="md-3 sm-6">
              <h4 className="title"> Other Skills </h4>
              <ul>
                <li>
                  Github Versioning
            </li>

                <li>
                  Adobe InDesign
            </li>

                <li>
                  Adobe Illustrator
            </li>

              </ul>
            </Col>

          </Row>

        </div>
      </Col>

      <Col size="md-12 sm-12">
        <div className="Tech">
          <div className="TechHeader">
            <h3>
              Let's Connect!
      </h3>
          </div>
          <Col size="md-12 sm-12">
            <button> Linkedin </button>

            <button> Github </button>
          </Col>
        </div>
      </Col>

    </>
  );
}


export default SkillsAside;
