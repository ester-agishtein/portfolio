import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import RecycleInfo from "./Info-Recycle";
import LamaInfo from "./LamaInfo";
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
              <div className="appBody">
                <h1>Ester S. Agishtein</h1>
                <br />
                <p>
                  I am senior C.S student at Touro college and am a MediaTech
                  intern at NBCUniversal. I currently work primarily with React
                  and am interested in front-end development and web
                  technologies. I am fascinated by the media industry, and am
                  passionate about the development of technology which
                  contributes to storytelling and human connection.
                </p>
                <h1>Projects</h1>
                <hr style={{ width: "20%" }} />
                <hr style={{ width: "40%" }} />
                <hr style={{ width: "60%" }} />
                <hr style={{ width: "80%" }} />
                <hr />
                <Link to={process.env.PUBLIC_URL + "/"}></Link>
                <ul>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/React-Set-Recycle-Info"}
                      target="_blank"
                      style={{ color: "gray", fontSize: "xx-large" }}
                    >
                      React, Set, Recycle!
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={process.env.PUBLIC_URL + "/Poke-A-Lama-Info"}
                      target="_blank"
                      style={{ color: "gray", fontSize: "xx-large" }}
                    >
                      Poke A Lama
                    </Link>
                  </li>
                </ul>
                <hr />
                <hr style={{ width: "80%" }} />
                <hr style={{ width: "60%" }} />
                <hr style={{ width: "40%" }} />
                <hr style={{ width: "20%" }} />
              </div>
            </Col>
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
