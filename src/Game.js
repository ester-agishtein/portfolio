import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Image } from "react-konva";

var bottleCount = 0;
var bagCount = 0;
var amount = 3;
class ObjectImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }

  componentDidMount() {
    this.loadImage();
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener("load", this.handleLoad);
  }
  loadImage() {
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener("load", this.handleLoad);
  }
  handleLoad = () => {
    this.setState({
      image: this.image
    });
  };

  render() {
    return (
      <>
        <Image
          x={this.props.x}
          y={this.props.y}
          width={this.props.width}
          height={this.props.height}
          image={this.state.image}
          ref={node => {
            this.imageNode = node;
          }}
        />
      </>
    );
  }
}

class Trash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }

  componentDidMount() {
    this.loadImage();
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener("load", this.handleLoad);
  }
  loadImage() {
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener("load", this.handleLoad);
  }
  handleLoad = () => {
    this.setState({
      image: this.image
    });
  };
  handleDragStart = e => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15
      },
      scaleX: 1.1,
      scaleY: 1.1
    });
  };
  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    });
    var targetX = this.props.targetX;
    var targetY = this.props.targetY;

    var targetXUpperRange = targetX + 200;
    var targetXLowerRange = targetX - 100;
    var targetYUpperRange = targetY + 300;
    var targetYLowerRange = targetY - 100;

    if (
      e.target.x() < targetXUpperRange &&
      e.target.x() > targetXLowerRange &&
      e.target.y() < targetYUpperRange &&
      e.target.y() > targetYLowerRange
    ) {
      e.target.shadowColor("yellow");
      if (this.props.items == "Bottles") {
        bottleCount++;
      }
      if (this.props.items == "Bags") {
        bagCount++;
      }
    } else {
      e.target.shadowColor("red");
      if (this.props.items == "Bottles") bottleCount += 0;
      if (this.props.items == "Bags") bagCount += 0;
      console.log("bottles = ", bagCount);
      console.log("bags = ", bagCount);
    }
  };

  render() {
    return (
      <>
        {[...Array(amount)].map((_, i) => (
          <Image
            key={i}
            x={Math.random() * (window.innerWidth - 200)}
            y={Math.random() * (window.innerHeight - 200)}
            width={30}
            height={60}
            image={this.state.image}
            ref={node => {
              this.imageNode = node;
            }}
            draggable
            shadowOpacity={1}
            shadowBlur={30}
            onDragStart={this.handleDragStart}
            onDragEnd={this.handleDragEnd}
          />
        ))}
      </>
    );
  }
}

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      intervalId: "",
      finished: ""
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

  render() {
    return (
      <div className="game">
        <h1 className="gameInstructions">Welcome to the Recyling game! </h1>
        <h2 className="gameInstructions">
          To win, put the bottles in the blue bin and the bags in the green!
        </h2>
        <Stage
          className="stage"
          width={window.innerWidth}
          height={window.innerHeight}
        >
          <Layer>
            <ObjectImage
              src="/grass.png"
              height={window.innerHeight - 200}
              y={190}
            />
            <ObjectImage
              src="/paperBin.png"
              x={window.innerWidth - 250}
              y={window.innerHeight - 400}
            />
            <ObjectImage
              src="/bottleBin.png"
              x={0}
              y={window.innerHeight - 400}
            />
            <Trash
              src="/paperBag.png"
              targetX={window.innerWidth - 250}
              targetY={window.innerHeight - 400}
              items={"Bags"}
            />
            <Trash
              src="/bottle.png"
              targetX={0}
              targetY={window.innerHeight - 400}
              items={"Bottles"}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}
