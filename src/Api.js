import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      id: "",
      info: {},
      buttons: [],

      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    fetch(
      "https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500"
    )
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  createButtons = () => {
    for (var ix = 0; ix < Object.keys(this.state.data).length; ix++) {
      this.state.buttons.push([
        this.state.data[ix].name,
        this.state.data[ix]._id
      ]);
    }
  };
  displayInfo = id => {
    this.setState({ id: id }, () => {
      var url =
        "https://last-airbender-api.herokuapp.com/api/v1/characters/" + id;

      fetch(url)
        .then(response => response.json())
        .then(json => this.setState({ info: json }));
    });
  };
  render() {
    return (
      <div
        className="apiBody"
        style={{
          fontFamily: "Lucida Console, Courier , monospace",
          width: window.innerWidth,
          height: window.innerHeight
        }}
      >
        <Jumbotron fluid>
          <Container className="container">
            <div style={{ textAlign: "center" }}>
              <h1>Avatar the Last Airbender Database</h1>
              <h5>Click on a character to find out more about them.</h5>
            </div>
          </Container>
        </Jumbotron>
        {this.createButtons()}

        <div
          className="body"
          style={{
            display: "flex",
            justifyContent: "space-evenly"
          }}
        >
          <div className="charecters">
            <div
              className="header"
              style={{ position: "absolute", marginLeft: "2vw" }}
            >
              <h2>Charecter Names: </h2>
            </div>
            <div className="buttons">
              <ul>
                {this.state.buttons.map(list => (
                  <li>
                    <Button onClick={() => this.displayInfo(list[1])}>
                      {list[0]}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="apiInfo">
            <div className="charInfo">
              <h2>Character Information: </h2>
              Name: {this.state.info.name}
              <br />
              Weapon: {this.state.info.weapon}
              <br />
              Profession: {this.state.info.profession}
              <br />
              Position: {this.state.info.profession}
              <br />
              Affiliation: {this.state.info.affiliation}
              <br />
              <div
                style={{
                  position: "relative",
                  marginLeft: "15%"
                }}
              >
                {this.state.info.photoUrl === undefined ? (
                  <div></div>
                ) : (
                  <img alt="charecter" src={this.state.info.photoUrl} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
