import React, { Component } from "react";

export default class Navbarcomponent extends Component {
  render() {
    return (
      <div
        className="header"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          fontSize: "34px",
          padding: "20px 10px",
          background: "#333",
          color: "#bbb",
          textAlign: "center",
        }}
      >
        Yooo Boss
      </div>
    );
  }
}
