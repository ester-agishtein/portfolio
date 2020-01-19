import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Game from "./Game";
class RecycleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="project-template">
        <BrowserRouter>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/React-Set-Recycle-Info"}
          >
            <Col className="project-col">
              <h1 className="project-name">React, Set, Recycle</h1>
              <img
                className="project-img"
                src={process.env.PUBLIC_URL + "/gameBig.png"}
              />
              <p>
                Ready Set Recycle is a React game which uses the React-Konva
                library. The objective of the game is to sort the bottles and
                bags into the corresponding bins. From a development
                perspective, I wanted to build a game like Ready Set Recycle so
                as to better understand how to build interactive applications.
              </p>
              <h2>The Code</h2>

              <p>
                The project can be broken down into two main parts. The
                recycling bins and the trash. To make the bins, I made a
                reusable component, ObjectImage, which takes a file path and X
                and Y coordinates.
              </p>

              <img
                className="project-img"
                src={process.env.PUBLIC_URL + "/ObjectImage.png"}
              />

              <a href="https://github.com/ester-agishtein/portfolio/blob/1613e8b439cda3301df9ce95ea1cda358366d424/src/Game.js#L8-L54">
                {" "}
                (Click here to view the whole code on GitHub).{" "}
              </a>
              <p>
                For the bottles and bags, I made a Trash object which takes a
                file path (for the image), the corresponding coordinates to the
                trash bins, and the item name. When the trash object is dropped,
                the handleDragEnd function checks to see if the trash was
                dropped in the correct location. If so, it glows yellow. If not,
                it glows red.
              </p>

              <img
                className="project-img"
                src={process.env.PUBLIC_URL + "/handleDrag.png"}
              />
              <a href="https://github.com/ester-agishtein/portfolio/blob/1613e8b439cda3301df9ce95ea1cda358366d424/src/Game.js#L85-L132">
                {" "}
                (Click here to view the whole code on GitHub).{" "}
              </a>
              <p>
                The challenges I experienced in this project was primarily in
                dealing with React-Konva. The rules about layering were
                difficult to navigate and, I think for this project, were not
                worth the hassle. In the future I would use a series of buttons
                instead, for I believe that would be simpler and more elegant.
                However, it was a fun library to learn and definitely has some
                cool features.
                <br />
                Wanna give it a shot?
              </p>
              <Link
                to={process.env.PUBLIC_URL + "/React-Set-Recycle-Info/Game"}
                style={{
                  color: "black",
                  fontSize: "10vw"
                }}
              >
                Click to Play!
              </Link>
            </Col>
          </Route>

          <Route path={process.env.PUBLIC_URL + "/React-Set-Recycle-Info/Game"}>
            <div className="app">
              <Col bsPrefix="componentCol">
                <Game />
              </Col>
            </div>
          </Route>

          <Link
            to={process.env.PUBLIC_URL + "/React-Set-Recycle-Info/"}
            style={{ color: "black" }}
          ></Link>
        </BrowserRouter>
      </div>
    );
  }
}

export default RecycleInfo;
