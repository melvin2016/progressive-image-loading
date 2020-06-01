import React from "react";
import ImageLoader from "./ImageLoader";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          marginTop: "80px",
        }}
      >
        Progressive Image Loading Tutorial
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr",
          margin: "100px 0",
        }}
      >
        <ImageLoader source="img.jpg" alt="by Ivana Cajina on Unsplash" />
        <ImageLoader source="img2.jpg" alt="by Brooke Cagle on Unsplash" />
        <ImageLoader source="img3.jpg" alt="by Caju Gomes on Unsplash" />
      </div>
    </div>
  );
}

export default App;
