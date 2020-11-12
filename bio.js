import React from "react";

export default function bio() {
  const styleObject = { color: "cyan", textAlign: "center" };

  return (
    <div style={styleObject} className="banner-text" id="bio">
      <h1 style={{ marginTop: "40px" }}> Bio </h1>
      <p style={{ fontWeight: "bold", fontSize: "60px" }}>Ben Nasser Firas </p>
      <p>Full Stack Web JS</p>
      <p>
        Langages:
        <br />
        Java8,HTML 5 ,CSS ,JavaScript.
      </p>
    </div>
  );
}
