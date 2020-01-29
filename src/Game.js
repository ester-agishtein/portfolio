import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Image } from "react-konva";

const amount = 3;
var count = 0;

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
      image: null,
      url: ""
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

      count++;
    } else {
      e.target.shadowColor("red");
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
        <ObjectImage src={this.state.url} />
      </>
    );
  }
}

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
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
        <h1 className="gameInstructions">Welcome to the recyling game! </h1>
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
              src={process.env.PUBLIC_URL + "/grass.png"}
              height={window.innerHeight - 200}
              y={190}
            />
            <ObjectImage
              src={process.env.PUBLIC_URL + "/paperBin.png"}
              x={window.innerWidth - 250}
              y={window.innerHeight - 400}
              width={window.innerWidth - window.innerWidth / 20}
              height={window.innerHeight / 3}
            />
            <ObjectImage
              src={process.env.PUBLIC_URL + "/bottleBin.png"}
              x={0}
              y={window.innerHeight - 400}
              width={window.innerWidth / 3}
              height={window.innerHeight / 3}
            />
            <Trash
              src={process.env.PUBLIC_URL + "/paperBag.png"}
              targetX={window.innerWidth - window.innerWidth / 10}
              targetY={window.innerHeight / 2}
            />
            <Trash
              src={process.env.PUBLIC_URL + "/bottle.png"}
              targetX={0}
              targetY={window.innerHeight / 2}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}
