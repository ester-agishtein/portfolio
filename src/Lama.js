import React, { Component } from "react";
import Button from "react-bootstrap/Button";
var Sound = require("react-sound").default;

class Lama extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      handPos: "65vw",
      lamaPos: "0vw",
      text: "Oooo Poke the Lamaaa!",
      play: "PLAYING",
      mp3: process.env.PUBLIC_URL + "/whatUp.mp3"
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  //updates window.innerwidth and height

  pokeLama = () => {
    // we are in starting position
    if (this.state.handPos == "65vw") {
      this.setState({
        handPos: "17vw",
        play: "PAUSED"
      });
      window.setTimeout(() => {
        this.setState({
          lamaPos: "-50vw",
          text: "Oh no! Come back lama!",
          mp3: process.env.PUBLIC_URL + "/scream.mp3",
          play: "PLAYING",
          play: "PAUSED",
          play: "PLAYING"
        });
      }, 550);
    } else {
      // hand pokes lama
      this.setState({
        handPos: "65vw",
        mp3: process.env.PUBLIC_URL + "/whatUp.mp3",
        lamaPos: "0vw",
        text: "Oooo Poke the Lamaaa!",
        play: "PLAYING",
        play: "PAUSED",
        play: "PLAYING"
      });
    }
  };
  render() {
    return (
      <>
        <div className="lamaGame">
          <div className="lamaText">
            <h1>Welcome to Poke A Lama</h1>
            <h2>Click the hand to poke the lama.</h2>
            {this.state.text}
          </div>

          <Button
            bsPrefix="lamaButton"
            onClick={this.pokeLama}
            variant="info"
            size="lg"
          >
            <div style={{ right: this.state.handPos }} className="moving-img">
              <img src={process.env.PUBLIC_URL + "/hand.png"} />
            </div>
          </Button>

          <div style={{ right: this.state.lamaPos }} className="moving-img">
            <img src={process.env.PUBLIC_URL + "/lama.png"} />
          </div>
          <Sound url={this.state.mp3} playStatus={this.state.play} />
        </div>
      </>
    );
  }
}
export default Lama;
