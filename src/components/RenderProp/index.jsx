import React, { useState } from "react";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg?w=136&h=136"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

// class Mouse extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouseMove(event) {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     });
//   }

//   render() {
//     return (
//       <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

//         {/*
//           Instead of providing a static representation of what <Mouse> renders,
//           use the `render` prop to dynamically determine what to render.
//         */}
//         {this.props.children(this.state)}
//       </div>
//     );
//   }
// }

const Mouse = (props) => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {props.abc(state)}
    </div>
  );
};

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse abc={(mouse) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}

export default MouseTracker;
