import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="info">
          <h1>Ester S. Agishtein</h1>
          <p>
            As senior C.S student in Lander's College for Women, <br />I am
            excited to introduce my React.JS project. This wesbite is an
            exploration of React-Router, React-Konva and React-Hooks. <br />
            Click around and enjoy!
          </p>
        </div>
        <div className="projects">
          <h1>Check out some of my projects</h1>
          <hr />
          <div>{this.props.router}</div>
        </div>
      </div>
    );
  }
}

export default Home;
