import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Route, Link } from "react-router-dom";
import App from "./App";
import Lama from "./Lama";
class LamaInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="project-template">
        <BrowserRouter>
          <Route exact path="/Poke-A-Lama-Info">
            <Col className="project-col">
              <h1 className="project-name">Poke A Lama</h1>
              <img className="project-img" src="/lamaScreenShot.png" />
              <p>
                Lamas. Fluffy, dopey, and just so pokable. This thought is what
                inspired me to make the Poke A Lama game. The directive of the
                game is to poke the cartoon lama and hear it scream by clicking
                on the hand. For me, learning how to make the objects move and
                produce noise was a new arena. To make the images dynamic, I
                played around with using CSS transitions and setting the new
                coordinates through inline styles. For sound, I used the React
                library – react-sound – to render the mp3 files as a React
                component. Thus, when you poke the lama, you get to hear him
                scream.
              </p>
              <h2 style={{}}>The Code</h2>

              <p>
                Here's how I did it:
                <br />
                The project can be broken down into two main parts. The CSS and
                the pokeLama function. The CSS uses the transition property to
                allow the image to move smoothly when its coordinates are
                updates.
              </p>

              <img className="project-img" src="/cssLama.png" />

              <a href="#"> (Click here to view the whole code on GitHub). </a>
              <p>
                The coordinates get updated in the pokeLama function when the
                hand (acting as a button) is clicked. PokeLama also initiates
                the sound component to play the corresponding mp3 files.
              </p>

              <img className="project-img" src="/lamaPoke.png" />
              <a href="#"> (Click here to view the whole code on GitHub). </a>
              <p>
                Now that you know the secrets behind Poke A Lama, it’s time for
                a crucial question.
                <br />
                Do you dare to poke the lama?
              </p>

              <Link
                to="/Poke-A-Lama-Info/Game"
                style={{
                  color: "black",
                  fontSize: "10vw"
                }}
              >
                Poke the Lama!
              </Link>
            </Col>
          </Route>

          <Route path="/Poke-A-Lama-Info/Game">
            <div className="app">
              <Col bsPrefix="componentCol">
                <Lama />
              </Col>
            </div>
          </Route>

          <Link to="/Poke-A-Lama-Info/" style={{ color: "black" }}></Link>
        </BrowserRouter>
      </div>
    );
  }
}

export default LamaInfo;
