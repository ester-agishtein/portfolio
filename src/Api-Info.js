import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Api from "./Api";
class ApiInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="project-template">
        <BrowserRouter>
          <Route exact path={process.env.PUBLIC_URL + "/#Air-Bender-Api-Info"}>
            <Col className="project-col">
              <h1 className="project-name">
                Avatar the Last Airbender Database
              </h1>
              <img
                className="project-img"
                alt="apiImg"
                src={process.env.PUBLIC_URL + "/apiImg.png"}
              />
              <p className="apiInfoText">
                The Avatar the Last Airbender Database is a React front-end for
                the{" "}
                <a href="https://last-airbender-api.herokuapp.com/">
                  Last Airbender API
                </a>
                , created by Paige Gorry. Using a combination of fetch calls and
                the map function, the code dynamically creates buttons for all
                of the shows characters and populates the information box when
                the corresponding button is clicked.
              </p>
              <h2>The Code</h2>

              <h5 className="apiInfoText">
                The code has two main parts. The creation of the buttons and the
                retrieving and displaying of the character data.
              </h5>
              <h3>
                <strong>Button Creation</strong>
              </h3>
              <p className="apiInfoText">
                In componentDidMount, the code calls to the API and collects all
                the character names. The API returns a JSON object. The code
                then sets the data object in the state to be the JSON object.{" "}
              </p>

              <img
                className="project-img"
                alt="compoDidMnt"
                src={process.env.PUBLIC_URL + "/compoDidMnt.png"}
              />

              {/* <a href="https://github.com/ester-agishtein/portfolio/blob/1613e8b439cda3301df9ce95ea1cda358366d424/src/Game.js#L8-L54">
                {" "}
                (Click here to view the whole code on GitHub).{" "}
              </a> */}
              <p className="apiInfoText">
                Then in the create buttons function, the names of all the
                characters are collected and pushed into the buttons array.{" "}
              </p>

              <img
                className="project-img"
                alt="buttons"
                src={process.env.PUBLIC_URL + "/createButtonsFnc.png"}
              />
              {/* <a href="https://github.com/ester-agishtein/portfolio/blob/1613e8b439cda3301df9ce95ea1cda358366d424/src/Game.js#L85-L132">
                {" "}
                (Click here to view the whole code on GitHub).{" "}
              </a> */}

              <p className="apiInfoText">
                Finally, in the render function, I used the map function to map
                the buttons array. I used the names of the characters as the
                text for the buttons and passed the character id’s to the
                onclick function for latter use.{" "}
              </p>
              <img
                className="project-img"
                alt="map"
                src={process.env.PUBLIC_URL + "/map.png"}
              />
              <h3>
                <strong>Populating the Information Box </strong>
              </h3>
              <p className="apiInfoText">
                To get the character information, I created the displayInfo
                method. This method is called in the onClick in the render
                method. It takes the character’s id as an argument. The method
                then manipulates the URL to ask for that characters information.
                Finally, the variable called info in the component’s state is
                set to the returned JSON object. Info is then parsed in the
                render method to display the correct information.
              </p>
              <img
                className="project-img"
                alt="info"
                src={process.env.PUBLIC_URL + "/displayInfo.png"}
              />

              <Link
                to={process.env.PUBLIC_URL + "/Air-Bender-Api-Info/Api"}
                style={{
                  color: "black",
                  fontSize: "10vw"
                }}
              >
                Try it Yourself!
              </Link>
            </Col>
          </Route>

          <Route path={process.env.PUBLIC_URL + "/Air-Bender-Api-Info/Api"}>
            <div className="app">
              <Col bsPrefix="componentCol">
                <Api />
              </Col>
            </div>
          </Route>

          <Link
            to={process.env.PUBLIC_URL + "/Air-Bender-Api-Info"}
            style={{ color: "black" }}
          ></Link>
        </BrowserRouter>
      </div>
    );
  }
}

export default ApiInfo;
