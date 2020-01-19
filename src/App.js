import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import RecycleInfo from "./Info-Recycle";
import LamaInfo from "./LamaInfo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route path={process.env.PUBLIC_URL + "/Poke-A-Lama-Info"}>
            <LamaInfo />
          </Route>

          <Route path={process.env.PUBLIC_URL + "/React-Set-Recycle-Info"}>
            <RecycleInfo />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <Col bsPrefix="componentCol">
              {/* <Row bsPrefix="projects"> */}
              <h1>My projects</h1>
              <Link
                to={process.env.PUBLIC_URL + "/"}
                style={{ color: "white" }}
              ></Link>
              <ul>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/React-Set-Recycle-Info"}
                    style={{ color: "white" }}
                  >
                    React, Set, Recycle!
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/Poke-A-Lama-Info"}
                    style={{ color: "white" }}
                  >
                    Poke A Lama
                  </Link>
                </li>
              </ul>
              {/* </Row> */}
              {/* <Row bsPrefix="info"> */}
              <h1>Ester S. Agishtein</h1>
              <p>
                I am senior C.S student at Touro college and am a MediaTech
                intern at NBCUniversal. I currently work primarily with React
                and am interested in front-end development and web technologies.
                I am fascinated by the media industry, and am passionate about
                the development of technology which contributes to storytelling
                and human connection.
              </p>
              {/* </Row> */}
            </Col>
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
